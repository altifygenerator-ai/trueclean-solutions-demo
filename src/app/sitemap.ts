import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/trueclean-og.png`,
        `${siteUrl}/images/trueclean-hero.jpg`,
        `${siteUrl}/images/trueclean-logo.jpg`,
      ],
    },
    {
      url: `${siteUrl}/gallery`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${siteUrl}/images/trueclean-before1.jpg`,
        `${siteUrl}/images/trueclean-after1.jpg`,
        `${siteUrl}/images/trueclean-before2.jpg`,
        `${siteUrl}/images/trueclean-after2.jpg`,
        `${siteUrl}/images/house-before.jpg`,
        `${siteUrl}/images/house-after.jpg`,
        `${siteUrl}/images/shovel-1.png`,
        `${siteUrl}/images/shovel-2.png`,
      ],
    },
  ];
}
