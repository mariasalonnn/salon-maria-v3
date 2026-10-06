import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productBrands } from "@/app/data/products";
import { formatPrice } from "@/app/data/prices";
import { pageMetadata } from "@/app/data/site";

const path = "/produkter";
const instagramUrl = "https://www.instagram.com/salonmaria.info/";
const facebookUrl = "https://www.facebook.com/salonmaria.info";
const orderPhone = "+4593106018";
const orderPhoneDisplay = "+45 93 10 60 18";
const mobilePayNumber = "59529";

export const metadata = pageMetadata({
  path,
  title: "Hårprodukter – Moroccanoil og Wella | Salon Maria",
  description:
    "Bestil Moroccanoil og Wella hos Salon Maria i København NV. Ring eller skriv til 93 10 60 18, og betal med MobilePay til 59529. Fri fragt ved køb over 500 kr.",
});

function catalogJsonLd() {
  const items = [];
  for (const brand of productBrands) {
    for (const category of brand.categories) {
      for (const product of category.products) {
        items.push({
          "@type": "Product",
          name: `${brand.name} ${product.name}`,
          brand: { "@type": "Brand", name: brand.brandName },
          ...(category.title ? { category: category.title } : {}),
          offers: product.variants.map((variant) => ({
            "@type": "Offer",
            priceCurrency: "DKK",
            price: String(variant.price),
            ...(variant.size ? { name: variant.size } : {}),
            availability: "https://schema.org/InStock",
            url: `https://www.salonmaria.info${path}#${brand.id}`,
            seller: { "@id": "https://www.salonmaria.info/#salon" },
          })),
        });
      }
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hårprodukter hos Salon Maria",
    url: `https://www.salonmaria.info${path}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
  };
}

export default function ProdukterPage() {
  const jsonLd = JSON.stringify(catalogJsonLd()).replace(/</g, "\\u003c");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Intro />
      <Catalog />
    </main>
  );
}

function Intro() {
  return (
    <section className="px-4 md:px-6 py-8 lg:py-16 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif max-w-4xl">
          Hårprodukter
        </h1>
        <p className="text-base md:text-lg max-w-3xl">
          I salonen på Frederiksborgvej i København NV kan du købe hårpleje fra Moroccanoil og
          Wella Professionals. Det er shampoo, balsam, masker og styling – de samme mærker, vi
          bruger, når vi behandler hår.
        </p>
        <div className="bg-white text-black rounded-md border-t-4 border-red p-6 md:p-8 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">Sådan bestiller du</h2>
          <p className="text-base md:text-lg max-w-3xl">
            Der er ingen kortbetaling her på siden. Ring eller skriv til{" "}
            <a href={`tel:${orderPhone}`} className="underline font-semibold">
              {orderPhoneDisplay}
            </a>
            , så lægger vi produktet til side. Du kan også købe det direkte i salonen.
          </p>
          <div className="rounded-md border-2 border-red px-4 py-3 flex flex-col gap-1 max-w-3xl">
            <p className="text-base md:text-lg font-semibold">
              Betal med MobilePay til {mobilePayNumber}.
            </p>
            <p className="text-base md:text-lg font-semibold">Fri fragt ved køb over 500 kr.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="w-full sm:w-auto">
              <a href={`tel:${orderPhone}`}>Ring {orderPhoneDisplay}</a>
            </Button>
            <Button asChild variant="outline" className="border-black text-black w-full sm:w-auto">
              <a href={`sms:${orderPhone}`}>Send sms til {orderPhoneDisplay}</a>
            </Button>
          </div>
          <p>
            Du kan også skrive på{" "}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Instagram
            </a>{" "}
            eller{" "}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Facebook
            </a>
            .
          </p>
          <p>
            Salonen ligger på Frederiksborgvej 202, 2400 København NV. Åbent tirsdag–fredag
            09:30–17:30 og lørdag 09:00–14:00.
          </p>
          <p>
            <Link href="/abonnement" className="underline font-semibold">
              Salon Maria Club
            </Link>{" "}
            giver 15 % rabat på hårprodukter.
          </p>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section className="bg-white text-black" aria-label="Prisliste">
      <div className="sticky top-14 z-10 overflow-hidden border-b border-neutral-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="Mærker"
          className="mx-auto flex w-full max-w-screen-xl gap-2 overflow-x-auto px-4 py-3 md:px-6"
        >
          {productBrands.map((brand) => (
            <a
              key={brand.id}
              href={`#${brand.id}`}
              className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-grey px-4 text-sm font-semibold text-white"
            >
              {brand.name.replace("Wella ", "")}
            </a>
          ))}
        </nav>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-14 px-4 py-8 md:px-6 md:py-12">
        {productBrands.map((brand) => (
          <BrandSection key={brand.id} brand={brand} />
        ))}
        <div className="rounded-md border-t-4 border-red bg-neutral-50 p-6 flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">Klar til at bestille?</h2>
          <p className="max-w-3xl">
            Ring eller skriv til{" "}
            <a href={`tel:${orderPhone}`} className="underline font-semibold">
              {orderPhoneDisplay}
            </a>
            , eller køb produkterne i salonen. Betal med MobilePay til {mobilePayNumber}. Fri fragt
            ved køb over 500 kr.
          </p>
          <p className="max-w-3xl">
            <a href={`sms:${orderPhone}`} className="underline font-semibold">
              Send en sms til {orderPhoneDisplay}
            </a>
            , eller skriv på{" "}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Instagram
            </a>{" "}
            eller{" "}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Facebook
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandSection({ brand }) {
  const headingId = `${brand.id}-heading`;
  return (
    <section id={brand.id} aria-labelledby={headingId} className="scroll-mt-32 flex flex-col gap-6">
      <header className="flex min-w-0 items-center gap-3 border-t-2 border-red pt-6 sm:gap-4">
        {brand.image && (
          <div className="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-neutral-100 sm:h-20 sm:w-32">
            <Image
              src={brand.image}
              alt={brand.imageAlt}
              width={brand.imageWidth}
              height={brand.imageHeight}
              sizes="128px"
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <h2 id={headingId} className="text-3xl sm:text-4xl font-bold font-serif">
          {brand.name}
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        {brand.categories.map((category) => (
          <CategoryBlock key={category.title ?? brand.id} category={category} />
        ))}
      </div>
    </section>
  );
}

function CategoryBlock({ category }) {
  return (
    <div>
      {category.title && (
        <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2">{category.title}</h3>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {category.products.map((product) => (
          <li key={product.name} className="border-b border-neutral-200 py-3">
            <ProductRow product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductRow({ product }) {
  const onlyVariant = product.variants.length === 1 ? product.variants[0] : null;
  const unsized = onlyVariant && !onlyVariant.size;

  if (unsized) {
    return (
      <div className="flex flex-col gap-1">
        <PriceLine label={product.name} price={onlyVariant.price} emphasizeLabel />
        {product.note && <p className="text-sm text-neutral-600">{product.note}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">{product.name}</p>
      {product.note && <p className="text-sm text-neutral-600">{product.note}</p>}
      <div className="mt-1 flex flex-col gap-1">
        {product.variants.map((variant) => (
          <PriceLine
            key={variant.size ?? variant.price}
            label={variant.size}
            price={variant.price}
          />
        ))}
      </div>
    </div>
  );
}

function PriceLine({ label, price, emphasizeLabel = false }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={emphasizeLabel ? "font-semibold" : undefined}>{label}</span>
      <span className="mb-1 h-3 flex-1 border-b border-dashed border-neutral-300" aria-hidden="true" />
      <span className="min-w-[5.5rem] whitespace-nowrap text-right font-semibold tabular-nums">
        {formatPrice(price)} kr.
      </span>
    </div>
  );
}
