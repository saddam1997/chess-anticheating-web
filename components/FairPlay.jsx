import Section from './Section';

export default function FairPlay({ c, no }) {
  return (
    <Section id="fair-play" no={no} label={c.label} title={c.title} intro={c.intro}>
      <ol className="grid grid-cols-1 border-t border-silver md:grid-cols-3">
        {c.steps.map((s, i) => (
          <li
            key={i}
            className={`relative flex flex-col border-b border-rule pt-6 pb-7 md:border-b-0 md:pt-7 md:pr-8 md:pb-0
              ${i > 0 ? 'md:border-l md:pl-8' : ''}`}
          >
            {/* arrow where one step hands over to the next */}
            {i < c.steps.length - 1 && (
              <span aria-hidden="true" className="absolute -top-[13px] -right-[9px] hidden bg-ink px-1 leading-6 text-silver md:block">→</span>
            )}
            <span className="font-mono text-xs text-steel">{i + 1}</span>
            <h3 className="mt-2.5 mb-3 font-serif text-[34px] font-normal">{s.title}</h3>
            <p className="flex-1 text-[15px] text-silver-mid">{s.text}</p>
            <blockquote className="mt-6 border-l-2 border-steel pl-3.5 font-serif text-[17px] text-silver italic">
              {s.example}
            </blockquote>
          </li>
        ))}
      </ol>
    </Section>
  );
}
