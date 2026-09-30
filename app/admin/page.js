import { isAdmin, isConfigured } from '@/lib/auth';
import { getContent } from '@/lib/content';
import { listQueries } from '@/lib/queries';
import LoginForm from '@/components/admin/LoginForm';
import AdminPanel from '@/components/admin/AdminPanel';

export const metadata = { title: 'Admin', robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!(await isAdmin())) return <LoginForm configured={isConfigured()} />;
  const [content, queries] = await Promise.all([getContent(), listQueries()]);
  return <AdminPanel content={content} queries={queries} />;
}
