// Line pictograms, drawn on a 48px grid with a single stroke weight.
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

const Svg = ({ children, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" {...S}>{children}</svg>
);

export const Face = (p) => (
  <Svg {...p}>
    <path d="M6 14V6h8M34 6h8v8M42 34v8h-8M14 42H6v-8" />
    <ellipse cx="24" cy="22" rx="8" ry="10" />
    <path d="M12 42c1.5-6 6-9 12-9s10.5 3 12 9" />
  </Svg>
);

export const Voice = (p) => (
  <Svg {...p}>
    <path d="M6 24h3M12 18v12M18 12v24M24 20v8M30 8v32M36 16v16M42 24h0" />
  </Svg>
);

export const Gesture = (p) => (
  <Svg {...p}>
    <path d="M17 26V12a2.5 2.5 0 0 1 5 0v10M22 21v-12a2.5 2.5 0 0 1 5 0v12M27 22v-9a2.5 2.5 0 0 1 5 0v14a13 13 0 0 1-13 13h-1a11 11 0 0 1-9-4.6L6 29a2.5 2.5 0 0 1 4-3l7 5" />
    <path d="M38 8c2 2 3 4.5 3 7M35 11c1 1 1.5 2.3 1.5 3.7" />
  </Svg>
);

export const Windows = (p) => (
  <Svg {...p}>
    <rect x="5" y="9" width="30" height="22" />
    <path d="M5 14h30" />
    <rect x="13" y="17" width="30" height="22" fill="#080808" />
    <path d="M13 22h30M24 30l4 4 7-8" />
  </Svg>
);

export const Alert = (p) => (
  <Svg {...p}>
    <path d="M24 6 43 40H5L24 6Z" />
    <path d="M24 19v10M24 34v.5" />
  </Svg>
);

export const Report = (p) => (
  <Svg {...p}>
    <path d="M11 5h19l8 8v30H11V5Z" />
    <path d="M30 5v8h8M17 21h15M17 27h15M17 33h9" />
  </Svg>
);

export const byKey = { face: Face, voice: Voice, gesture: Gesture, windows: Windows, alerts: Alert, report: Report };
