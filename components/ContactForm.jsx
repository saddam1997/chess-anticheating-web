'use client';

import { useState } from 'react';

export default function ContactForm({ submitLabel, successMessage }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Could not reach the server. Please try again.' : err.message);
      setStatus('idle');
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-rule-strong p-7" role="status">
        <p className="font-serif text-2xl">{successMessage}</p>
        <button onClick={() => setStatus('idle')} className="btn btn-line btn-sm mt-5">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="caps-label text-steel">Email</span>
        <input name="email" type="email" required maxLength={200} autoComplete="email" className="field" placeholder="you@example.com" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="caps-label text-steel">Message</span>
        <textarea name="message" required minLength={5} maxLength={3000} rows={5} className="field resize-none py-2.5" placeholder="Tell us about your event or platform" />
      </label>
      {/* honeypot: hidden from people, filled in by bots */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {error && <p className="text-sm text-danger" role="alert">{error}</p>}
      <button type="submit" disabled={status === 'sending'} className="btn self-start disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
