import { brand } from '@/content/site';
import Section from './Section';

const audiences = [
  { who: 'Players', text: 'Know the rules before the game starts. Get a clear warning, not a silent ban, if something is picked up.' },
  { who: 'Arbiters', text: 'Every warning and violation arrives with a time, a move number and the reason, in one report per game.' },
  { who: 'Organisers', text: 'Run online events and rated games with the same confidence as an over-the-board hall.' },
];

export default function Overview() {
  return (
    <Section
      id="overview"
      no="01"
      label="Overview"
      title={<>Built for the moment nobody is <em>watching</em>.</>}
      intro={`Online chess has no arbiter walking the room. ${brand.name} brings that supervision to the player's desk with camera, microphone and computer monitoring, plus a fair process for deciding what happens next.`}
    >
      <div className="grid grid-cols-1 border-t border-rule md:grid-cols-3">
        {audiences.map((a, i) => (
          <div
            key={a.who}
            className={`border-b border-rule py-5 md:border-b-0 md:pt-6 md:pr-7 md:pb-0 ${i > 0 ? 'md:border-l md:pl-7' : ''}`}
          >
            <h3 className="mb-2.5 font-serif text-[26px] font-normal">{a.who}</h3>
            <p className="text-[15px] text-silver-mid">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
