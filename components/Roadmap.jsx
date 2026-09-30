import Section from './Section';

export default function Roadmap({ c, no }) {
  return (
    <Section id="roadmap" no={no} label={c.label} title={c.title} intro={c.intro}>
      <ol className="border-t border-rule">
        {c.phases.map((r, i) => (
          <li
            key={i}
            className="grid grid-cols-1 items-baseline gap-2 border-b border-rule py-6 text-steel sm:grid-cols-[120px_1fr_auto] sm:gap-6"
          >
            <span className="font-mono text-xs">{r.phase}</span>
            <div>
              <h3 className={`font-serif text-[26px] font-normal ${r.current ? 'text-white' : 'text-silver-mid'}`}>{r.title}</h3>
              <p className={`text-[15px] ${r.current ? 'text-silver-mid' : ''}`}>{r.text}</p>
            </div>
            <span className={`tag justify-self-start ${r.current ? 'tag-solid' : ''}`}>{r.status}</span>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border border-dashed border-rule-strong p-7">
        <div>
          <h3 className="font-serif text-[26px] font-normal">{c.appTitle}</h3>
          <p className="text-[15px] text-silver-mid">{c.appText}</p>
        </div>
        <div className="flex gap-2.5">
          {['App Store', 'Google Play'].map((store) => (
            <span key={store} className="flex flex-col rounded-[2px] border border-rule-strong px-4 py-2.5 text-[15px] font-medium text-silver-mid">
              {store}
              <small className="caps-label text-[10px] text-steel">{c.appStoreNote}</small>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
