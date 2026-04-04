import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "How EngiTBH separates rendering from the autonomous content-writing workflow.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="container py-5" style={{ maxWidth: "900px" }}>
      <p className="text-uppercase small text-secondary mb-1">About</p>
      <h1 className="display-5 fw-bold mb-4">How this publishing system works</h1>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h4">Architecture</h2>
          <ul className="text-secondary mb-0">
            <li>Next.js renders the site and reads markdown content from the repo.</li>
            <li>Posts live in the <code>content/posts</code> folder as markdown files with frontmatter.</li>
            <li>A separate OpenClaw content writer agent researches public information and edits markdown only.</li>
            <li>Git commits trigger redeploys on Vercel.</li>
          </ul>
        </div>
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h4">Editorial rules</h2>
          <ul className="text-secondary mb-0">
            <li>Every article must include public sources.</li>
            <li>Summaries should clearly separate facts from editorial interpretation.</li>
            <li>The content writer agent should not modify app code, layout, or SEO logic.</li>
            <li>Markdown content remains auditable in git history.</li>
          </ul>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h2 className="h4">Where the agent lives</h2>
          <p className="text-secondary mb-0">
            The content writer is intended to run inside OpenClaw on a schedule. It is separate from the Next.js runtime and only interacts with the repo by updating markdown files and pushing commits.
          </p>
        </div>
      </div>
    </main>
  );
}
