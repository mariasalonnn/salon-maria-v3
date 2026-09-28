import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bookingUrl, pageMetadata, phone } from "../data/site";

const path = "/abonnement";
const membershipSignupUrl = "https://salon-maria.planway.com/widget/buy_membership";

export const metadata = pageMetadata({
  path,
  title: "Salon Maria Club – abonnement | Salon Maria",
  description:
    "Salon Maria Club abonnement hos Salon Maria i København NV: Maria Familie's Club, Maria Women's Club og Maria Men's Club. Køb abonnement online eller ring til salonen.",
});

const memberships = [
  {
    name: "Maria Familie's Club",
    price: "1.499 kr./år",
    benefits: [
      "Gælder for 2 voksne og hjemmeboende børn under 18 år",
      "15 % rabat på alle behandlinger",
      "15 % rabat på alle hårprodukter",
      "En valgfri behandling til en værdi af op til 500 kr. om året",
      "Særlige medlemstilbud",
      "Prioritet ved tidsbestilling",
    ],
  },
  {
    name: "Maria Women's Club",
    price: "999 kr./år",
    benefits: [
      "15 % rabat på damebehandlinger",
      "15 % rabat på Keratin, Protein og Hair Botox",
      "15 % rabat på hårprodukter",
      "En valgfri behandling til en værdi af op til 500 kr. i fødselsdagsmåneden",
      "Særlige medlemstilbud",
      "Prioritet ved tidsbestilling",
    ],
  },
  {
    name: "Maria Men's Club",
    price: "599 kr./år",
    benefits: [
      "15 % rabat på alle herrebehandlinger",
      "15 % rabat på hårprodukter",
      "En valgfri behandling til en værdi af op til 500 kr. i fødselsdagsmåneden",
      "Særlige medlemstilbud",
      "Prioritet ved tidsbestilling",
    ],
  },
];

export default function Abonnement() {
  return (
    <main>
      <section className="px-4 md:px-6 py-8 lg:py-[100px] text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif max-w-4xl">
            Salon Maria Club – abonnement
          </h1>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {memberships.map((membership) => (
              <li
                key={membership.name}
                className="bg-white text-black rounded-md p-6 flex flex-col gap-4"
              >
                <h2 className="text-3xl font-bold font-serif">{membership.name}</h2>
                <p className="text-2xl font-serif">{membership.price}</p>
                <ul className="list-[square] ml-5 flex flex-col gap-2 flex-1">
                  {membership.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <a
                    href={membershipSignupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Køb abonnement, ${membership.name}`}
                  >
                    Køb abonnement
                  </a>
                </Button>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg max-w-3xl">
            Køb dit abonnement online via vores bookingsystem, ring til os på{" "}
            <a href={`tel:${phone}`} className="underline font-semibold">
              39 56 16 66
            </a>{" "}
            eller spørg ved dit næste besøg i salonen.
          </p>
          <div>
            <Button asChild variant="outline">
              <Link href={bookingUrl}>Book tid</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
