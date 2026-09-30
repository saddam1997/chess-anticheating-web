import { brand, contact } from '@/content/site';
import { ShieldMark } from './Logo';
import Section from './Section';

export default function Contact() {
  const year = new Date().getFullYear();
  const details = [
    ['Company', brand.company],
    ['Phone', <a key="tel" href={`tel:${contact.phone.replace(/\s/g, '')}`} className="no-underline hover:text-silver">{contact.phone}</a>],
    ['Address', contact.address],
    ['Web', contact.website],
  ];

  return (
    <>
      <Section
        id="contact"
        no="08"
        label="Contact"
        title="Running an event, or building a chess platform?"
        intro="We'd like to hear what you need. Early partners help shape what gets built first."
      >
        <div className="border-t border-rule pt-8">
          <a
            href={`mailto:${contact.email}`}
            className="inline-block font-serif text-[clamp(30px,5vw,64px)] tracking-[-0.02em] break-all underline decoration-steel decoration-1 underline-offset-[10px] hover:decoration-silver"
          >
            {contact.email}
          </a>
          <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {details.map(([k, v]) => (
              <div key={k}>
                <dt className="caps-label mb-1.5 text-steel">{k}</dt>
                <dd className="text-[15px] text-silver-mid">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <footer className="mt-auto border-t border-rule">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-7 text-[13px] text-steel">
          <div className="flex items-center gap-2.5">
            <ShieldMark size={18} />
            <span className="font-serif text-lg text-silver">{brand.name}</span>
            <em className="font-serif text-[15px] text-steel">{brand.tagline}</em>
          </div>
          <p>© {year} {brand.company}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
