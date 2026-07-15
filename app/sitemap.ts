// app/sitemap.ts

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.odkryjkobiecosc.pl";
  const currentDate = new Date();

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sesja-kobieca-gdansk`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sesja-biznesowa-gdansk`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/poradnik/jak-przygotowac-sie-do-sesji-kobiecej`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/poradnik/co-ubrac-na-sesje-kobieca`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/poradnik/sesja-kobieca-cena-gdansk`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${siteUrl}/poradnik/nie-umiem-pozowac-sesja-kobieca`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${siteUrl}/poradnik/sesja-kobieca-po-ciazy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${siteUrl}/poradnik/sesja-kobieca-40-plus`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${siteUrl}/polityka-prywatnosci`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/polityka-cookies`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
