'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContentEditor from './ContentEditor';
import Queries from './Queries';

export default function AdminPanel({ content, queries }) {
  const router = useRouter();
  const [tab, setTab] = useState('queries');

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.refresh();
  }

  const tabs = [
    ['queries', `Queries (${queries.length})`],
    ['content', 'Site content'],
  ];

  return (
    <div className="h-dvh overflow-y-auto">
      <header className="sticky top-0 z-20 border-b border-rule bg-ink/95 backdrop-blur-sm">
        <div className="wrap flex h-16 items-center gap-6">
          <span className="font-serif text-xl">Chess Shield <span className="text-steel">admin</span></span>
          <nav className="flex gap-1" role="tablist">
            {tabs.map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className="h-8 rounded-[2px] px-3 text-sm text-silver-mid hover:text-silver aria-selected:bg-silver aria-selected:text-ink"
              >
                {label}
              </button>
            ))}
          </nav>
          <a href="/" target="_blank" className="ml-auto text-sm text-silver-mid no-underline hover:text-silver">View site ↗</a>
          <button onClick={logout} className="btn btn-line btn-sm">Log out</button>
        </div>
      </header>

      <main className="wrap py-10">
        {tab === 'queries' ? <Queries queries={queries} /> : <ContentEditor initial={content} />}
      </main>
    </div>
  );
}
