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

Google AdSense, Google Analytics, and Microsoft Clarity are loaded by `app/components/TrackingScripts.tsx`. The Google consent defaults cover the EEA, UK, and Switzerland, and tracking scripts are omitted from the privacy-policy page. Keep the European regulations message published in AdSense and enable advertising and analytics consent mode in its Privacy & messaging settings. Clarity reads the Google consent mode signals automatically.
