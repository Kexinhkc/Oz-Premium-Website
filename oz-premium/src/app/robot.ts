import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
      rules: {
        userAgent: "*",
        disallow: '/resources/',
      },
      sitemap: ["https://ozpremiumfinance.com.au/sitemap.xml"]
    };
  }