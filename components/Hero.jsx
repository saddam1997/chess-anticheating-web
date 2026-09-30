import { brand } from '@/content/site';
import Board from './Board';
import { Face, Voice, Windows } from './Pictos';

const FEN = 'r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 8';

const readouts = [
  { Icon: Face, label: 'Camera', value: 'Player in frame' },
  { Icon: Voice, label: 'Microphone', value: 'Room quiet' },
  { Icon: Windows, label: 'Windows', value: 'Fullscreen · 0 switches' },
];

export default function Hero() {
  return (
    <section id="top" className="my-auto py-10">
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-7 font-mono text-xs text-silver-mid">{brand.tagline}</p>
          <h1 className="max-w-[12ch] font-serif text-[clamp(44px,min(6.6vw,11vh),100px)] leading-[0.98] font-normal tracking-[-0.025em]">
            Online chess, <em className="text-white">without</em> the second screen.
          </h1>
          <p className="mt-7 max-w-[50ch] text-lg text-silver-mid">
            {brand.name} is an AI-based anti-cheating platform for online chess. It watches the
            player, the room and the computer during a game, warns when something looks wrong,
            and gives arbiters a clear record to decide on.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn" href="#features">Explore platform</a>
            <a className="btn btn-line" href="#roadmap">See the roadmap</a>
          </div>
          <p className="mt-7 flex items-center gap-2.5 text-[13px] text-steel">
            <span className="tag">Preview</span>
            Monitoring features shown on this site are in development.
          </p>
        </div>

        <figure className="hidden lg:block">
          <div className="border border-rule bg-charcoal">
            <div className="caps-label flex justify-between border-b border-rule px-4 py-3 text-silver-mid">
              <span>Session monitor</span>
              <span>Round 3 · Board 12</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
              <div className="border-b border-rule p-5 sm:border-r sm:border-b-0">
                <Board fen={FEN} highlight={['g5', 'c1']} coords={false} />
              </div>
              <ul className="flex flex-col">
                {readouts.map(({ Icon, label, value }) => (
                  <li key={label} className="flex flex-1 items-center gap-3.5 border-b border-rule p-4 text-silver-mid">
                    <Icon size={28} />
                    <div>
                      <small className="caps-label block text-silver-mid">{label}</small>
                      <b className="text-sm font-medium text-silver">{value}</b>
                    </div>
                  </li>
                ))}
                <li className="flex flex-1 flex-col justify-center gap-0.5 p-4">
                  <small className="caps-label text-silver-mid">Fair play</small>
                  <b className="font-serif text-[32px] font-normal">Clear</b>
                </li>
              </ul>
            </div>
          </div>
          <figcaption className="caption mt-3">Concept screen: what a monitored game will look like to the arbiter.</figcaption>
        </figure>
      </div>
    </section>
  );
}
