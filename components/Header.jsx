'use client';

import { useState } from 'react';
import useHash from '@/hooks/useHash';
import Logo from './Logo';

export default function Header({ brandName, nav }) {
  const [open, setOpen] = useState(false);
  const active = `#${useHash()}`;

  return (
    <header className="relative z-20 shrink-0 border-b border-rule bg-ink/95 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center gap-10">
        <a href="#top" className="no-underline" aria-label={`${brandName} home`}><Logo alt={brandName} /></a>

        <nav
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-rule bg-ink
            lg:static lg:ml-auto lg:flex lg:flex-row lg:gap-7 lg:border-0 lg:bg-transparent`}
        >
          {nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={href === active ? 'page' : undefined}
              className="border-t border-rule px-8 py-4 text-base text-silver-mid no-underline hover:text-silver aria-[current=page]:text-white lg:border-0 lg:p-0 lg:text-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menu"
          className="ml-auto h-8 rounded-[2px] border border-rule-strong px-3 font-mono text-xs text-silver-mid lg:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
}
