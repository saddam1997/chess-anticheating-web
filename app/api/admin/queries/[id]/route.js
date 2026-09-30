import { isAdmin } from '@/lib/auth';
import { deleteQuery } from '@/lib/queries';
import { error } from '@/lib/http';

export async function DELETE(request, { params }) {
  if (!(await isAdmin())) return error('Not signed in.', 401);
  const { id } = await params;
  if (!(await deleteQuery(id))) return error('Query not found.', 404);
  return Response.json({ ok: true });
}
