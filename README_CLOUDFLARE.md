# Next.js + Cloudflare Workers Deployment Guide

This project is set up to deploy a Next.js application to Cloudflare Workers using OpenNext.

## Prerequisites

- Node.js 18+
- A Cloudflare account

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Install Cloudflare deployment dependencies:
   ```
   npm install --save-dev @opennextjs/cloudflare wrangler
   ```

3. Configuration files have been created:
   - `wrangler.json` - Cloudflare Workers configuration
   - `open-next.config.ts` - OpenNext configuration

4. Scripts added to `package.json`:
   - `preview` - Build and preview locally
   - `deploy` - Build and deploy to Cloudflare

## Deployment

### Environment Variables

For services like Firebase and NextAuth, set environment variables using Wrangler secrets:

```bash
npx wrangler secret put FIREBASE_PROJECT_ID
npx wrangler secret put FIREBASE_CLIENT_EMAIL
npx wrangler secret put FIREBASE_PRIVATE_KEY
npx wrangler secret put NEXTAUTH_SECRET
npx wrangler secret put NEXTAUTH_URL
```

### Deploy to Cloudflare

```bash
npm run deploy
```

This will:
1. Build the Next.js application
2. Convert it to a Cloudflare Worker using OpenNext
3. Deploy to Cloudflare Workers

The deployed application will be available at:
`https://my-next-app.<your-account>.workers.dev`

## Custom Domain

To use a custom domain:
1. Go to Cloudflare Dashboard
2. Navigate to Workers & Pages → your worker → Triggers / Routes
3. Add your custom domain

Alternatively, add a `routes` array in `wrangler.json`.