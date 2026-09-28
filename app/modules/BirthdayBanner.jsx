import Image from "next/image";
import Link from "next/link";
import { phone } from "@/app/data/site";

const illustrationAlt =
  "Børn med festfrisurer, tiara, glimmer og neglelak til en børnefødselsdag derhjemme";

export function BirthdayBanner() {
  return (
    <section className="px-4 md:px-6 pb-4 md:pb-8" aria-labelledby="boernefoedselsdag-banner">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-md">
        <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[1280/720]">
          <Image
            src="/boernefoedselsdag-bg.webp"
            alt={illustrationAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover object-[78%_center] lg:object-center"
          />
        </div>
        <div className="flex flex-col gap-3 bg-[#FBF6F0] p-5 text-[#6E3E3A] sm:p-6 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/3 lg:justify-center lg:bg-transparent lg:p-6 xl:p-8">
          <p className="text-xs font-bold tracking-[0.16em] text-[#D65A80]">NYHED</p>
          <h2 id="boernefoedselsdag-banner" className="font-serif text-3xl font-bold leading-tight">
            Børnefødselsdag hjemme hos jer
          </h2>
          <p className="text-base leading-snug md:text-lg">
            Hår, makeup og neglelak til hele festen – vi kommer til jer!
          </p>
          <p className="w-fit rounded-full border border-[#D65A80] bg-[#FDE8EF] px-3 py-1 text-sm font-semibold">
            3.995 kr. for 10 børn
          </p>
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
    </section>
  );
}
