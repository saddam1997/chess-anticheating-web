import Section from './Section';

const ai = [
  { name: 'Facial monitoring', value: '1 face · looking at screen', warn: false },
  { name: 'Movement detection', value: 'Glance down, 3.2s', warn: true },
  { name: 'Voice monitoring', value: 'No speech detected', warn: false },
];

const windowsLog = [
  ['14:02:11', 'Game opened in fullscreen', 'OK'],
  ['14:09:40', 'Switched to Google Chrome', 'Flagged'],
  ['14:09:52', 'Returned to the game', ''],
  ['14:15:03', 'Screen-sharing app detected', 'Flagged'],
  ['14:20:00', 'Second display connected', 'Warning'],
];

const winCaps = [
  ['Full-screen monitoring', 'The game has to stay fullscreen. Leaving it is logged and can pause the clock.'],
  ['Application switching', 'Every switch to another program or tab is recorded with how long the player was away.'],
  ['System monitoring', 'Checks for remote-desktop tools, screen sharing, virtual machines and extra displays.'],
];

const split = 'grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12';

export function AIMonitoring() {
  return (
    <Section
      id="ai-monitoring"
      no="03"
      label="AI monitoring"
      title={<>A camera that knows what <em>cheating</em> looks like.</>}
      intro="Face, movement and voice models run alongside the game. They flag behaviour. They don't identify strangers or keep recordings."
      >
      <div className={split}>
        <figure>
          <div className="border border-rule-strong bg-ink">
            <div className="caps-label flex justify-between border-b border-rule px-3.5 py-2.5 text-steel">
              <span>● REC off</span><span>Camera · 720p</span>
            </div>
            <svg viewBox="0 0 400 300" className="h-auto w-full" aria-hidden="true">
              <defs>
                <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M0 0h4" stroke="rgba(242,242,242,0.04)" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#scan)" />
              {/* silhouette */}
              <ellipse cx="200" cy="130" rx="46" ry="58" fill="#1c1c1e" stroke="#77797C" />
              <path d="M96 300c10-60 52-92 104-92s94 32 104 92" fill="#1c1c1e" stroke="#77797C" />
              {/* tracking box */}
              <path d="M140 62v-14h14M246 48h14v14M260 198v14h-14M154 212h-14v-14" stroke="#F2F2F2" strokeWidth="2" fill="none" />
              <text x="140" y="38" fill="#F2F2F2" fontFamily="monospace" fontSize="11">PLAYER · 98%</text>
              {/* gaze */}
              <path d="M182 122h10M208 122h10" stroke="#BFC0C2" strokeWidth="2" />
            </svg>
          </div>
          <figcaption className="caption mt-3">Concept screen: what the camera check will show.</figcaption>
        </figure>

        <ul className="border-t border-rule">
          {ai.map((r) => (
            <li key={r.name} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 border-b border-rule py-[18px]">
              <small className="caps-label col-start-1 text-steel">{r.name}</small>
              <b className="col-start-1 text-[17px] font-medium">{r.value}</b>
              <span className={`tag col-start-2 row-span-2 row-start-1 self-center ${r.warn ? 'tag-solid' : ''}`}>
                {r.warn ? 'Logged' : 'Normal'}
              </span>
            </li>
          ))}
          <li className="flex items-center gap-2.5 py-[18px] text-sm text-steel">
            <span className="tag">In development</span> Available in Phase 3
          </li>
        </ul>
      </div>
    </Section>
  );
}

export function WindowsMonitoring() {
  return (
    <Section
      id="windows"
      no="04"
      label="Windows monitoring"
      title="The engine is usually one Alt-Tab away."
      intro="A lightweight Windows client keeps the game in front and writes down everything that tries to get in the way."
      >
      <div className={split}>
        <dl className="border-t border-rule">
          {winCaps.map(([t, d]) => (
            <div key={t} className="border-b border-rule py-5">
              <dt className="mb-1.5 font-serif text-2xl">{t}</dt>
              <dd className="text-[15px] text-silver-mid">{d}</dd>
            </div>
          ))}
        </dl>
        <figure>
          <table className="w-full border-collapse border border-rule bg-charcoal text-sm">
            <thead>
              <tr>
                {['Time', 'Event', 'Status'].map((h) => (
                  <th key={h} className="caps-label border-b border-rule px-4 py-3 text-left text-silver-mid">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_tr:last-child_td]:border-b-0">
              {windowsLog.map(([t, e, s]) => (
                <tr key={t} className="[&_td]:border-b [&_td]:border-rule [&_td]:px-4 [&_td]:py-[13px] [&_td]:align-middle">
                  <td className="font-mono text-xs whitespace-nowrap text-silver-mid">{t}</td>
                  <td>{e}</td>
                  <td className="text-right">{s && <span className={`tag ${s === 'Flagged' ? 'tag-solid' : ''}`}>{s}</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <figcaption className="caption mt-3">Concept screen: a sample activity log from the Windows client (Phase 2).</figcaption>
        </figure>
      </div>
    </Section>
  );
}
