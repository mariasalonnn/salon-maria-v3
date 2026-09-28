import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatPrice } from "@/app/data/prices";
import { bookingUrl, phone, phoneDisplay, servicePages } from "@/app/data/site";

export function ServicePage({
  path,
  heading,
  intro,
  children,
  priceItems = [],
  priceNote,
  primaryAction,
  secondaryAction,
  showMembership = true,
  hero,
}) {
  const related = servicePages.filter((page) => page.href !== path);
  const book = primaryAction ?? { href: bookingUrl, label: "Book tid" };
  const call =
    secondaryAction === undefined
      ? { href: `tel:${phone}`, label: `Ring ${phoneDisplay}` }
      : secondaryAction;
  return (
    <main>
      {hero}
      <section className="px-4 md:px-6 py-8 lg:py-[100px] text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
              {heading}
            </h1>
            <p className="italic text-lg">{intro}</p>
            <div className="flex flex-col gap-4 text-base md:text-lg">{children}</div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild variant="outline">
                <Link href={book.href}>{book.label}</Link>
              </Button>
              {call && (
                <Button asChild variant="text">
                  <Link href={call.href}>{call.label}</Link>
                </Button>
              )}
            </div>
            {showMembership && (
              <p className="rounded-md border-2 border-red px-4 py-3 text-base">
                <Link href="/abonnement" className="underline font-semibold">
                  Spar 15 % med et Salon Maria Club abonnement
                </Link>
              </p>
            )}
          </div>
          {priceItems.length > 0 && (
            <div className="lg:w-[420px] bg-white text-black rounded-md p-6 flex flex-col gap-4 self-start w-full">
              <h2 className="text-3xl font-bold font-serif">Priser</h2>
              <div className="flex flex-col gap-2">
                {priceItems.map((item, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div>{item.name}</div>
                    <div className="border-b border-dashed border-grey flex-1 mb-1.5 h-4"></div>
                    <span className="min-w-max">{formatPrice(item.price)} kr.</span>
                  </div>
                ))}
              </div>
              {priceNote && <p className="text-sm">{priceNote}</p>}
              <Link href="/#priser" className="underline font-semibold">
                Se alle priser
              </Link>
            </div>
          )}
        </div>
      </section>
      <section className="px-4 md:px-6 pb-10 lg:pb-[100px] text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4 border-t-2 border-red pt-8">
          <h2 className="text-2xl md:text-3xl font-bold font-serif">Se også</h2>
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8">
            {related.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="underline font-semibold inline-block py-2">
                  {page.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/galleri" className="underline font-semibold inline-block py-2">
                Galleri
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
