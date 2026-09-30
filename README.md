# Chess Shield website

Marketing site for Chess Shield, an AI-based anti-cheating platform for online chess,
with an admin panel at `/admin`. Built with Next.js and Tailwind CSS.

## Setup

```bash
npm install
cp .env.example .env.local   # then set the admin login and MONGODB_URI
npm run dev                  # http://localhost:3000, admin at /admin
```

Production: `npm run build && npm start`. This runs a Node server (it is no longer a static export).

## Admin

- **Queries**: messages sent from the Contact page form (email + message). Can be deleted.
- **Site content**: every piece of text on the site. Saving takes effect immediately.

Data is stored in MongoDB (`MONGODB_URI` in `.env.local`, database name taken from the URI):
the `content` collection holds one `site` document with all the copy, and `queries` holds contact messages.
In MongoDB Atlas, allow the server's IP under Network Access.

Default copy, and the shape the admin editor follows, is in `content/defaults.js`.
