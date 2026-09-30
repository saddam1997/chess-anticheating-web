'use client';

import { useState } from 'react';
import Image from 'next/image';
import boardImg from '@/app/chess_step.png';
import Section from './Section';

function PlayerRow({ name, clock }) {
  return (
    <div className="flex justify-between py-2.5 text-sm">
      <b className="font-medium">{name}</b>
      <span className="font-mono text-silver-mid">{clock}</span>
    </div>
  );
}

export default function Alerts({ c, no, brandName }) {
  const [active, setActive] = useState(0);
  const s = c.stages[active] ?? c.stages[0];

  return (
    <Section id="alerts" no={no} label={c.label} title={c.title} intro={c.intro}>
      <div className="flex border border-b-0 border-rule" role="tablist">
        {c.stages.map((v, k) => (
          <button
            key={k}
            role="tab"
            aria-selected={active === k}
            onClick={() => setActive(k)}
            className={`flex flex-1 items-center gap-2.5 px-2.5 py-3 text-left text-[13px] sm:px-[18px] sm:py-3.5 sm:text-sm
              ${k > 0 ? 'border-l border-rule' : ''}
              ${active === k ? 'bg-silver text-ink' : 'text-steel hover:text-silver'}`}
          >
            <span className="hidden font-mono text-[11px] sm:inline">{k + 1}</span>{v.tab}
          </button>
        ))}
      </div>

      <div className="relative grid min-h-[560px] place-items-center overflow-hidden border border-rule bg-charcoal px-6 pt-[170px] pb-10 sm:pt-[120px]">
        <div className={`w-full max-w-[360px] transition-opacity duration-300 ${s?.kind === 'modal' ? 'opacity-25' : ''}`}>
          <PlayerRow name={c.opponentName} clock={c.opponentClock} />
          <div className="p-1"><Image src={boardImg} alt="The player's board during the game" className="h-auto w-full" /></div>
          <PlayerRow name={c.playerName} clock={c.playerClock} />
        </div>

        {!s ? null : s.kind === 'banner' ? (
          <div
            key={active}
            className="absolute top-5 left-1/2 flex w-[min(520px,calc(100%-32px))] -translate-x-1/2 animate-drop flex-col items-start gap-4
              border border-l-[3px] border-rule-strong border-l-silver bg-ink px-[18px] py-4 sm:flex-row sm:items-center"
          >
            <div>
              <b className="text-sm font-semibold">{s.title}</b>
              <p className="text-sm text-silver-mid">{s.body}</p>
            </div>
            <span className="btn btn-sm">{s.action}</span>
          </div>
        ) : (
          <div key={active} className="absolute w-[min(400px,calc(100%-32px))] animate-rise border border-rule-strong bg-ink p-7">
            <small className="caps-label text-steel">{brandName}</small>
            <h3 className="mt-2 mb-3 font-serif text-4xl font-normal">{s.title}</h3>
            <p className="mb-5 text-[15px] text-silver-mid">{s.body}</p>
            {s.meta && <span className="-mt-2 mb-5 block font-mono text-xs text-steel">{s.meta}</span>}
            <span className="btn btn-sm">{s.action}</span>
          </div>
        )}
      </div>
      <p className="caption mt-3">{c.caption}</p>
    </Section>
  );
}
