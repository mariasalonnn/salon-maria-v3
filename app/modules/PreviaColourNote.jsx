import Link from "next/link";

const text =
  "Vi tilbyder ammoniakfri og PPD-fri hårfarve fra Previa med certificerede økologiske olier – vegansk og skånsom mod hår og hovedbund. Spørg efter den, når du booker.";

export function PreviaColourNote({ band = false }) {
  const card = (
    <aside className="bg-[#f3f8f4] text-[#14241a] rounded-md border-t-4 border-red p-5 md:p-6 shadow-sm">
      <div className="flex gap-4 items-start">
        <span
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f6b3a] text-white"
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21C12 21 4 15.2 4 9.8C4 7.1 6.1 5 8.7 5C10.2 5 11.5 5.7 12 6.8C12.5 5.7 13.8 5 15.3 5C17.9 5 20 7.1 20 9.8C20 15.2 12 21 12 21Z"
              fill="currentColor"
            />
            <path d="M12 20V8" stroke="#f3f8f4" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        <div className="flex flex-col gap-2 min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold font-serif leading-snug">
            Skånsom farve uden ammoniak
          </h2>
          <p className="text-base md:text-lg leading-relaxed">{text}</p>
          {band && (
            <Link href="/farve-og-balayage" className="underline font-semibold w-fit">
              Se farve og balayage
            </Link>
          )}
        </div>
      </div>
    </aside>
  );

  if (!band) {
    return card;
  }

  return (
    <section className="px-4 md:px-6 pb-4 md:pb-8">
      <div className="max-w-screen-xl mx-auto">{card}</div>
    </section>
  );
}
