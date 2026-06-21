import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://2gosooaipromptlab.com";

  // In a real app, you would fetch these from an API or JSON
  const routes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/request",
    "/insights",
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Add dummy posts to the sitemap
  const dynamicPosts = [1, 24, 25, 26, 27].map((id) => ({
    url: `${baseUrl}/post/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightPosts = [1, 2, 3].map((id) => ({
    url: `${baseUrl}/insights/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPosts, ...insightPosts];
}
