import { brand } from '@/content/site';

// Shield outline with a quartered chessboard inside it.
export function ShieldMark({ size = 22 }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 40 46" aria-hidden="true">
      <path d="M20 1.5 37.5 7.5v15c0 10.4-7.3 18.8-17.5 22-10.2-3.2-17.5-11.6-17.5-22v-15L20 1.5Z"
        fill="none" stroke="#F2F2F2" strokeWidth="2.5" />
      <clipPath id="shieldClip">
        <path d="M20 8 31.5 12v10.5c0 7-4.7 12.8-11.5 15.3C13.2 35.3 8.5 29.5 8.5 22.5V12L20 8Z" />
      </clipPath>
      <g clipPath="url(#shieldClip)">
        <rect x="8" y="7" width="12" height="16" fill="#F2F2F2" />
        <rect x="20" y="7" width="12" height="16" fill="#77797C" />
        <rect x="8" y="23" width="12" height="16" fill="#77797C" />
        <rect x="20" y="23" width="12" height="16" fill="#F2F2F2" />
      </g>
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <ShieldMark />
      <span className="font-serif text-[22px] leading-none tracking-[-0.01em]">{brand.name}</span>
    </span>
  );
}
