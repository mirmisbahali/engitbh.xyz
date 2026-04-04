import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge text-bg-dark">{post.category}</span>
          <span className="badge text-bg-light border">{post.readingTime} min read</span>
          {post.featured ? <span className="badge text-bg-warning">Featured</span> : null}
        </div>

        <h2 className="h4 card-title">
          <Link href={`/posts/${post.slug}`} className="text-decoration-none text-dark stretched-link">
            {post.title}
          </Link>
        </h2>

        <p className="text-secondary flex-grow-1">{post.summary}</p>

        <div className="small text-secondary d-flex flex-wrap justify-content-between gap-2 pt-3 border-top">
          <span>{post.date}</span>
          <span>{post.sources.length} source{post.sources.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </article>
  );
}
