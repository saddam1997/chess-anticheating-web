import 'server-only';
import { MongoClient } from 'mongodb';

// One shared client per server process. In dev, keep it on globalThis so hot reloads
// don't open a new connection pool on every edit.
const cache = globalThis.__mongo ?? (globalThis.__mongo = {});

export async function db() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not set');
  cache.client ??= new MongoClient(process.env.MONGODB_URI).connect().catch((err) => {
    cache.client = null; // let the next request retry instead of caching the failure
    throw err;
  });
  return (await cache.client).db(); // database name comes from the URI
}
