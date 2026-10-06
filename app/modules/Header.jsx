"use client";

import { DesktopNavigationMenu } from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";
import { servicePages } from "@/app/data/site";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function DesktopHeader() {
  return (
    <header className="hidden lg:block h-14 sticky top-0 z-20 bg-grey p-2 md:px-6 text-white">
      <nav className="max-w-screen-xl flex w-full justify-between items-center mx-auto">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.webp"
            width={533}
            height={101}
            alt="Salon Maria – til forsiden"
            priority
            sizes="200px"
            className="h-10 w-auto"
          />
        </Link>
        <DesktopNavigationMenu />
      </nav>
    </header>
  );
}

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="lg:hidden h-14 sticky top-0 z-30 bg-grey py-2 px-4 md:px-6 text-white">
        <nav className="max-w-screen-xl flex w-full justify-between items-center mx-auto">
          <Link href="/">
            <Image
              src="/logo.webp"
              width={533}
              height={101}
              alt="Salon Maria – til forsiden"
              priority
              sizes="200px"
              className="h-10 w-auto"
            />
          </Link>
          <button className="text-2xl" aria-label="Mobile navigation menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>
      {isOpen && <MobileNavigationMenu setIsOpen={setIsOpen} />}
    </>
  );
}

function MobileNavigationMenu({ setIsOpen }) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <nav className="lg:hidden bg-grey px-4 pt-20 pb-10 text-white fixed inset-0 z-20 flex flex-col gap-6 text-3xl items-center overflow-y-auto">
      <Link
        onClick={() => setIsOpen(false)}
        href="/boernefoedselsdag"
        className="inline-flex items-center gap-3 font-semibold text-[#D65A80]"
      >
        Børnefødselsdag
        <span className="rounded-full bg-[#FDE8EF] px-2 py-0.5 text-sm font-bold uppercase leading-none text-[#6E3E3A]">
          Ny
        </span>
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/#priser">
        Priser
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/produkter">
        Produkter
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/galleri">
        Galleri
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/abonnement">
        Abonnement
      </Link>
      <div className="flex flex-col items-center gap-3 text-xl">
        <p className="font-semibold">Behandlinger</p>
        {servicePages
          .filter((page) => page.href !== "/boernefoedselsdag")
          .map((page) => (
          <Link key={page.href} onClick={() => setIsOpen(false)} href={page.href}>
            {page.title}
          </Link>
        ))}
      </div>
      <Button variant="text" asChild className="text-3xl after:bottom-[6px] py-0">
        <Link href="https://salon-maria.planway.com/">Book tid</Link>
      </Button>
    </nav>
  );
}
