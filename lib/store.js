import 'server-only';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Tiny JSON-file store under data/. Writes go through one queue and land atomically
// (write to a temp file, then rename), so a crash never leaves half a file behind.
const DIR = path.join(process.cwd(), 'data');
let queue = Promise.resolve();

export async function readJson(name, fallback) {
  try {
    return JSON.parse(await readFile(path.join(DIR, name), 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return fallback;
    throw err;
  }
}

export function writeJson(name, data) {
  const run = async () => {
    await mkdir(DIR, { recursive: true });
    const file = path.join(DIR, name);
    await writeFile(`${file}.tmp`, JSON.stringify(data, null, 2));
    await rename(`${file}.tmp`, file);
  };
  queue = queue.then(run, run);
  return queue;
}

// Read-modify-write inside the queue, so concurrent updates don't overwrite each other.
export function updateJson(name, fallback, fn) {
  const run = async () => {
    const next = fn(await readJson(name, fallback));
    await mkdir(DIR, { recursive: true });
    const file = path.join(DIR, name);
    await writeFile(`${file}.tmp`, JSON.stringify(next, null, 2));
    await rename(`${file}.tmp`, file);
    return next;
  };
  queue = queue.then(run, run);
  return queue;
}
