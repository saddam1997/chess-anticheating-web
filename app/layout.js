import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const serif = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-newsreader', display: 'swap' });
const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });

export const metadata = {
  title: 'Chess Shield — AI anti-cheating for online chess',
  description: 'Chess Shield is an AI-based anti-cheating platform for online chess: face, voice and gesture monitoring, Windows monitoring, and a fair warning process.',
};

export const viewport = { themeColor: '#080808' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
