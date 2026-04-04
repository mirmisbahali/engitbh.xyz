# OpenClaw Content Writer Agent

This folder documents the separate content-writer agent that should run in OpenClaw, not inside Next.js.

## Responsibilities
- Research public engineering news, trends, and interesting open source projects
- Create or update markdown files in `content/posts/`
- Preserve source references for every article
- Commit and push content updates to the repo

## Editing boundary
The writer agent should only edit:
- `content/posts/*.md`
- optionally `content/WRITER_RULES.md` if the operator explicitly updates policy

## Recommended schedule
- Run once daily in the morning Melbourne time
- Generate 1-3 high-quality posts per run
- Skip publishing if no credible sources were found

## Suggested OpenClaw task prompt
See `prompt.md`.
