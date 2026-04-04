import { notFound } from "next/navigation";
import SourceList from "@/components/SourceList";
import { getAllSlugs, getContentBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs("posts").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getContentBySlug("posts", params.slug);

  if (!post) {
    return buildMetadata({ title: "Post not found", path: `/posts/${params.slug}` });
  }

  return buildMetadata({
    title: post.title,
    description: post.summary,
    path: `/posts/${post.slug}`,
  });
}

export default function PostPage({ params }) {
  const post = getContentBySlug("posts", params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "EngiTBH",
    },
    mainEntityOfPage: `https://engitbh.xyz/posts/${post.slug}`,
  };

  return (
    <main className="container py-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto" style={{ maxWidth: "860px" }}>
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge text-bg-dark">{post.category}</span>
            <span className="badge text-bg-light border">{post.readingTime} min read</span>
            <span className="badge text-bg-light border">{post.date}</span>
          </div>
          <h1 className="display-5 fw-bold mb-3">{post.title}</h1>
          <p className="lead text-secondary mb-0">{post.summary}</p>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body small text-secondary d-flex flex-wrap gap-3 justify-content-between">
            <span>Author: {post.author}</span>
            <span>Updated: {post.updatedAt || post.date}</span>
            <span>{post.sources.length} sources referenced</span>
          </div>
        </div>

        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        <SourceList sources={post.sources} />
      </article>
    </main>
  );
}
