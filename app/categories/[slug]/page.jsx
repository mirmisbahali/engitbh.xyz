import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { getAllCategories, getPostsByCategory } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }) {
  const category = getAllCategories().find((item) => item.slug === params.slug);

  return buildMetadata({
    title: category ? category.name : "Category",
    description: category
      ? `Stories about ${category.name.toLowerCase()} and related engineering work.`
      : "Category archive",
    path: `/categories/${params.slug}`,
  });
}

export default function CategoryPage({ params }) {
  const category = getAllCategories().find((item) => item.slug === params.slug);
  const posts = getPostsByCategory(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="container py-5">
      <div className="mb-5">
        <p className="text-uppercase small text-secondary mb-1">Category</p>
        <h1 className="display-5 fw-bold">{category.name}</h1>
        <p className="lead text-secondary mb-0">{category.count} stories in this collection.</p>
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
