import Link from "next/link";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { getAllCategories, getFeaturedContent, getLatestContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engineering blog and news",
  description:
    "Browse source-cited open source engineering projects, public engineering news, and trend reports.",
  path: "/",
});

export default function Home() {
  const featured = getFeaturedContent(3);
  const latest = getLatestContent(6);
  const categories = getAllCategories();

  return (
    <main>
      <Hero />

      <section className="py-5 section-grid-bg">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4 gap-3 flex-wrap">
            <div>
              <p className="text-uppercase small text-secondary mb-1">Featured</p>
              <h2 className="mb-0 fw-bold">Top stories this week</h2>
            </div>
            <Link href="/posts" className="btn btn-outline-dark rounded-pill px-4">
              View all stories
            </Link>
          </div>
          <div className="row g-4">
            {featured.map((post) => (
              <div key={post.slug} className="col-md-6 col-xl-4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 border-top bg-white">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="insight-strip-card h-100">
                <div className="small text-uppercase text-secondary mb-2">Signal</div>
                <h3 className="h4">Open source tools</h3>
                <p className="text-secondary mb-0">We highlight projects with strong engineering lessons, not just hype cycles.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="insight-strip-card h-100">
                <div className="small text-uppercase text-secondary mb-2">Quality</div>
                <h3 className="h4">Source-backed writing</h3>
                <p className="text-secondary mb-0">Every article links back to public references so readers can verify the claims.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="insight-strip-card h-100">
                <div className="small text-uppercase text-secondary mb-2">Workflow</div>
                <h3 className="h4">Local editorial agent</h3>
                <p className="text-secondary mb-0">The writer agent lives on your machine and updates markdown separately from the app.</p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-8">
              <p className="text-uppercase small text-secondary mb-1">Latest stories</p>
              <h2 className="mb-4 fw-bold">Fresh engineering reads</h2>
              <div className="row g-4">
                {latest.map((post) => (
                  <div key={post.slug} className="col-md-6">
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4 sidebar-accent-card">
                <div className="card-body p-4">
                  <p className="text-uppercase small text-secondary mb-1">Editorial promise</p>
                  <h3 className="h4 fw-bold">Why this site is different</h3>
                  <ul className="text-secondary mb-0 ps-3">
                    <li>No mystery sourcing</li>
                    <li>Every story cites public references</li>
                    <li>Writers only edit markdown content</li>
                    <li>App code and content workflow stay separate</li>
                  </ul>
                </div>
              </div>

              <div className="card border-0 shadow-sm sidebar-accent-card">
                <div className="card-body p-4">
                  <p className="text-uppercase small text-secondary mb-1">Categories</p>
                  <div className="d-flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="badge rounded-pill text-bg-light border text-decoration-none px-3 py-2"
                      >
                        {category.name} ({category.count})
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
