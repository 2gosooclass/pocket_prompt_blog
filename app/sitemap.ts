import { MetadataRoute } from "next";
import postsData from "../public/data/posts_data.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://2gosooaipromptlab.com";

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

  const dynamicPosts = postsData.map((post) => ({
    url: `${baseUrl}/post/${post.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Keep old dummy insights for now or remove them if unused.
  const insightPosts = [1, 2, 3].map((id) => ({
    url: `${baseUrl}/insights/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPosts, ...insightPosts];
}
