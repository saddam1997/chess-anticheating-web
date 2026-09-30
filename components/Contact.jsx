import ContactForm from './ContactForm';
import Logo from './Logo';
import Section from './Section';

export default function Contact({ c, no, brand, contact }) {
  const year = new Date().getFullYear();
  const details = [
    ['Email', <a key="mail" href={`mailto:${contact.email}`} className="no-underline hover:text-silver">{contact.email}</a>],
    ['Phone', <a key="tel" href={`tel:${contact.phone.replace(/\s/g, '')}`} className="no-underline hover:text-silver">{contact.phone}</a>],
    ['Address', contact.address],
    ['Web', contact.website],
    ['Company', brand.company],
  ];

  return (
    <>
      <Section id="contact" no={no} label={c.label} title={c.title} intro={c.intro}>
        <div className="grid grid-cols-1 gap-10 border-t border-rule pt-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-14">
          <ContactForm submitLabel={c.submitButton} successMessage={c.successMessage} />
          <dl className="flex flex-col gap-5">
            {details.map(([k, v]) => (
              <div key={k}>
                <dt className="caps-label mb-1.5 text-steel">{k}</dt>
                <dd className="text-[15px] break-words text-silver-mid">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <footer className="mt-auto border-t border-rule">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-7 text-[13px] text-steel">
          <div className="flex items-center gap-2.5">
            <Logo alt={brand.name} height={36} />
            <em className="font-serif text-[15px] text-steel">{brand.tagline}</em>
          </div>
          <p>© {year} {brand.company}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
