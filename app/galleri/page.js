import Gallery from "../modules/Gallery";

export const metadata = {
  title: "Salon Maria | Galleri",
  alternates: {
    canonical: "/galleri",
  },
  openGraph: {
    title: "Salon Maria | Galleri",
    url: "/galleri",
    siteName: "Salon Maria",
    locale: "da_DK",
    type: "website",
    images: "/logo_square.webp",
  },
};

export default function Home() {
  return (
    <main >
      <Gallery />
    </main>
  );
}
