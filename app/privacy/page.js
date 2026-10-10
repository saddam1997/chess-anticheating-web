import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy — Chess Shield',
  description: 'How Chess Shield collects, uses and protects monitoring data during fair-play sessions.',
};

const sections = [
  {
    heading: 'Introduction',
    text: [
      'Welcome to Chess Shield. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our fair-play and anti-cheating monitoring application.',
    ],
  },
  {
    heading: 'Information We Collect',
    text: [
      'To ensure fair play during chess matches, Chess Shield collects specific monitoring data with your explicit consent:',
    ],
    bullets: [
      ['Camera Data', 'Video feeds to monitor player presence, face visibility, and environmental context.'],
      ['Audio Data', 'Microphone access to detect unauthorized audio activity or voice-related events.'],
      ['Device & Screen Data', 'Information regarding application switching, full-screen activity, and active window states.'],
      ['Gesture Data', 'Movement cues and behavioral patterns analyzed for unusual activity.'],
    ],
  },
  {
    heading: 'How We Use Your Information',
    text: [
      'The data collected is used strictly for anti-cheating purposes. It allows arbiters and automated systems to review matches, flag notable events, and maintain the integrity of competitive chess. We do not use this data for marketing or advertising.',
    ],
  },
  {
    heading: 'Data Retention & Security',
    text: [
      'Monitoring data (such as audio and video recordings) is stored securely and temporarily. It is retained only as long as necessary to review a match for violations or process disputes, after which it is permanently deleted. We implement industry-standard encryption to protect your data in transit and at rest.',
    ],
  },
  {
    heading: 'Third-Party Sharing',
    text: [
      'We do not sell your data. Information may only be shared with authorized tournament organizers and arbiters specifically responsible for reviewing fair-play alerts for the matches you participate in.',
    ],
  },
  {
    heading: 'Your Rights',
    text: [
      'You have the right to revoke access to your camera, microphone, or screen at any time via your device settings. However, doing so may disqualify you from participating in monitored matches.',
    ],
  },
];

export default function Privacy() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}
