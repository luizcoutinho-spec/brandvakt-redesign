// Vercel Edge Function — proxy to the Anthropic Messages API.
// The ANTHROPIC_API_KEY lives ONLY in the Vercel project env (never in the
// client bundle). Mirrors brandvakt-site/app/api/claude/route.ts, plus a
// best-effort in-memory per-IP rate limit.
//
// NOTE: in-memory state on Edge is per-isolate/region, not global — so the
// limiter is a soft guard against trivial abuse/repetition, not airtight.
// For production-grade limits use Vercel KV / Upstash Redis.

export const config = { runtime: 'edge' };

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';

// ── Rate limit: fixed window, 12 requests / IP / minute ──
// One assessment = 5 sequential calls, so 12/min ≈ ~2 assessments/min/IP
// with headroom for stream retries.
const RATE_LIMIT = 12;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; windowStart: number }>();

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
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

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const { limited, retryAfter } = rateLimited(clientIp(req));
  if (limited) {
    return new Response(JSON.stringify({ error: 'Too many requests' }), {
      status: 429,
      headers: { 'content-type': 'application/json', 'retry-after': String(retryAfter) },
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: 'API key not configured' }, 500);

  let body: { stream?: boolean } & Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
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
      return new Response(err, {
        status: upstream.status,
        headers: { 'content-type': 'application/json' },
      });
    }

    // Forward the SSE stream untouched when streaming was requested.
    if (body.stream === true && upstream.body) {
      return new Response(upstream.body, {
        headers: {
          'content-type': 'text/event-stream',
          'cache-control': 'no-cache',
          connection: 'keep-alive',
        },
      });
    }

    const data = await upstream.json();
    return json(data);
  } catch {
    return json({ error: 'Upstream error' }, 502);
  }
}
