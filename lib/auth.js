import 'server-only';
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { db } from './mongo';

// Single admin account from env (.env.local): ADMIN_USERNAME, ADMIN_PASSWORD.
// Each login gets a random token in a cookie; MongoDB keeps only its hash in `sessions`,
// and a TTL index removes expired sessions automatically.
const COOKIE = 'cs_admin';
const MAX_AGE = 60 * 60 * 8; // 8 hours

const hash = (s) => createHash('sha256').update(String(s)).digest();
const sameText = (a, b) => timingSafeEqual(hash(a), hash(b));
const tokenId = (token) => hash(token).toString('hex');

async function sessions() {
  const col = (await db()).collection('sessions');
  await col.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // no-op once it exists
  return col;
}

export function isConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD);
}

export function checkCredentials(username, password) {
  if (!isConfigured()) return false;
  // evaluate both so timing doesn't reveal which one was wrong
  const userOk = sameText(username, process.env.ADMIN_USERNAME);
  const passOk = sameText(password, process.env.ADMIN_PASSWORD);
  return userOk && passOk;
}

export async function startSession() {
  const token = randomBytes(32).toString('base64url');
  await (await sessions()).insertOne({ _id: tokenId(token), expiresAt: new Date(Date.now() + MAX_AGE * 1000) });
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (token) await (await sessions()).deleteOne({ _id: tokenId(token) });
  store.delete(COOKIE);
}

export async function isAdmin() {
  if (!isConfigured()) return false;
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return false;
  // the TTL cleanup runs about once a minute, so check the expiry here too
  const session = await (await sessions()).findOne({ _id: tokenId(token), expiresAt: { $gt: new Date() } });
  return Boolean(session);
}
