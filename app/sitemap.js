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
  ];
}
