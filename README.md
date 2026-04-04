# EngiTBH

A Next.js engineering blog/news site with a markdown-first publishing workflow.

## What it does
- Renders articles from `content/posts/*.md`
- Shows category pages and article pages
- Includes source references on every story
- Exposes sitemap and RSS feed
- Keeps content generation separate from app code

## Local development
```bash
npm install
npm run dev
```

## Content workflow
- App code lives in Next.js
- Content lives in markdown files
- The separate OpenClaw writer agent should only edit `content/posts/*.md`

## Key folders
- `app/` - routes and pages
- `components/` - UI pieces
- `content/posts/` - markdown articles
- `lib/` - content parsing and SEO helpers
- `openclaw/content-writer/` - docs and prompt for the separate writer agent
