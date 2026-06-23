// Vercel Serverless (Node) Function — proxy to the Anthropic Messages API.
// The ANTHROPIC_API_KEY lives ONLY in the Vercel project env (never in the
// client bundle). Mirrors brandvakt-site/app/api/claude/route.ts, plus a
// best-effort in-memory per-IP rate limit.
//
// Runtime note: Node (not Edge) on purpose. The key is a "Sensitive" env var,
// and Vercel does NOT inject Sensitive env vars into the Edge runtime — only
// into Serverless/Node functions. This uses the Node (req, res) signature and
// streams the SSE body back by pumping the upstream web stream into res.
//
// NOTE: in-memory state is per-instance/region, not global — so the limiter is
// a soft guard against trivial abuse/repetition, not airtight. For
// production-grade limits use Vercel KV / Upstash Redis.

declare const process: { env: Record<string, string | undefined> };

// Minimal request/response shapes (avoids a hard @types/node dependency).
interface NodeReq {
  method?: string;
  url?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}
interface NodeRes {
  statusCode: number;
  setHeader(name: string, value: string): void;
  write(chunk: string | Uint8Array): void;
  end(chunk?: string): void;
}

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';

// ── Rate limit: fixed window, 12 requests / IP / minute ──
// One assessment = 5 sequential calls, so 12/min ≈ ~2 assessments/min/IP
// with headroom for stream retries.
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

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return sendJson(res, 500, { error: 'API key not configured' });

  let body: { stream?: boolean } & Record<string, unknown>;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : ((req.body as Record<string, unknown>) ?? {});
  } catch {
    return sendJson(res, 400, { error: 'Invalid JSON body' });
  }

  try {
    const upstream = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    if (!upstream.ok) {
      const err = await upstream.text();
      res.statusCode = upstream.status;
      res.setHeader('content-type', 'application/json');
      res.end(err);
      return;
    }

    // Stream the SSE body back by pumping the upstream web stream into res.
    if (body.stream === true && upstream.body) {
      res.statusCode = 200;
      res.setHeader('content-type', 'text/event-stream');
      res.setHeader('cache-control', 'no-cache');
      res.setHeader('connection', 'keep-alive');
      const reader = upstream.body.getReader();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) res.write(value);
      }
      res.end();
      return;
    }

    const data = await upstream.json();
    return sendJson(res, 200, data);
  } catch {
    return sendJson(res, 502, { error: 'Upstream error' });
  }
}
