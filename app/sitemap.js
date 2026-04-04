import { getAllCategories, getAllContent } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export default function sitemap() {
  const staticRoutes = ["", "/posts", "/categories", "/about"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postRoutes = getAllContent("posts").map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: post.updatedAt || post.date || new Date().toISOString(),
  }));

  const categoryRoutes = getAllCategories().map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
