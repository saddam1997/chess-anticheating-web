// Default site copy. The live copy is edited in /admin and saved to data/content.json;
// anything missing there falls back to these values, and the admin editor uses this
// shape as its schema (field types, list item templates).
// In titles, wrap words in *asterisks* to set them in italics.

// Fields whose values must come from a fixed list; the editor shows these as dropdowns.
export const fieldOptions = {
  icon: ['face', 'voice', 'gesture', 'windows', 'alerts', 'report'],
  kind: ['banner', 'modal'],
};

export const defaults = {
  seo: {
    title: 'Chess Shield — AI anti-cheating for online chess',
    description: 'Chess Shield is an AI-based anti-cheating platform for online chess: face, voice and gesture monitoring, Windows monitoring, and a fair warning process.',
  },

  brand: {
    name: 'Chess Shield',
    tagline: 'Fair play, protected.',
    company: 'Comfygen',
  },

  contact: {
    email: 'hello@chessshield.com',
    phone: '+91 00000 00000',
    address: 'Office address, City, Country',
    website: 'www.comfygen.com',
  },

  hero: {
    title: 'Online chess, *without* the second screen.',
    text: 'Chess Shield is an AI-based anti-cheating platform for online chess. It watches the player, the room and the computer during a game, warns when something looks wrong, and gives arbiters a clear record to decide on.',
    primaryButton: 'Explore platform',
    secondaryButton: 'See the roadmap',
    note: 'Monitoring features shown on this site are in development.',
    panelTitle: 'Session monitor',
    panelMeta: 'Round 3 · Board 12',
    readouts: [
      { icon: 'face', label: 'Camera', value: 'Player in frame' },
      { icon: 'voice', label: 'Microphone', value: 'Room quiet' },
      { icon: 'windows', label: 'Windows', value: 'Fullscreen · 0 switches' },
    ],
    statusLabel: 'Fair play',
    statusValue: 'Clear',
    caption: 'Concept screen: what a monitored game will look like to the arbiter.',
  },

  overview: {
    navLabel: 'Overview',
    label: 'Overview',
    title: 'Built for the moment nobody is *watching*.',
    intro: "Online chess has no arbiter walking the room. Chess Shield brings that supervision to the player's desk with camera, microphone and computer monitoring, plus a fair process for deciding what happens next.",
    audiences: [
      { title: 'Players', text: 'Know the rules before the game starts. Get a clear warning, not a silent ban, if something is picked up.' },
      { title: 'Arbiters', text: 'Every warning and violation arrives with a time, a move number and the reason, in one report per game.' },
      { title: 'Organisers', text: 'Run online events and rated games with the same confidence as an over-the-board hall.' },
    ],
  },

  features: {
    navLabel: 'Features',
    label: 'Key features',
    title: 'Six ways the platform keeps a game fair.',
    intro: 'Each one covers a different way people cheat online: an engine in another window, a coach in the room, a phone under the desk.',
    items: [
      { icon: 'face', title: 'Face monitoring', text: 'Checks that the registered player stays in front of the camera for the whole game, and notices a second face in the frame.', status: 'In development' },
      { icon: 'voice', title: 'Voice detection', text: 'Listens for speech and whispered coaching during play, without recording conversations.', status: 'In development' },
      { icon: 'gesture', title: 'Gesture detection', text: 'Picks up movements that point to outside help, such as looking down at a phone or reaching off-screen.', status: 'Planned' },
      { icon: 'windows', title: 'Windows monitoring', text: 'Keeps the game in fullscreen and records every switch to another application or browser tab.', status: 'In development' },
      { icon: 'alerts', title: 'Alerts & violations', text: 'Clear on-screen warnings for the player, and a timestamped violation record for the arbiter.', status: 'Planned' },
      { icon: 'report', title: 'Arbiter reports', text: 'One report per game that puts every signal next to the move where it happened.', status: 'Planned' },
    ],
  },

  monitoring: {
    navLabel: 'Monitoring',
    label: 'AI monitoring',
    title: 'A camera that knows what *cheating* looks like.',
    intro: "Face, movement and voice models run alongside the game. They flag behaviour. They don't identify strangers or keep recordings.",
    readouts: [
      { name: 'Facial monitoring', value: '1 face · looking at screen', flagged: false },
      { name: 'Movement detection', value: 'Glance down, 3.2s', flagged: true },
      { name: 'Voice monitoring', value: 'No speech detected', flagged: false },
    ],
    statusTag: 'In development',
    statusNote: 'Available in Phase 3',
    caption: 'Concept screen: what the camera check will show.',
  },

  windows: {
    navLabel: 'Windows',
    label: 'Windows monitoring',
    title: 'The engine is usually one Alt-Tab away.',
    intro: 'A lightweight Windows client keeps the game in front and writes down everything that tries to get in the way.',
    capabilities: [
      { title: 'Full-screen monitoring', text: 'The game has to stay fullscreen. Leaving it is logged and can pause the clock.' },
      { title: 'Application switching', text: 'Every switch to another program or tab is recorded with how long the player was away.' },
      { title: 'System monitoring', text: 'Checks for remote-desktop tools, screen sharing, virtual machines and extra displays.' },
    ],
    log: [
      { time: '14:02:11', event: 'Game opened in fullscreen', status: 'OK' },
      { time: '14:09:40', event: 'Switched to Google Chrome', status: 'Flagged' },
      { time: '14:09:52', event: 'Returned to the game', status: '' },
      { time: '14:15:03', event: 'Screen-sharing app detected', status: 'Flagged' },
      { time: '14:20:00', event: 'Second display connected', status: 'Warning' },
    ],
    caption: 'Concept screen: a sample activity log from the Windows client (Phase 2).',
  },

  fairPlay: {
    navLabel: 'Fair play',
    label: 'Fair play system',
    title: 'Detection, warning, then *action*. In that order.',
    intro: "Software can spot patterns, but it shouldn't end a game on one bad reading. Every case follows three steps, and a person makes the final call.",
    steps: [
      { title: 'Detection', text: 'Camera, microphone and system signals are watched throughout the game. Something unusual is logged against the move and the clock.', example: 'Player looks away from the screen for 11 seconds on move 23.' },
      { title: 'Warning', text: 'The player sees a clear warning with the reason. Minor, one-off events stop here. Nobody is punished for a sneeze.', example: '“Please keep your face in view of the camera.” Warning 1 of 2.' },
      { title: 'Final action', text: 'Repeated or serious violations pause or end the game, and the full record goes to a human arbiter for the decision.', example: 'Game paused. Report #4127 sent to the tournament arbiter.' },
    ],
  },

  alerts: {
    navLabel: 'Alerts',
    label: 'Alerts & violations',
    title: 'What the player sees, at each step.',
    intro: 'Short, specific messages that say what was noticed and what happens next. Pick a stage to preview the screen.',
    opponentName: 'Opponent',
    opponentClock: '04:12',
    playerName: 'You',
    playerClock: '03:58',
    stages: [
      { tab: 'Warning', kind: 'banner', title: 'Warning 1 of 2', body: 'Please keep your face in view of the camera. The game continues.', meta: '', action: 'I understand' },
      { tab: 'Violation', kind: 'modal', title: 'Game paused', body: 'You switched to another application (Google Chrome) for 12 seconds. This has been recorded as violation 2 of 3.', meta: '', action: 'Return to game' },
      { tab: 'Final action', kind: 'modal', title: 'Game ended', body: 'This game has been sent to the tournament arbiter for review. You will be notified of the decision by email.', meta: 'Report #4127 · 3 violations', action: 'View report' },
    ],
    caption: 'Static demonstration. No monitoring is running on this page.',
  },

  roadmap: {
    navLabel: 'Roadmap',
    label: 'Roadmap',
    title: "Where we are, and what's next.",
    intro: 'The platform is being built in phases. This site and the mobile app preview are phase one.',
    phases: [
      { phase: 'Phase 1', title: 'Brand, website and app preview', text: 'Identity, this website and the mobile app showcase.', status: 'Now', current: true },
      { phase: 'Phase 2', title: 'Windows monitoring client', text: 'Fullscreen lock, app-switch detection and system checks on desktop.', status: 'Work in progress', current: false },
      { phase: 'Phase 3', title: 'AI monitoring', text: 'Face, gesture and voice analysis running during live games.', status: 'Coming soon', current: false },
      { phase: 'Phase 4', title: 'Arbiter dashboard', text: 'Review queue, per-game reports and tournament integrations.', status: 'Coming soon', current: false },
    ],
    appTitle: 'Mobile app',
    appText: 'The Chess Shield app for Android and iOS is on its way.',
    appStoreNote: 'Coming soon',
  },

  contactPage: {
    navLabel: 'Contact',
    label: 'Contact',
    title: 'Running an event, or building a chess platform?',
    intro: "We'd like to hear what you need. Early partners help shape what gets built first.",
    submitButton: 'Send message',
    successMessage: "Thanks — your message has been sent. We'll reply by email.",
  },
};
