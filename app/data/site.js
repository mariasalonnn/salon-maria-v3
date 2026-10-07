export const siteUrl = "https://www.salonmaria.info";
export const bookingUrl = "https://salon-maria.planway.com/";
export const phone = "+4539561666";
export const phoneDisplay = "+45 39 56 16 66";

export const shareImage = {
  url: "/og-salon-maria-logo.jpg",
  width: 1200,
  height: 630,
  alt: "Salon Maria logo",
};

export const servicePages = [
  { href: "/dameklip", title: "Dameklip" },
  { href: "/boerneklip", title: "Børneklip" },
  { href: "/herreklip", title: "Herreklip" },
  { href: "/farve-og-balayage", title: "Farve og balayage" },
  { href: "/keratin-og-haarbehandlinger", title: "Keratin og hårbehandlinger" },
  { href: "/boernefoedselsdag", title: "Børnefødselsdag" },
];

// Shared metadata for sub pages: canonical URL + OpenGraph basics.
export function pageMetadata({ path, title, description, image }) {
  const og = image ?? shareImage;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Salon Maria",
      locale: "da_DK",
      type: "website",
      images: [{ url: og.url, width: og.width, height: og.height, alt: og.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}
