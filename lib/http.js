import 'server-only';

// Mutating API routes only accept JSON bodies. Browsers can't send a cross-site JSON
// POST without a CORS preflight (which we never allow), so this also blocks CSRF.
export async function readJsonBody(request) {
  if (!request.headers.get('content-type')?.includes('application/json')) return null;
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export const error = (message, status) => Response.json({ error: message }, { status });
