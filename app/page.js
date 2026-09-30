import { getContent } from '@/lib/content';
import Header from '@/components/Header';
import Screens from '@/components/Screens';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import { AIMonitoring, WindowsMonitoring } from '@/components/Monitoring';
import FairPlay from '@/components/FairPlay';
import Alerts from '@/components/Alerts';
import Roadmap from '@/components/Roadmap';
import Contact from '@/components/Contact';

// Content is edited in /admin, so read it on every request.
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const { seo } = await getContent();
  return { title: seo.title, description: seo.description };
}

// Single-screen layout: the page never scrolls; header links swap the section shown below it.
export default async function Home() {
  const c = await getContent();

  // [screen id, content key, component]; numbering and nav follow this order
  const sections = [
    ['overview', 'overview', Overview],
    ['features', 'features', Features],
    ['ai-monitoring', 'monitoring', AIMonitoring],
    ['windows', 'windows', WindowsMonitoring],
    ['fair-play', 'fairPlay', FairPlay],
    ['alerts', 'alerts', Alerts],
    ['roadmap', 'roadmap', Roadmap],
    ['contact', 'contactPage', Contact],
  ];

  const screens = { top: <Hero c={c.hero} brand={c.brand} /> };
  sections.forEach(([id, key, Component], i) => {
    screens[id] = (
      <Component
        c={c[key]}
        no={String(i + 1).padStart(2, '0')}
        brand={c.brand}
        brandName={c.brand.name}
        contact={c.contact}
      />
    );
  });
  const nav = sections.map(([id, key]) => [`#${id}`, c[key].navLabel]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header brandName={c.brand.name} nav={nav} />
      <Screens screens={screens} />
    </div>
  );
}
