/**
 * In-memory fixed-window rate limiter, keyed by client IP.
 *
 * This is a reasonable floor for a single-process Node server, but it is
 * per-instance state: it resets on redeploy/restart and does not share
 * counts across multiple serverless instances. If this app is deployed to
 * a multi-instance platform, replace this with a shared store (e.g.
 * Upstash Redis) — the call site (src/app/api/leads/route.ts) is the only
 * place that needs to change.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

export function getClientKey(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}
