export const siteUrl = "https://www.salonmaria.info";
export const bookingUrl = "https://salon-maria.planway.com/";
export const phone = "+4539561666";
export const phoneDisplay = "+45 39 56 16 66";

export const servicePages = [
  { href: "/dameklip", title: "Dameklip" },
  { href: "/boerneklip", title: "Børneklip" },
  { href: "/herreklip", title: "Herreklip" },
  { href: "/farve-og-balayage", title: "Farve og balayage" },
  { href: "/keratin-og-haarbehandlinger", title: "Keratin og hårbehandlinger" },
  { href: "/boernefoedselsdag", title: "Børnefødselsdag" },
];

// Shared metadata for sub pages: canonical URL + OpenGraph basics.
export function pageMetadata({ path, title, description }) {
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
      images: "/logo_square.webp",
    },
  };
}
