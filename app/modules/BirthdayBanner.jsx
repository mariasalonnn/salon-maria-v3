import Image from "next/image";
import Link from "next/link";
import { Cake, ChevronDown } from "lucide-react";
import { extraChildrenDiscountText } from "@/app/data/birthday";
import { phone } from "@/app/data/site";

const illustrationAlt =
  "Børn med festfrisurer, tiara, glimmer og neglelak til en børnefødselsdag derhjemme";

export function BirthdayBanner() {
  return (
    <section className="px-4 md:px-6 pb-4 md:pb-8" aria-labelledby="boernefoedselsdag-toggle">
      <details className="group mx-auto max-w-screen-xl overflow-hidden rounded-md bg-[#FBF6F0] text-[#6E3E3A]">
        <summary
          id="boernefoedselsdag-toggle"
          className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-4 py-3 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D65A80] sm:px-5 [&::-webkit-details-marker]:hidden"
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDE8EF] text-[#D65A80]">
            <Cake className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-bold leading-tight sm:text-xl">Børnefødselsdag</span>
          <span className="rounded-full bg-[#FDE8EF] px-2 py-0.5 text-[10px] font-bold uppercase leading-none text-[#6E3E3A]">
            Ny
          </span>
          <ChevronDown
            className="ml-auto h-5 w-5 shrink-0 text-[#D65A80] transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="grid border-t border-[#F3E4DC] lg:grid-cols-2">
          <div className="relative h-52 sm:h-64 lg:h-auto lg:min-h-[22rem]">
            <Image
              src="/boernefoedselsdag-bg.webp"
              alt={illustrationAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-[78%_center] lg:object-center"
            />
          </div>
          <div className="flex flex-col gap-3 px-4 py-4 sm:px-6 sm:py-6">
            <p className="text-xs font-bold tracking-[0.16em] text-[#D65A80]">NYHED</p>
            <h2 id="boernefoedselsdag-banner" className="font-serif text-3xl font-bold leading-tight">
              Børnefødselsdag hjemme hos jer
            </h2>
            <p className="font-serif text-base font-medium leading-snug md:text-lg">
              En anderledes og særlig oplevelse – den bedste gave til jeres børn
            </p>
            <p className="text-base leading-snug md:text-lg">
              Hår, makeup og neglelak til hele festen – vi kommer til jer!
            </p>
            <p className="w-fit rounded-full border border-[#D65A80] bg-[#FDE8EF] px-3 py-1 text-sm font-semibold">
              3.995 kr. for 10 børn
            </p>
            <p className="text-base font-semibold">{extraChildrenDiscountText}</p>
            <p className="text-base">Rabatkort, gave og Polaroid-foto til hvert barn</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/boernefoedselsdag"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#B64C6D] px-4 py-2 font-semibold text-white"
              >
                Læs mere
              </Link>
              <Link
                href={`tel:${phone}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-[#D65A80] px-4 py-2 font-semibold text-[#6E3E3A]"
              >
                Ring og book
              </Link>
            </div>
          </div>
        </div>
      </details>
    </section>
  );
}
