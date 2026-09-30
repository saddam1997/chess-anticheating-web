'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { defaults, fieldOptions } from '@/content/defaults';

// Form for all site copy, generated from the shape of content/defaults.js:
// strings become inputs (long ones textareas), booleans checkboxes, lists get add/move/remove.

const sectionNames = {
  seo: 'Search engines (SEO)',
  brand: 'Brand',
  contact: 'Contact details',
  hero: 'Hero (home screen)',
  overview: '01 · Overview',
  features: '02 · Features',
  monitoring: '03 · AI monitoring',
  windows: '04 · Windows monitoring',
  fairPlay: '05 · Fair play',
  alerts: '06 · Alerts',
  roadmap: '07 · Roadmap',
  contactPage: '08 · Contact page',
};

const humanize = (key) => {
  const s = key.replace(/([A-Z])/g, ' $1').toLowerCase();
  return s[0].toUpperCase() + s.slice(1);
};

// An empty value shaped like `template`, for newly added list items.
function blank(template, key) {
  if (typeof template === 'string') return fieldOptions[key]?.[0] ?? '';
  if (typeof template === 'boolean') return false;
  if (Array.isArray(template)) return [];
  return Object.fromEntries(Object.entries(template).map(([k, v]) => [k, blank(v, k)]));
}

function Field({ name, value, template, onChange }) {
  const label = <span className="caps-label text-steel">{humanize(name)}</span>;

  if (typeof template === 'boolean') {
    return (
      <label className="flex items-center gap-2.5 text-sm text-silver-mid">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="size-4 accent-silver" />
        {humanize(name)}
      </label>
    );
  }

  if (typeof template === 'string') {
    const options = fieldOptions[name];
    const long = template.length > 70;
    return (
      <label className={`flex flex-col gap-1.5 ${long ? 'md:col-span-2' : ''}`}>
        {label}
        {options ? (
          <select value={value} onChange={(e) => onChange(e.target.value)} className="field bg-ink">
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : long ? (
          <textarea value={value} rows={3} onChange={(e) => onChange(e.target.value)} className="field py-2" />
        ) : (
          <input value={value} onChange={(e) => onChange(e.target.value)} className="field" />
        )}
      </label>
    );
  }

  if (Array.isArray(template)) {
    const move = (i, d) => {
      const next = [...value];
      [next[i], next[i + d]] = [next[i + d], next[i]];
      onChange(next);
    };
    return (
      <fieldset className="flex flex-col gap-3 md:col-span-2">
        <legend className="mb-2 caps-label text-silver-mid">{humanize(name)} · {value.length}</legend>
        {value.map((item, i) => (
          <div key={i} className="border border-rule p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-mono text-xs text-steel">#{i + 1}</span>
              <div className="ml-auto flex gap-1.5">
                <button type="button" disabled={i === 0} onClick={() => move(i, -1)} className="btn btn-line btn-sm disabled:opacity-30" aria-label="Move up">↑</button>
                <button type="button" disabled={i === value.length - 1} onClick={() => move(i, 1)} className="btn btn-line btn-sm disabled:opacity-30" aria-label="Move down">↓</button>
                <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} className="btn btn-line btn-sm hover:border-danger hover:text-danger">Remove</button>
              </div>
            </div>
            <Fields value={item} template={template[0]} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} />
          </div>
        ))}
        <button type="button" onClick={() => onChange([...value, blank(template[0])])} className="btn btn-line btn-sm self-start">
          + Add item
        </button>
      </fieldset>
    );
  }

  return null;
}

function Fields({ value, template, onChange }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Object.keys(template).map((k) => (
        <Field key={k} name={k} value={value[k]} template={template[k]} onChange={(v) => onChange({ ...value, [k]: v })} />
      ))}
    </div>
  );
}

export default function ContentEditor({ initial }) {
  const router = useRouter();
  const [content, setContent] = useState(initial);
  const [saved, setSaved] = useState(initial);
  const [status, setStatus] = useState('');
  const dirty = JSON.stringify(content) !== JSON.stringify(saved);

  async function save() {
    setStatus('Saving…');
    const res = await fetch('/api/admin/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    }).catch(() => null);
    if (res?.status === 401) return router.refresh(); // session expired: back to sign in
    if (!res?.ok) return setStatus('Could not save. Try again.');
    const data = await res.json();
    setContent(data.content);
    setSaved(data.content);
    setStatus('Saved. Changes are live on the site.');
  }

  return (
    <section>
      <div className="sticky top-16 z-10 -mx-4 mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-rule bg-ink px-4 py-4">
        <div>
          <h1 className="font-serif text-4xl">Site content</h1>
          <p className="mt-1 text-sm text-steel">Wrap words in *asterisks* in a title to set them in italics.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-silver-mid" role="status">{dirty ? 'Unsaved changes' : status}</span>
          <button type="button" disabled={!dirty} onClick={() => { setContent(saved); setStatus(''); }} className="btn btn-line btn-sm disabled:opacity-40">Discard</button>
          <button type="button" disabled={!dirty} onClick={save} className="btn btn-sm disabled:opacity-40">Save changes</button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {Object.keys(defaults).map((key) => (
          <details key={key} className="group border border-rule open:bg-charcoal/40">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-serif text-xl">
              {sectionNames[key] ?? humanize(key)}
              <span className="font-mono text-xs text-steel group-open:rotate-90">›</span>
            </summary>
            <div className="border-t border-rule p-5">
              <Fields value={content[key]} template={defaults[key]} onChange={(v) => setContent({ ...content, [key]: v })} />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
