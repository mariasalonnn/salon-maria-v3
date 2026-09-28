import Gallery from "../modules/Gallery";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  path: "/galleri",
  title: "Galleri – børneklip og frisurer | Salon Maria",
  description:
    "Billeder fra Salon Maria i København NV: børneklip, farver og frisurer fra vores børnevenlige salon på Frederiksborgvej.",
});

export default function Home() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
