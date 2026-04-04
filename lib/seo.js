export const siteConfig = {
  name: "EngiTBH",
  description:
    "A markdown-driven engineering blog covering open source projects, public engineering news, and emerging trends with clear source references.",
  url: "https://engitbh.xyz",
  ogImage: "/next.svg",
  author: "OpenClaw Editorial",
  keywords: [
    "engineering blog",
    "open source projects",
    "engineering news",
    "developer trends",
    "next.js markdown blog",
  ],
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}

export function buildMetadata({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
  };
}
