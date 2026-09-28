import Link from "next/link";
import { Button } from "@/components/ui/button";

const signupUrl = "https://salon-maria.planway.com/widget/buy_membership";

export function ClubBanner() {
  return (
    <section className="px-4 md:px-6 pb-4 md:pb-8">
      <div className="max-w-screen-xl mx-auto bg-white text-black rounded-md border-t-4 border-red p-6 md:p-8 flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif">Nyhed: Salon Maria Club</h2>
        <p className="text-base md:text-lg max-w-3xl">
          Spar 15 % på behandlinger hele året og få en valgfri behandling op til 500 kr. Fra 599 kr.
          om året.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="outline" className="border-black text-black w-full sm:w-auto">
            <Link href="/abonnement">Se abonnementer</Link>
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <a href={signupUrl} target="_blank" rel="noopener noreferrer">
              Køb abonnement
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
