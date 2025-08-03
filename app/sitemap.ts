import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://redcell-advisory.com"

  // Get all posts
  const posts = getAllPosts()
  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Define static routes
  const staticRoutes = [
    "/",
    "/services",
    "/pricing",
    "/cases",
    "/blog",
    "/faq",
    "/contact",
    "/submit",
    "/legal/terms",
    "/legal/privacy",
    "/legal/gdpr",
  ]

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.7,
  }))

  return [...staticUrls, ...postUrls]
}
