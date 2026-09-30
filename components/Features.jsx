import { features } from '@/content/site';
import { byKey } from './Pictos';
import Section from './Section';

export default function Features() {
  return (
    <Section
      id="features"
      no="02"
      label="Key features"
      title="Six ways the platform keeps a game fair."
      intro="Each one covers a different way people cheat online: an engine in another window, a coach in the room, a phone under the desk."
    >
      {/* hairline table grid rather than floating cards */}
      <ul className="grid grid-cols-1 border-t border-l border-rule sm:grid-cols-2 md:grid-cols-3">
        {features.map((f, i) => {
          const Icon = byKey[f.key];
          return (
            <li key={f.key} className="flex flex-col border-r border-b border-rule p-7 transition-colors hover:bg-charcoal">
              <div className="flex items-start justify-between text-silver">
                <Icon size={40} />
                <span className="font-mono text-xs text-steel">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-7 mb-2.5 font-serif text-[25px] font-normal">{f.title}</h3>
              <p className="mb-6 flex-1 text-[15px] text-silver-mid">{f.text}</p>
              <span className="tag self-start">{f.status}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
