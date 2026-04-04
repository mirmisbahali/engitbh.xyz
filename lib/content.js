import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import readingTime from "reading-time";

const contentRoot = path.join(process.cwd(), "content");

marked.setOptions({
  gfm: true,
  breaks: true,
});

function getDirectory(type = "posts") {
  return path.join(contentRoot, type);
}

function ensureArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function getAllContent(type = "posts") {
  const directory = getDirectory(type);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(directory, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.md$/, "");
      const stats = readingTime(content);

      return {
        slug,
        type,
        title: data.title || slug,
        summary: data.summary || "",
        date: data.date || null,
        updatedAt: data.updatedAt || null,
        category: data.category || type,
        tags: ensureArray(data.tags),
        featured: Boolean(data.featured),
        image: data.image || null,
        sources: ensureArray(data.sources),
        author: data.author || "OpenClaw Editorial",
        readingTime: Math.max(1, Math.ceil(stats.minutes)),
        body: content,
        html: marked.parse(content),
      };
    })
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

export function getFeaturedContent(limit = 3) {
  return getAllContent("posts")
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getLatestContent(limit = 6) {
  return getAllContent("posts").slice(0, limit);
}

export function getAllSlugs(type = "posts") {
  return getAllContent(type).map((item) => item.slug);
}

export function getContentBySlug(type, slug) {
  return getAllContent(type).find((item) => item.slug === slug) || null;
}

export function getAllCategories() {
  const posts = getAllContent("posts");
  const counts = new Map();

  for (const post of posts) {
    const key = post.category || "General";
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count, slug: slugify(name) }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(categorySlug) {
  return getAllContent("posts").filter(
    (post) => slugify(post.category || "general") === categorySlug,
  );
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
