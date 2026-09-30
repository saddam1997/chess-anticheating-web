import Section from './Section';

export default function Overview({ c, no }) {
  return (
    <Section id="overview" no={no} label={c.label} title={c.title} intro={c.intro}>
      <div className="grid grid-cols-1 border-t border-rule md:grid-cols-3">
        {c.audiences.map((a, i) => (
          <div
            key={i}
            className={`border-b border-rule py-5 md:border-b-0 md:pt-6 md:pr-7 md:pb-0 ${i > 0 ? 'md:border-l md:pl-7' : ''}`}
          >
            <h3 className="mb-2.5 font-serif text-[26px] font-normal">{a.title}</h3>
            <p className="text-[15px] text-silver-mid">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
