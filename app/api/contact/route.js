import { addQuery } from '@/lib/queries';
import { clientIp, rateLimited } from '@/lib/rateLimit';
import { error, readJsonBody } from '@/lib/http';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const body = await readJsonBody(request);
  if (!body) return error('Invalid request.', 400);

  // hidden "website" field: people never fill it, bots usually do
  if (body.website) return Response.json({ ok: true });

  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();
  if (!EMAIL.test(email) || email.length > 200) return error('Please enter a valid email address.', 400);
  if (message.length < 5) return error('Please write a slightly longer message.', 400);
  if (message.length > 3000) return error('Please keep your message under 3000 characters.', 400);

  if (rateLimited(`contact:${clientIp(request)}`, 5, 10 * 60 * 1000)) {
    return error('Too many messages. Please try again in a few minutes.', 429);
  }

  await addQuery({ email, message });
  return Response.json({ ok: true });
}
