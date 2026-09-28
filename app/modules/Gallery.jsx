import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryAlts = [
  "Glade børn i børnehjørnet hos Salon Maria i København",
  "Dreng med krøllet hår efter klipning hos Salon Maria",
  "Lille barn i bilstol klar til børneklip",
  "Pige med crimpet hår, farvede striber og perler i håret",
  "Frisør klipper pandehår på lille pige",
  "Pige med langt rødt hår og farvede hårextensions",
  "Dreng med kort fade og rødfarvet pigget top",
  "Dreng i legetøjsbil i frisørstolen hos Salon Maria",
  "Dreng med pigget frisure i orange og grøn farve",
];

export default function Gallery() {
  return (
    <section className="px-2 md:px-6 py-4 md:py-8">
      <div className="mx-auto max-w-screen-xl text-white flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif lg:text-justify">
          Galleri
        </h1>
        <p>
          Billeder fra børneklip, farver og frisurer i den børnevenlige salon på Frederiksborgvej.
          Se også{" "}
          <Link href="/boerneklip" className="underline font-semibold">
            børneklip
          </Link>
          .
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {Array(9)
            .fill()
            .map((item, i) => (
              <Image
                key={i}
                src={`/gallery/boerneklip${i + 1}.webp`}
                alt={galleryAlts[i]}
                width={300}
                height={300}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                className="bg-[#eee] flex items-center justify-center object-cover w-full h-full rounded-md "
              />
            ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center pt-2">
          <Button asChild variant="outline">
            <Link href="https://salon-maria.planway.com/">Book tid</Link>
          </Button>
          <Button asChild variant="text">
            <Link href="/#priser">Se priser</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
