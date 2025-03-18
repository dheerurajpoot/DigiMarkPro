import { DOMAIN_NAME } from "@/lib/constant";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = DOMAIN_NAME;

	// Main pages
	const routes = [
		"",
		"/services",
		"/pricing",
		"/about",
		"/blog",
		"/contact",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1 : 0.8,
	}));

	// Service pages
	const serviceRoutes = [
		"/services/seo",
		"/services/ppc",
		"/services/social-media",
		"/services/content",
		"/services/email",
		"/services/analytics",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// Blog posts (in a real app, these would be dynamically generated)
	const blogRoutes = [
		"/blog/seo-strategies-2025",
		"/blog/ppc-campaign-converts",
		"/blog/social-media-trends-2025",
		"/blog/ultimate-guide-content-marketing",
		"/blog/email-marketing-best-practices",
		"/blog/measure-digital-marketing-roi",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...routes, ...serviceRoutes, ...blogRoutes];
}
