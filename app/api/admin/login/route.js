import { checkCredentials, isConfigured, startSession } from '@/lib/auth';
import { clientIp, rateLimited } from '@/lib/rateLimit';
import { error, readJsonBody } from '@/lib/http';

export async function POST(request) {
  if (!isConfigured()) return error('Admin login is not configured on the server.', 500);

  const body = await readJsonBody(request);
  if (!body) return error('Invalid request.', 400);

  if (rateLimited(`login:${clientIp(request)}`, 10, 15 * 60 * 1000)) {
    return error('Too many attempts. Try again in 15 minutes.', 429);
  }
  if (!checkCredentials(String(body.username ?? ''), String(body.password ?? ''))) {
    return error('Wrong username or password.', 401);
  }

  await startSession();
  return Response.json({ ok: true });
}
