import Image from 'next/image';
import personImg from '@/app/person_in_frame.png';
import Section from './Section';

const split = 'grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12';

export function AIMonitoring({ c, no }) {
  return (
    <Section id="ai-monitoring" no={no} label={c.label} title={c.title} intro={c.intro}>
      <div className={split}>
        <figure>
          <Image
            src={personImg}
            alt="Camera view with the player tracked in frame at 98% confidence"
            className="h-auto w-full border border-rule-strong"
          />
          <figcaption className="caption mt-3">{c.caption}</figcaption>
        </figure>

        <ul className="border-t border-rule">
          {c.readouts.map((r, i) => (
            <li key={i} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 border-b border-rule py-[18px]">
              <small className="caps-label col-start-1 text-steel">{r.name}</small>
              <b className="col-start-1 text-[17px] font-medium">{r.value}</b>
              <span className={`tag col-start-2 row-span-2 row-start-1 self-center ${r.flagged ? 'tag-solid' : ''}`}>
                {r.flagged ? 'Logged' : 'Normal'}
              </span>
            </li>
          ))}
          <li className="flex items-center gap-2.5 py-[18px] text-sm text-steel">
            <span className="tag">{c.statusTag}</span> {c.statusNote}
          </li>
        </ul>
      </div>
    </Section>
  );
}

export function WindowsMonitoring({ c, no }) {
  return (
    <Section id="windows" no={no} label={c.label} title={c.title} intro={c.intro}>
      <div className={split}>
        <dl className="border-t border-rule">
          {c.capabilities.map((cap, i) => (
            <div key={i} className="border-b border-rule py-5">
              <dt className="mb-1.5 font-serif text-2xl">{cap.title}</dt>
              <dd className="text-[15px] text-silver-mid">{cap.text}</dd>
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
              {c.log.map((row, i) => (
                <tr key={i} className="[&_td]:border-b [&_td]:border-rule [&_td]:px-4 [&_td]:py-[13px] [&_td]:align-middle">
                  <td className="font-mono text-xs whitespace-nowrap text-silver-mid">{row.time}</td>
                  <td>{row.event}</td>
                  <td className="text-right">
                    {row.status && <span className={`tag ${row.status === 'Flagged' ? 'tag-solid' : ''}`}>{row.status}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <figcaption className="caption mt-3">{c.caption}</figcaption>
        </figure>
      </div>
    </Section>
  );
}
