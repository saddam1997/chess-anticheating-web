'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Queries({ queries }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(null);

  async function remove(id) {
    if (!confirm('Delete this query? This cannot be undone.')) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/queries/${id}`, { method: 'DELETE' });
    if (!res.ok && res.status !== 404) alert((await res.json()).error || 'Could not delete.');
    setDeleting(null);
    router.refresh();
  }

  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-4xl">Queries</h1>
          <p className="mt-1 text-sm text-steel">Messages sent from the contact form, newest first.</p>
        </div>
        <button onClick={() => router.refresh()} className="btn btn-line btn-sm">Refresh</button>
      </div>

      {queries.length === 0 ? (
        <p className="border border-dashed border-rule-strong p-10 text-center text-silver-mid">No queries yet.</p>
      ) : (
        <ul className="border-t border-rule">
          {queries.map((q) => (
            <li key={q.id} className="grid grid-cols-1 gap-3 border-b border-rule py-5 md:grid-cols-[260px_minmax(0,1fr)_auto] md:gap-8">
              <div>
                <a href={`mailto:${q.email}`} className="font-medium break-all hover:text-white">{q.email}</a>
                <time dateTime={q.createdAt} suppressHydrationWarning className="mt-1 block font-mono text-xs text-steel">
                  {new Date(q.createdAt).toLocaleString()}
                </time>
              </div>
              <p className="text-[15px] break-words whitespace-pre-wrap text-silver-mid">{q.message}</p>
              <button
                onClick={() => remove(q.id)}
                disabled={deleting === q.id}
                className="btn btn-line btn-sm self-start hover:border-danger hover:text-danger disabled:opacity-50"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
