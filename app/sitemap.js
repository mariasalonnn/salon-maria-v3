const baseUrl = "https://www.salonmaria.info";

export default function sitemap() {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/galleri`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/abonnement`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["/dameklip", "/boerneklip", "/herreklip", "/farve-og-balayage", "/keratin-og-haarbehandlinger"].map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
  ];
}
