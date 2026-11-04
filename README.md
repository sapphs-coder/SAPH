# SAPH

SAPH is a creator-first social content studio designed to help build a distinctive personal brand on Instagram and TikTok.

## Current prototype

The first mobile-friendly web prototype includes:

- **Creator dashboard:** saved-draft and ready-to-post counts, recent drafts and a quick route into the studio.
- **Caption Studio:** describe a post, choose a content pillar, Instagram or TikTok, and a tone; explore three caption directions.
- **Draft actions:** copy a caption or save it to the dashboard. Drafts are stored in this browser using local storage.
- **Clean modern visual identity:** white, charcoal and soft grey.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Prototype limitations

Caption suggestions currently use simple local templates and are **demo output, not real AI generation**. Drafts stay in the current browser and are not synced to an account or cloud. SAPH does not connect to Instagram or TikTok, edit/render videos, provide analytics, schedule content or publish posts. No content is posted automatically.

## Product direction

The next milestones are a persistent content planner, creator voice settings, real AI caption generation, and later video-editing assistance and approved platform integrations.

See [docs/PRODUCT_SPEC.md](docs/PRODUCT_SPEC.md) for the broader product brief and roadmap.

## Product principles

- Preserve the creator's authentic voice.
- Never invent personal experiences, product use, endorsements or performance metrics.
- The creator reviews and approves every post.
- Be transparent about demo data and unfinished integrations.
