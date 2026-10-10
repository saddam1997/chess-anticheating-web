import Link from 'next/link';
import Logo from './Logo';

const Para = ({ children }) => <p className="mb-4 max-w-[68ch] text-[16px] text-silver-mid">{children}</p>;

// Bullets may be plain strings or [label, text] pairs; the label is shown in bold.
const Bullet = ({ b }) =>
  Array.isArray(b) ? <li><strong className="font-medium text-silver">{b[0]}:</strong> {b[1]}</li> : <li>{b}</li>;

// Long-form legal page (terms, privacy). Each section: heading, paragraphs, optional bullets, paragraphs after.
export default function LegalPage({ title, sections }) {
  return (
    // html/body don't scroll (single-screen home page), so this page scrolls itself
    <div className="h-dvh overflow-y-auto">
      <header className="sticky top-0 z-20 border-b border-rule bg-ink/95 backdrop-blur-sm">
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" className="no-underline" aria-label="Chess Shield home"><Logo alt="Chess Shield" /></Link>
          <Link href="/" className="btn btn-line btn-sm">← Back to site</Link>
        </div>
      </header>

      <main className="wrap pt-10 pb-20 md:pt-14">
        <p className="caps-label mb-4 text-silver-mid">Legal</p>
        <h1 className="mb-10 font-serif text-[clamp(34px,4.4vw,56px)] leading-[1.05] font-normal tracking-[-0.015em]">
          {title}
        </h1>

        <ol className="border-t border-rule">
          {sections.map((s, i) => (
            <li
              key={s.heading}
              className="grid grid-cols-1 gap-3 border-b border-rule py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12"
            >
              <span className="caps-label pt-2 text-steel">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="mb-4 font-serif text-[28px] leading-tight font-normal">{s.heading}</h2>
                {s.text.map((t) => <Para key={t}>{t}</Para>)}
                {s.bullets && (
                  <ul className="mb-4 flex max-w-[68ch] list-disc flex-col gap-2 pl-6 text-[16px] text-silver-mid marker:text-steel">
                    {s.bullets.map((b) => <Bullet key={String(b)} b={b} />)}
                  </ul>
                )}
                {s.after?.map((t) => <Para key={t}>{t}</Para>)}
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
