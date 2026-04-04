import PostCard from "@/components/PostCard";
import { getAllContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All stories",
  description: "Browse every source-cited story published on EngiTBH.",
  path: "/posts",
});

export default function PostsPage() {
  const posts = getAllContent("posts");

  return (
    <main className="container py-5">
      <div className="mb-5">
        <p className="text-uppercase small text-secondary mb-1">Archive</p>
        <h1 className="display-5 fw-bold">All stories</h1>
        <p className="lead text-secondary mb-0">
          Long-form explainers, project spotlights, and engineering trend briefs.
        </p>
      </div>

      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.slug} className="col-md-6 col-xl-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
