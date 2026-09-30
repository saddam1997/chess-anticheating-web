'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import useHash from '@/hooks/useHash';

// Shows one section at a time in the space under the header, picked by the URL hash.
// Falls back to the hero ('top') for an empty or unknown hash.
// From md up, a section taller than the space is scaled down to fit, so nothing scrolls;
// on phones scaling would make text unreadable, so the section scrolls instead.
export default function Screens({ screens }) {
  const hash = useHash();
  const id = hash in screens ? hash : 'top';
  const box = useRef(null);
  const content = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const fit = () => {
      const wide = window.matchMedia('(width >= 820px)').matches;
      // transforms don't affect offsetHeight, so this is always the unscaled height
      const s = box.current.clientHeight / content.current.offsetHeight;
      setScale(wide ? Math.min(1, s) : 1);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box.current);
    ro.observe(content.current);
    return () => ro.disconnect();
  }, [id]);

  return (
    <main ref={box} className="min-h-0 flex-1 overflow-y-auto md:overflow-hidden">
      <div
        key={id}
        ref={content}
        className="flex min-h-full animate-rise flex-col"
        style={scale < 1 ? { transform: `scale(${scale})`, transformOrigin: 'top center' } : undefined}
      >
        {screens[id]}
      </div>
    </main>
  );
}
