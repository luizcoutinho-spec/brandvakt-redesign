// Vercel Serverless (Node) Function — contact form submissions.
// Persists each message to Supabase (master record, written FIRST) and notifies
// the team via Resend, best-effort and isolated. Credentials come ONLY from env
// vars (Sensitive on Vercel). Node runtime is required so Sensitive env vars are
// injected (Edge does not receive them).
//
// NOTE: in-memory rate-limit state is per-instance/region, not global — a soft
// guard against trivial abuse, not airtight. Use Vercel KV/Redis for hard limits.

declare const process: { env: Record<string, string | undefined> };

interface NodeReq {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}
interface NodeRes {
  statusCode: number;
  setHeader(name: string, value: string): void;
  end(chunk?: string): void;
}

interface ContactPayload {
  first?: string;
  last?: string;
  email?: string;
  details?: string;
}

// ── Rate limit: fixed window, 12 requests / IP / minute ──
const RATE_LIMIT = 12;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; windowStart: number }>();

function header(req: NodeReq, name: string): string | undefined {
  const v = req.headers[name];
  return Array.isArray(v) ? v[0] : v;
}

function clientIp(req: NodeReq): string {
  const fwd = header(req, 'x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return header(req, 'x-real-ip') ?? 'unknown';
}

function rateLimited(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart >= WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return { limited: false, retryAfter: 0 };
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT) {
    return { limited: true, retryAfter: Math.ceil((entry.windowStart + WINDOW_MS - now) / 1000) };
  }
  return { limited: false, retryAfter: 0 };
}

function sendJson(res: NodeRes, status: number, data: unknown): void {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(data));
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Supabase: INSERT, returning the new row id ──
async function supabaseInsert(msg: ContactPayload): Promise<string | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase env not configured');
  const res = await fetch(`${url}/rest/v1/contact_messages`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      first_name: msg.first ?? null,
      last_name: msg.last ?? null,
      email: msg.email,
      details: msg.details,
      sent_to_email: false,
    }),
  });
  if (!res.ok) throw new Error(`Supabase insert ${res.status}: ${await res.text()}`);
  const rows = (await res.json()) as Array<{ id?: string }>;
  return rows?.[0]?.id ?? null;
}

async function supabasePatch(id: string, fields: Record<string, boolean>): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;
  await fetch(`${url}/rest/v1/contact_messages?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(fields),
  });
}

// ── Resend: notify the team (both inboxes) ──
async function resendNotify(msg: ContactPayload): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!key || !from) throw new Error('Resend env not configured');
  const name = `${msg.first ?? ''} ${msg.last ?? ''}`.trim() || '(no name)';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: ['info@brandvakt.com', 'luiz.coutinho@brandvakt.com'],
      reply_to: msg.email,
      subject: `New contact: ${name}`,
      html:
        `<h2>New contact message</h2>` +
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(msg.email ?? '-')}</p>` +
        `<p><strong>Details:</strong></p>` +
        `<p>${escapeHtml(msg.details ?? '-').replace(/\n/g, '<br>')}</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export default async function handler(req: NodeReq, res: NodeRes): Promise<void> {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' });

  const { limited, retryAfter } = rateLimited(clientIp(req));
  if (limited) {
    res.statusCode = 429;
    res.setHeader('content-type', 'application/json');
    res.setHeader('retry-after', String(retryAfter));
    res.end(JSON.stringify({ error: 'Too many requests' }));
    return;
  }

  let msg: ContactPayload;
  try {
    msg = typeof req.body === 'string' ? JSON.parse(req.body) : ((req.body as ContactPayload) ?? {});
  } catch {
    return sendJson(res, 400, { error: 'Invalid JSON body' });
  }
  if (!msg.email || !msg.details) {
    return sendJson(res, 400, { error: 'email and details are required' });
  }

  const result = { ok: true, supabase: false, email: false };
  let msgId: string | null = null;

  // 1. Supabase first (safety net)
  try {
    msgId = await supabaseInsert(msg);
    result.supabase = true;
  } catch {
    result.supabase = false;
  }

  // 2. Resend (isolated)
  try {
    await resendNotify(msg);
    result.email = true;
  } catch {
    result.email = false;
  }

  // Reflect delivery status on the master record (best-effort).
  if (msgId && result.email) {
    try {
      await supabasePatch(msgId, { sent_to_email: true });
    } catch {
      /* non-fatal */
    }
  }

  return sendJson(res, 200, result);
}
