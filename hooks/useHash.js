'use client';

import { useSyncExternalStore } from 'react';

// Current URL hash without the '#'. Nav links stay plain anchors; this just reads them.
const subscribe = (cb) => {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
};

export default function useHash() {
  return useSyncExternalStore(subscribe, () => window.location.hash.slice(1), () => '');
}
