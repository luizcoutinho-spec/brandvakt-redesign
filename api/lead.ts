// Vercel Serverless (Node) Function — CSMA lead capture.
// Persists each lead to three destinations, best-effort and isolated:
//   1. Supabase (master record, written FIRST as a safety net)
//   2. Resend (internal email notification)
//   3. RD Station (CRM conversion, automatic)
// All credentials come ONLY from env vars (Sensitive on Vercel). Node runtime
// is required so Sensitive env vars are injected (Edge does not receive them).
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

interface LeadPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  size?: string;
  maturityScore?: number;
  maturityLevel?: string;
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

// ── Supabase: INSERT, returning the new row id ──
async function supabaseInsert(lead: LeadPayload): Promise<string | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase env not configured');
  const res = await fetch(`${url}/rest/v1/csma_leads`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      first_name: lead.firstName ?? null,
      last_name: lead.lastName ?? null,
      email: lead.email,
      company: lead.company ?? null,
      role: lead.role ?? null,
      company_size: lead.size ?? null,
      maturity_score: typeof lead.maturityScore === 'number' ? lead.maturityScore : null,
      maturity_level: lead.maturityLevel ?? null,
      consent_contact: true,
      sent_to_rd: false,
      sent_to_resend: false,
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
  await fetch(`${url}/rest/v1/csma_leads?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(fields),
  });
}

// ── Resend: internal notification email ──
async function resendNotify(lead: LeadPayload): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!key || !from || !to) throw new Error('Resend env not configured');
  const name = `${lead.firstName ?? ''} ${lead.lastName ?? ''}`.trim() || '(no name)';
  const score = typeof lead.maturityScore === 'number' ? `${lead.maturityScore}%` : 'n/a';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Novo lead CSMA: ${name}, ${lead.company ?? '(no company)'}, score ${score}`,
      html:
        `<h2>Novo lead CSMA</h2>` +
        `<p><strong>Nome:</strong> ${name}</p>` +
        `<p><strong>Email:</strong> ${lead.email ?? '-'}</p>` +
        `<p><strong>Empresa:</strong> ${lead.company ?? '-'}</p>` +
        `<p><strong>Cargo:</strong> ${lead.role ?? '-'}</p>` +
        `<p><strong>Tamanho:</strong> ${lead.size ?? '-'}</p>` +
        `<p><strong>Maturity score:</strong> ${score} (${lead.maturityLevel ?? '-'})</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

// ── RD Station: conversion event (no custom fields in this version) ──
async function rdStationConversion(lead: LeadPayload): Promise<void> {
  const token = process.env.RDSTATION_API_TOKEN;
  if (!token) throw new Error('RD Station env not configured');
  const name = `${lead.firstName ?? ''} ${lead.lastName ?? ''}`.trim();
  const res = await fetch(`https://api.rd.services/platform/conversions?api_key=${encodeURIComponent(token)}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'csma-assessment',
        email: lead.email,
        name: name || undefined,
        job_title: lead.role || undefined,
        company_name: lead.company || undefined,
      },
    }),
  });
  if (!res.ok) throw new Error(`RD Station ${res.status}: ${await res.text()}`);
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

  let lead: LeadPayload;
  try {
    lead = typeof req.body === 'string' ? JSON.parse(req.body) : ((req.body as LeadPayload) ?? {});
  } catch {
    return sendJson(res, 400, { error: 'Invalid JSON body' });
  }
  if (!lead.email) return sendJson(res, 400, { error: 'email is required' });

  const result = { ok: true, supabase: false, resend: false, rd: false };
  let leadId: string | null = null;

  // 1. Supabase first (safety net)
  try {
    leadId = await supabaseInsert(lead);
    result.supabase = true;
  } catch {
    result.supabase = false;
  }

  // 2. Resend (isolated)
  try {
    await resendNotify(lead);
    result.resend = true;
  } catch {
    result.resend = false;
  }

  // 3. RD Station (isolated)
  try {
    await rdStationConversion(lead);
    result.rd = true;
  } catch {
    result.rd = false;
  }

  // Reflect delivery status back on the master record (best-effort).
  if (leadId) {
    try {
      await supabasePatch(leadId, { sent_to_rd: result.rd, sent_to_resend: result.resend });
    } catch {
      /* non-fatal */
    }
  }

  return sendJson(res, 200, result);
}
