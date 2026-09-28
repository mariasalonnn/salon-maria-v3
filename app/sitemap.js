const baseUrl = "https://www.salonmaria.info";

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/galleri`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/abonnement`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["/dameklip", "/boerneklip", "/herreklip", "/farve-og-balayage"].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
  ];
}
