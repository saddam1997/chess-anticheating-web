import { roadmap } from '@/content/site';
import Section from './Section';

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      no="07"
      label="Roadmap"
      title="Where we are, and what's next."
      intro="The platform is being built in phases. This site and the mobile app preview are phase one."
    >
      <ol className="border-t border-rule">
        {roadmap.map((r) => {
          const now = r.status === 'Now';
          return (
            <li
              key={r.phase}
              className="grid grid-cols-1 items-baseline gap-2 border-b border-rule py-6 text-steel sm:grid-cols-[120px_1fr_auto] sm:gap-6"
            >
              <span className="font-mono text-xs">{r.phase}</span>
              <div>
                <h3 className={`font-serif text-[26px] font-normal ${now ? 'text-white' : 'text-silver-mid'}`}>{r.title}</h3>
                <p className={`text-[15px] ${now ? 'text-silver-mid' : ''}`}>{r.text}</p>
              </div>
              <span className={`tag justify-self-start ${now ? 'tag-solid' : ''}`}>{r.status}</span>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border border-dashed border-rule-strong p-7">
        <div>
          <h3 className="font-serif text-[26px] font-normal">Mobile app</h3>
          <p className="text-[15px] text-silver-mid">The Chess Shield app for Android and iOS is on its way.</p>
        </div>
        <div className="flex gap-2.5">
          {['App Store', 'Google Play'].map((store) => (
            <span key={store} className="flex flex-col rounded-[2px] border border-rule-strong px-4 py-2.5 text-[15px] font-medium text-silver-mid">
              {store}
              <small className="caps-label text-[10px] text-steel">Coming soon</small>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
