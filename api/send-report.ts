// Vercel Serverless (Node) Function — email the CSMA report to the lead.
// Sends the AI-generated maturity report (diagnosis + roadmap + proposal) as an
// email-safe HTML message to the lead, BCC'd to the Brandvakt team. Does NOT
// touch the lead record (csma_leads) — capture lives in /api/lead.
// Credentials come ONLY from env vars (Sensitive on Vercel; Node runtime).

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

interface ReportPayload {
  email?: string;
  company?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  maturityScore?: number;
  maturityLevel?: string;
  diagnosis?: string;
  roadmap?: string[];
  proposal?: string;
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Convert AI plain text into email-safe paragraphs (blank line = new paragraph).
function toParagraphs(text: string): string {
  const safe = escapeHtml((text || '').trim());
  if (!safe) return '';
  return safe
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 14px;font-size:14px;line-height:1.7;color:#3f3f46;">${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function sectionTitle(text: string): string {
  return `<h2 style="margin:28px 0 10px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0f766e;">${escapeHtml(text)}</h2>`;
}

function buildHtml(p: ReportPayload): string {
  const company = escapeHtml(p.company || 'Your Organization');
  const name = escapeHtml(`${p.firstName ?? ''} ${p.lastName ?? ''}`.trim());
  const score = typeof p.maturityScore === 'number' ? `${p.maturityScore}%` : '—';
  const level = escapeHtml(p.maturityLevel || '—');
  const roadmap = Array.isArray(p.roadmap) ? p.roadmap : [];
  const phaseLabels = ['Phase 1 · Months 1–3 · Immediate', 'Phase 2 · Months 4–8 · Short-term', 'Phase 3 · Months 9–12 · Strategic'];

  const roadmapHtml = roadmap
    .map((phase, i) =>
      phase
        ? `<div style="margin-bottom:16px;">` +
          `<div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#0f766e;margin-bottom:6px;">${escapeHtml(phaseLabels[i] ?? `Phase ${i + 1}`)}</div>` +
          toParagraphs(phase) +
          `</div>`
        : '',
    )
    .join('');

  return (
    `<!doctype html><html><body style="margin:0;padding:0;background:#f4f4f5;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px 0;">` +
    `<tr><td align="center">` +
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">` +
    // Header
    `<tr><td style="padding:28px 32px;background:#09090B;">` +
    `<div style="font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#4fe6d2;">Brandvakt · Security Maturity Report</div>` +
    `<div style="font-size:22px;font-weight:800;color:#ffffff;margin-top:8px;">${company}</div>` +
    `<div style="font-size:13px;color:#a1a1aa;margin-top:4px;">${name ? name + ' · ' : ''}Overall maturity: <strong style="color:#4fe6d2;">${score}</strong> · ${level}</div>` +
    `</td></tr>` +
    // Body
    `<tr><td style="padding:8px 32px 32px;">` +
    sectionTitle('Executive Diagnosis') +
    (toParagraphs(p.diagnosis || '') || '<p style="color:#71717a;">—</p>') +
    sectionTitle('12-Month Remediation Roadmap') +
    (roadmapHtml || '<p style="color:#71717a;">—</p>') +
    sectionTitle('Commercial Proposal · Brandvakt Academy') +
    (toParagraphs(p.proposal || '') || '<p style="color:#71717a;">—</p>') +
    `</td></tr>` +
    // Footer
    `<tr><td style="padding:18px 32px;border-top:1px solid #e4e4e7;background:#fafafa;">` +
    `<div style="font-size:11px;color:#71717a;">© ${new Date().getFullYear()} Brandvakt Academy · NIST CSF 2.0 · CIS Controls v8 · ISO/IEC 27001:2022</div>` +
    `</td></tr>` +
    `</table></td></tr></table></body></html>`
  );
}

async function resendSend(p: ReportPayload): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!key || !from) throw new Error('Resend env not configured');
  const company = p.company || 'Your Organization';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [p.email],
      bcc: ['luiz.coutinho@brandvakt.com', 'info@brandvakt.com'],
      subject: `Your Brandvakt Security Maturity Report — ${company}`,
      html: buildHtml(p),
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

  let p: ReportPayload;
  try {
    p = typeof req.body === 'string' ? JSON.parse(req.body) : ((req.body as ReportPayload) ?? {});
  } catch {
    return sendJson(res, 400, { error: 'Invalid JSON body' });
  }

  if (!p.email || !EMAIL_RE.test(p.email)) {
    return sendJson(res, 400, { error: 'A valid email is required' });
  }
  if (!(p.diagnosis && p.diagnosis.trim()) && !(p.proposal && p.proposal.trim())) {
    return sendJson(res, 400, { error: 'Report content is required' });
  }

  const result = { ok: true, email: false };
  try {
    await resendSend(p);
    result.email = true;
  } catch {
    result.email = false;
  }

  return sendJson(res, 200, result);
}
