import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms & Conditions — Chess Shield',
  description: 'The terms that govern use of Chess Shield, including fair play and consent to monitoring.',
};

// Each section: heading, paragraphs before the list, optional bullet list, paragraphs after it.
const sections = [
  {
    heading: 'Acceptance of Terms',
    text: [
      'By accessing and using Chess Shield, you accept and agree to be bound by the terms and provisions of this agreement. Our application is designed to ensure fair play in competitive chess matches through advanced monitoring.',
    ],
  },
  {
    heading: 'Fair Play Commitment',
    text: [
      'Users agree to abide by the rules of competitive chess. The use of external assistance, including but not limited to chess engines, bots, other players, or unauthorized reference materials during a monitored match, is strictly prohibited.',
    ],
  },
  {
    heading: 'Consent to Monitoring',
    text: ['By participating in a monitored session, you grant Chess Shield the right to:'],
    bullets: [
      "Access and record video via your device's camera.",
      "Access and record audio via your device's microphone.",
      'Monitor screen activity, including active applications and windows.',
    ],
    after: [
      'This monitoring is mandatory for verified sessions. If you do not consent, you must not use the application for competitive play.',
    ],
  },
  {
    heading: 'Violations & Consequences',
    text: [
      'Any detected anomalies (e.g., leaving the camera frame, switching applications, or suspicious audio) will generate alerts. These alerts may be reviewed by automated systems or human arbiters. Confirmed violations may result in immediate disqualification, forfeiture of matches, and temporary or permanent bans from the platform.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    text: [
      'Chess Shield provides monitoring tools to assist in fair play enforcement but does not guarantee the detection of all cheating methods. We shall not be held liable for any damages, disqualifications, or losses resulting from the use or inability to use our services, or from the decisions made by tournament arbiters based on our reports.',
    ],
  },
];

export default function Terms() {
  return <LegalPage title="Terms & Conditions" sections={sections} />;
}
