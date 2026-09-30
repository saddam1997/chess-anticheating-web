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

// Single-screen layout: the page never scrolls; header links swap the section shown below it.
export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <Screens
        screens={{
          top: <Hero />,
          overview: <Overview />,
          features: <Features />,
          'ai-monitoring': <AIMonitoring />,
          windows: <WindowsMonitoring />,
          'fair-play': <FairPlay />,
          alerts: <Alerts />,
          roadmap: <Roadmap />,
          contact: <Contact />,
        }}
      />
    </div>
  );
}
