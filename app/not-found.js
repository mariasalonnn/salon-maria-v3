import Link from "next/link";

export const metadata = {
  title: "Siden findes ikke | Salon Maria",
  description:
    "Siden findes ikke. Gå til forsiden, se priser eller book tid hos Salon Maria i København NV.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="px-4 md:px-6 py-16 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6 items-start">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif">Siden findes ikke</h1>
        <p className="text-lg">Vi kan ikke finde den side, du leder efter.</p>
        <nav className="flex flex-col gap-3 text-lg">
          <Link href="/" className="underline font-semibold">
            Forside
          </Link>
          <Link href="/#priser" className="underline font-semibold">
            Priser
          </Link>
          <Link href="/produkter" className="underline font-semibold">
            Produkter
          </Link>
          <Link href="https://salon-maria.planway.com/" className="underline font-semibold">
            Book tid
          </Link>
        </nav>
      </div>
    </main>
  );
}
