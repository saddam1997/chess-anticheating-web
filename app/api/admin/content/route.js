import { isAdmin } from '@/lib/auth';
import { saveContent } from '@/lib/content';
import { error, readJsonBody } from '@/lib/http';

export async function PUT(request) {
  if (!(await isAdmin())) return error('Not signed in.', 401);
  const body = await readJsonBody(request);
  if (!body || typeof body !== 'object') return error('Invalid request.', 400);
  return Response.json({ content: await saveContent(body) });
}
