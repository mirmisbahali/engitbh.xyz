# Content Writer Rules

The OpenClaw content writer agent is separate from the Next.js app and must follow these constraints:

## Allowed changes
- Create new markdown files in `content/posts/`
- Update existing markdown files in `content/posts/`
- Adjust frontmatter fields for content freshness

## Forbidden changes
- Do not edit files in `app/`, `components/`, `lib/`, `public/`, or config files
- Do not remove source citations
- Do not publish unsourced claims
- Do not fabricate interviews, metrics, or quotes

## Required frontmatter
- `title`
- `summary`
- `date`
- `updatedAt`
- `category`
- `tags`
- `featured`
- `author`
- `sources`

## Required editorial standards
- Every article must cite at least 2 public sources when possible
- Clearly summarize the source material rather than copying it
- Add an editorial note when the article is a synthesis
- Focus on open source engineering projects, public engineering news, or engineering trends
