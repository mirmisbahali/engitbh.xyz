import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="card h-100 shadow-sm border-0 post-card overflow-hidden">
      <div className="post-card-topbar" />
      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge rounded-pill text-bg-dark px-3 py-2">{post.category}</span>
          <span className="badge rounded-pill text-bg-light border px-3 py-2">{post.readingTime} min read</span>
          {post.featured ? <span className="badge rounded-pill text-bg-warning px-3 py-2">Featured</span> : null}
        </div>

        <h2 className="h4 card-title lh-sm mb-3">
          <Link href={`/posts/${post.slug}`} className="text-decoration-none text-dark stretched-link">
            {post.title}
          </Link>
        </h2>

        <p className="text-secondary flex-grow-1 mb-4">{post.summary}</p>

        <div className="small text-secondary d-flex flex-wrap justify-content-between gap-2 pt-3 border-top border-secondary-subtle">
          <span>{post.date}</span>
          <span>{post.sources.length} source{post.sources.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </article>
  );
}
