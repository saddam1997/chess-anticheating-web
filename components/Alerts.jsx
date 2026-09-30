'use client';

import { useState } from 'react';
import Board from './Board';
import Section from './Section';

const FEN = 'r2q1rk1/pp2bppp/2n1pn2/3p4/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 11';

const states = {
  warning: {
    tab: 'Warning',
    kind: 'banner',
    title: 'Warning 1 of 2',
    body: 'Please keep your face in view of the camera. The game continues.',
    action: 'I understand',
  },
  violation: {
    tab: 'Violation',
    kind: 'modal',
    title: 'Game paused',
    body: 'You switched to another application (Google Chrome) for 12 seconds. This has been recorded as violation 2 of 3.',
    action: 'Return to game',
  },
  final: {
    tab: 'Final action',
    kind: 'modal',
    title: 'Game ended',
    body: 'This game has been sent to the tournament arbiter for review. You will be notified of the decision by email.',
    meta: 'Report #4127 · 3 violations',
    action: 'View report',
  },
};

function PlayerRow({ name, clock }) {
  return (
    <div className="flex justify-between py-2.5 text-sm">
      <b className="font-medium">{name}</b>
      <span className="font-mono text-silver-mid">{clock}</span>
    </div>
  );
}

export default function Alerts() {
  const [active, setActive] = useState('warning');
  const s = states[active];

  return (
    <Section
      id="alerts"
      no="06"
      label="Alerts & violations"
      title="What the player sees, at each step."
      intro="Short, specific messages that say what was noticed and what happens next. Pick a stage to preview the screen."
    >
      <div className="flex border border-b-0 border-rule" role="tablist">
        {Object.entries(states).map(([k, v], i) => (
          <button
            key={k}
            role="tab"
            aria-selected={active === k}
            onClick={() => setActive(k)}
            className={`flex flex-1 items-center gap-2.5 px-2.5 py-3 text-left text-[13px] sm:px-[18px] sm:py-3.5 sm:text-sm
              ${i > 0 ? 'border-l border-rule' : ''}
              ${active === k ? 'bg-silver text-ink' : 'text-steel hover:text-silver'}`}
          >
            <span className="hidden font-mono text-[11px] sm:inline">{i + 1}</span>{v.tab}
          </button>
        ))}
      </div>

      <div className="relative grid min-h-[560px] place-items-center overflow-hidden border border-rule bg-charcoal px-6 pt-[170px] pb-10 sm:pt-[120px]">
        <div className={`w-full max-w-[360px] transition-opacity duration-300 ${s.kind === 'modal' ? 'opacity-25' : ''}`}>
          <PlayerRow name="Opponent" clock="04:12" />
          <div className="p-1"><Board fen={FEN} coords={false} /></div>
          <PlayerRow name="You" clock="03:58" />
        </div>

        {s.kind === 'banner' ? (
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
            <small className="caps-label text-steel">Chess Shield</small>
            <h3 className="mt-2 mb-3 font-serif text-4xl font-normal">{s.title}</h3>
            <p className="mb-5 text-[15px] text-silver-mid">{s.body}</p>
            {s.meta && <span className="-mt-2 mb-5 block font-mono text-xs text-steel">{s.meta}</span>}
            <span className="btn btn-sm">{s.action}</span>
          </div>
        )}
      </div>
      <p className="caption mt-3">Static demonstration. No monitoring is running on this page.</p>
    </Section>
  );
}
