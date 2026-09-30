'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm({ configured }) {
  const router = useRouter();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
    }).catch(() => null);
    if (res?.ok) return router.refresh();
    setError(res ? (await res.json()).error : 'Could not reach the server.');
    setBusy(false);
  }

  return (
    <div className="grid h-dvh place-items-center overflow-y-auto px-4">
      <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-5 border border-rule bg-charcoal p-8">
        <div>
          <p className="caps-label text-steel">Chess Shield</p>
          <h1 className="mt-1 font-serif text-3xl">Admin sign in</h1>
        </div>
        {!configured && (
          <p className="text-sm text-danger">Admin login isn&apos;t configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in .env.local.</p>
        )}
        <label className="flex flex-col gap-2">
          <span className="caps-label text-steel">Username</span>
          <input name="username" required autoComplete="username" className="field" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="caps-label text-steel">Password</span>
          <input name="password" type="password" required autoComplete="current-password" className="field" />
        </label>
        {error && <p className="text-sm text-danger" role="alert">{error}</p>}
        <button type="submit" disabled={busy} className="btn justify-center disabled:opacity-60">
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
