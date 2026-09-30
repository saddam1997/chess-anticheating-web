// All copy and contact details live here so the client can edit them in one place.
// Values marked TODO are placeholders waiting on client content (proposal §6, Receivables).

export const brand = {
  name: 'Chess Shield',
  tagline: 'Fair play, protected.', // TODO: replace with client-supplied tagline
  company: 'Comfygen',
};

export const contact = {
  email: 'hello@chessshield.com',   // TODO
  phone: '+91 00000 00000',         // TODO
  address: 'Office address, City, Country', // TODO
  website: 'www.comfygen.com',      // TODO: confirm
};

export const nav = [
  ['#overview', 'Overview'],
  ['#features', 'Features'],
  ['#ai-monitoring', 'Monitoring'],
  ['#windows', 'Windows'],
  ['#fair-play', 'Fair play'],
  ['#alerts', 'Alerts'],
  ['#roadmap', 'Roadmap'],
  ['#contact', 'Contact'],
];

export const features = [
  {
    key: 'face',
    title: 'Face monitoring',
    text: 'Checks that the registered player stays in front of the camera for the whole game, and notices a second face in the frame.',
    status: 'In development',
  },
  {
    key: 'voice',
    title: 'Voice detection',
    text: 'Listens for speech and whispered coaching during play, without recording conversations.',
    status: 'In development',
  },
  {
    key: 'gesture',
    title: 'Gesture detection',
    text: 'Picks up movements that point to outside help, such as looking down at a phone or reaching off-screen.',
    status: 'Planned',
  },
  {
    key: 'windows',
    title: 'Windows monitoring',
    text: 'Keeps the game in fullscreen and records every switch to another application or browser tab.',
    status: 'In development',
  },
  {
    key: 'alerts',
    title: 'Alerts & violations',
    text: 'Clear on-screen warnings for the player, and a timestamped violation record for the arbiter.',
    status: 'Planned',
  },
  {
    key: 'report',
    title: 'Arbiter reports',
    text: 'One report per game that puts every signal next to the move where it happened.',
    status: 'Planned',
  },
];

export const fairPlay = [
  {
    step: 'Detection',
    text: 'Camera, microphone and system signals are watched throughout the game. Something unusual is logged against the move and the clock.',
    example: 'Player looks away from the screen for 11 seconds on move 23.',
  },
  {
    step: 'Warning',
    text: 'The player sees a clear warning with the reason. Minor, one-off events stop here. Nobody is punished for a sneeze.',
    example: '“Please keep your face in view of the camera.” Warning 1 of 2.',
  },
  {
    step: 'Final action',
    text: 'Repeated or serious violations pause or end the game, and the full record goes to a human arbiter for the decision.',
    example: 'Game paused. Report #4127 sent to the tournament arbiter.',
  },
];

export const roadmap = [
  { phase: 'Phase 1', title: 'Brand, website and app preview', text: 'Identity, this website and the mobile app showcase.', status: 'Now' },
  { phase: 'Phase 2', title: 'Windows monitoring client', text: 'Fullscreen lock, app-switch detection and system checks on desktop.', status: 'Work in progress' },
  { phase: 'Phase 3', title: 'AI monitoring', text: 'Face, gesture and voice analysis running during live games.', status: 'Coming soon' },
  { phase: 'Phase 4', title: 'Arbiter dashboard', text: 'Review queue, per-game reports and tournament integrations.', status: 'Coming soon' },
];
