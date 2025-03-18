import { DOMAIN_NAME } from "@/lib/constant";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin/", "/private/"],
		},
		sitemap: `${DOMAIN_NAME}/sitemap.xml`,
	};
}
