import { getContent } from '@/lib/content';

// Public, read-only copy of the site content for the mobile app.
// It's the same text the homepage shows, so nothing here is private.
export async function GET() {
  return Response.json(await getContent());
}
