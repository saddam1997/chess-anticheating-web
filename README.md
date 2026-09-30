# Chess Shield website

Marketing site for Chess Shield, an AI-based anti-cheating platform for online chess,
with an admin panel at `/admin`. Built with Next.js and Tailwind CSS.

## Setup

```bash
npm install
cp .env.example .env.local   # then set the admin username, password and a session secret
npm run dev                  # http://localhost:3000, admin at /admin
```

Production: `npm run build && npm start`. This runs a Node server (it is no longer a static export).

## Admin

- **Queries**: messages sent from the Contact page form (email + message). Can be deleted.
- **Site content**: every piece of text on the site. Saving takes effect immediately.

Data is stored as JSON files in `data/` (`content.json`, `queries.json`), which is not committed.
Back that folder up, and host on a server with a persistent disk (a VPS, Railway, Render with a disk, etc.).
Serverless hosts like Vercel can't write to disk, so the admin panel won't save there.

Default copy, and the shape the admin editor follows, is in `content/defaults.js`.
