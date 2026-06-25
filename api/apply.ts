// Vercel Serverless (Node) Function — careers job applications.
// Persists application metadata to Supabase (master record, written FIRST) and
// emails the CV (PDF attachment) to the team via Resend, best-effort/isolated.
// The CV file itself is NOT stored in Supabase — only metadata; the file is
// delivered as an email attachment. Credentials come ONLY from env vars.
//
// Payload note: Vercel's request body limit is ~4.5MB. A 2.5MB PDF in base64 is
// ~3.4MB + JSON overhead — safely under the limit. The 2.5MB cap is enforced
// both client-side and here (server-side, by base64 byte count).

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

interface ApplyPayload {
  positionTitle?: string;
  email?: string;
  cvBase64?: string;
  cvFilename?: string;
}

const MAX_BYTES = Math.floor(2.5 * 1024 * 1024); // 2.5 MB

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

// Approximate decoded byte length of a base64 string (no data: prefix expected).
function base64Bytes(b64: string): number {
  const len = b64.length;
  const padding = b64.endsWith('==') ? 2 : b64.endsWith('=') ? 1 : 0;
  return Math.floor((len * 3) / 4) - padding;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Supabase: INSERT metadata, returning the new row id ──
async function supabaseInsert(app: ApplyPayload): Promise<string | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase env not configured');
  const res = await fetch(`${url}/rest/v1/job_applications`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      position_title: app.positionTitle ?? null,
      applicant_email: app.email,
      cv_filename: app.cvFilename ?? null,
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
  await fetch(`${url}/rest/v1/job_applications?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(fields),
  });
}

// ── Resend: email the team with the CV attached ──
async function resendNotify(app: ApplyPayload): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!key || !from) throw new Error('Resend env not configured');
  const position = app.positionTitle || 'Open Application';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: ['info@brandvakt.com', 'luiz.coutinho@brandvakt.com'],
      reply_to: app.email,
      subject: `Application: ${position}`,
      html:
        `<h2>New job application</h2>` +
        `<p><strong>Position:</strong> ${escapeHtml(position)}</p>` +
        `<p><strong>Applicant email:</strong> ${escapeHtml(app.email ?? '-')}</p>` +
        `<p>CV attached: ${escapeHtml(app.cvFilename ?? '-')}</p>`,
      attachments: [{ filename: app.cvFilename || 'cv.pdf', content: app.cvBase64 }],
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

  let app: ApplyPayload;
  try {
    app = typeof req.body === 'string' ? JSON.parse(req.body) : ((req.body as ApplyPayload) ?? {});
  } catch {
    return sendJson(res, 400, { error: 'Invalid JSON body' });
  }

  // ── Validation (do not trust the client) ──
  if (!app.email || !EMAIL_RE.test(app.email)) {
    return sendJson(res, 400, { error: 'A valid email is required' });
  }
  if (!app.cvBase64) {
    return sendJson(res, 400, { error: 'CV file is required' });
  }
  if (!app.cvFilename || !/\.pdf$/i.test(app.cvFilename)) {
    return sendJson(res, 400, { error: 'CV must be a PDF file' });
  }
  if (base64Bytes(app.cvBase64) > MAX_BYTES) {
    return sendJson(res, 400, { error: 'CV exceeds the 2.5MB limit' });
  }

  const result = { ok: true, supabase: false, email: false };
  let appId: string | null = null;

  // 1. Supabase first (safety net) — metadata only
  try {
    appId = await supabaseInsert(app);
    result.supabase = true;
  } catch {
    result.supabase = false;
  }

  // 2. Resend with CV attachment (isolated)
  try {
    await resendNotify(app);
    result.email = true;
  } catch {
    result.email = false;
  }

  // Reflect delivery status on the master record (best-effort).
  if (appId && result.email) {
    try {
      await supabasePatch(appId, { sent_to_email: true });
    } catch {
      /* non-fatal */
    }
  }

  return sendJson(res, 200, result);
}
