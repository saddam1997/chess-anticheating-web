import 'server-only';

// In-memory fixed-window limiter, keyed by e.g. `login:<ip>`. Resets when the server restarts,
// which is fine for slowing down password guessing and form spam on a single server.
const hits = new Map();

export function rateLimited(key, limit, windowMs) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > limit;
}

export function clientIp(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local';
}
