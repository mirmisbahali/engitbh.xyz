import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description: "Explore EngiTBH stories by category.",
  path: "/categories",
});

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <main className="container py-5">
      <div className="mb-5">
        <p className="text-uppercase small text-secondary mb-1">Browse</p>
        <h1 className="display-5 fw-bold">Categories</h1>
      </div>

      <div className="row g-4">
        {categories.map((category) => (
          <div key={category.slug} className="col-md-6 col-xl-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h2 className="h4">{category.name}</h2>
                <p className="text-secondary">{category.count} published stories</p>
                <Link href={`/categories/${category.slug}`} className="btn btn-outline-dark">
                  View category
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
