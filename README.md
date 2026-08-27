# TechBridge Infinity Grid

Vite + React site for the TechBridge Infinity Grid digital studio.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add the Supabase project URL and anon key to persist gig requests. Run `supabase.sql` in the Supabase SQL editor before deploying.

## Deploy

Import the repository into Vercel. Use `npm run build` as the build command and add the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` environment variables in the project settings.
