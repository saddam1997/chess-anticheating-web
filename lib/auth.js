import 'server-only';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

// Single admin account from env (.env.local): ADMIN_USERNAME, ADMIN_PASSWORD, SESSION_SECRET.
// The session is a signed cookie holding its expiry time; there is no server-side session table.
const COOKIE = 'cs_admin';
const MAX_AGE = 60 * 60 * 8; // 8 hours

const hash = (s) => createHash('sha256').update(String(s)).digest();
const sameText = (a, b) => timingSafeEqual(hash(a), hash(b));

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error('SESSION_SECRET must be set to at least 32 characters');
  return s;
}

const sign = (payload) => createHmac('sha256', secret()).update(payload).digest('base64url');

export function isConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && process.env.SESSION_SECRET?.length >= 32);
}

export function checkCredentials(username, password) {
  if (!isConfigured()) return false;
  // evaluate both so timing doesn't reveal which one was wrong
  const userOk = sameText(username, process.env.ADMIN_USERNAME);
  const passOk = sameText(password, process.env.ADMIN_PASSWORD);
  return userOk && passOk;
}

export async function startSession() {
  const exp = String(Date.now() + MAX_AGE * 1000);
  (await cookies()).set(COOKIE, `${exp}.${sign(exp)}`, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin() {
  if (!isConfigured()) return false;
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;
  const [exp, sig] = value.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const expected = sign(exp);
  return sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}
