import 'server-only';
import { randomUUID } from 'node:crypto';
import { readJson, updateJson } from './store';

// Messages sent from the contact form.
const FILE = 'queries.json';

export async function listQueries() {
  const all = await readJson(FILE, []);
  return all.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addQuery({ email, message }) {
  const query = { id: randomUUID(), email, message, createdAt: new Date().toISOString() };
  await updateJson(FILE, [], (all) => [...all, query]);
  return query;
}

export async function deleteQuery(id) {
  let found = false;
  await updateJson(FILE, [], (all) => all.filter((q) => (q.id === id ? !(found = true) : true)));
  return found;
}
