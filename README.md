# SmartEdgeTools

SmartEdgeTools is a Next.js website with browser-based calculators, converters, text utilities, image tools, a PDF merger, and an AI text improver.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` starts the local development server.
- `npm run lint` runs ESLint.
- `npm run build` creates a production build.
- `npm run start` serves the production build.

## Environment variables

The AI text improver requires `OPENROUTER_API_KEY`. Without it, the route returns a temporary-unavailable message. Add the key to a local `.env.local` file or the deployment platform's environment settings; do not commit secrets.

## Deployment notes

The rewrite route currently uses an in-memory per-instance rate limit. It reduces repeated requests handled by the same running instance, but it is not a shared limit across serverless instances. Configure an edge firewall rule or shared rate-limit store before relying on it to control production spend.

Google AdSense, Google Analytics (G-KRMPNVW2R8), and Microsoft Clarity are loaded by the client component `app/components/TrackingScripts.tsx`, rendered from the root layout. The component withholds all three scripts from the Privacy Policy (`/privacy-policy`) and Terms (`/terms`) pages on initial page load. The Google consent-mode defaults deny analytics and advertising storage for the EEA, UK, and Switzerland until the visitor chooses. Consent from those regions is collected through the "European regulations message - smartedgetools.com" published in AdSense → Privacy & messaging (a Google-certified consent message, published 24 Sept 2026, offering Consent and Manage options) — keep that message published. Clarity reads the Google consent mode signals automatically.
