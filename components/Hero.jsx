import Image from 'next/image';
import boardImg from '@/app/chess_bord_hero_section.png';
import { byKey } from './Pictos';
import Rich from './Rich';

export default function Hero({ c, brand }) {
  return (
    <section id="top" className="my-auto py-10">
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-7 font-mono text-xs text-silver-mid">{brand.tagline}</p>
          <h1 className="max-w-[12ch] font-serif text-[clamp(44px,min(6.6vw,11vh),100px)] leading-[0.98] font-normal tracking-[-0.025em] [&_em]:text-white">
            <Rich text={c.title} />
          </h1>
          <p className="mt-7 max-w-[50ch] text-lg text-silver-mid">{c.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn" href="#features">{c.primaryButton}</a>
            <a className="btn btn-line" href="#roadmap">{c.secondaryButton}</a>
          </div>
          <p className="mt-7 flex items-center gap-2.5 text-[13px] text-steel">
            <span className="tag">Preview</span>
            {c.note}
          </p>
        </div>

        <figure className="hidden lg:block">
          <div className="border border-rule bg-charcoal">
            <div className="caps-label flex justify-between border-b border-rule px-4 py-3 text-silver-mid">
              <span>{c.panelTitle}</span>
              <span>{c.panelMeta}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
              <div className="border-b border-rule p-5 sm:border-r sm:border-b-0">
                <Image src={boardImg} alt="Chessboard of the monitored game" priority className="h-auto w-full" />
              </div>
              <ul className="flex flex-col">
                {c.readouts.map(({ icon, label, value }, i) => {
                  const Icon = byKey[icon];
                  return (
                    <li key={i} className="flex flex-1 items-center gap-3.5 border-b border-rule p-4 text-silver-mid">
                      <Icon size={28} />
                      <div>
                        <small className="caps-label block text-silver-mid">{label}</small>
                        <b className="text-sm font-medium text-silver">{value}</b>
                      </div>
                    </li>
                  );
                })}
                <li className="flex flex-1 flex-col justify-center gap-0.5 p-4">
                  <small className="caps-label text-silver-mid">{c.statusLabel}</small>
                  <b className="font-serif text-[32px] font-normal">{c.statusValue}</b>
                </li>
              </ul>
            </div>
          </div>
          <figcaption className="caption mt-3">{c.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
