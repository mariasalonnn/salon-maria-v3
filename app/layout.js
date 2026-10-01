import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import "./index.css";
import { Header } from "@/app/modules/Header";
import { Footer } from "./modules/Footer";
import { shareImage } from "./data/site";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

const siteDescription =
  "Familievenlig frisør på Frederiksborgvej 202 i København NV. Børneklip, dameklip, herreklip, farve og balayage. Åbent tirsdag–lørdag. Book tid online.";

export const metadata = {
  metadataBase: new URL('https://www.salonmaria.info/'),
  title: "Salon Maria | Frisør for børn og voksne i København NV",
  description: siteDescription,
  favicon: "/favicon.ico",
  openGraph: {
    title: "Salon Maria | Frisør for børn og voksne i København NV",
    description: siteDescription,
    url: "/",
    siteName: "Salon Maria",
    locale: "da_DK",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salon Maria | Frisør for børn og voksne i København NV",
    description: siteDescription,
    images: [shareImage.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.salonmaria.info/#salon",
  name: "Salon Maria",
  foundingDate: "2014",
  url: "https://www.salonmaria.info",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.7221091,
    longitude: 12.5298994,
  },
  hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJtZ2yQxZSUkYR8GoDh9FxfuI",
  areaServed: ["København NV", "Bispebjerg", "Emdrup", "Utterslev"],
  logo: "https://www.salonmaria.info/logo_square.webp",
  image: [
    "https://www.salonmaria.info/gallery/boerneklip1.webp",
    "https://www.salonmaria.info/gallery/boerneklip6.webp",
    "https://www.salonmaria.info/maria.webp",
  ],
  telephone: "+4539561666",
  priceRange: "100-3500 DKK",
  currenciesAccepted: "DKK",
  paymentAccepted: "Kort, kontant, MobilePay",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Frederiksborgvej 202",
    postalCode: "2400",
    addressLocality: "København NV",
    addressCountry: "DK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/salonmaria.info",
    "https://www.instagram.com/salonmaria.info/",
    "https://maps.google.com/?cid=16320607244364507888",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://salon-maria.planway.com/",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Book tid",
    },
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${montserrat.variable} ${libreBaskerville.variable}`}>
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/927b04ae803e24da1af8530c/script.js"></Script>
      <body className="bg-grey">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
