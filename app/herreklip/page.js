import Link from "next/link";
import { ServicePage } from "../modules/ServicePage";
import { prices } from "../data/prices";
import { pageMetadata } from "../data/site";

const path = "/herreklip";

export const metadata = pageMetadata({
  path,
  title: "Herreklip i København NV | Salon Maria",
  description:
    "Herreklip hos Salon Maria på Frederiksborgvej i København NV. Erfaren herrefrisør, rådgivning om produkter og 10 % studie- og pensionistrabat.",
});

const menItems = prices
  .find((category) => category.title === "Klip")
  .items.filter((item) => item.name === "Herreklip");

export default function Herreklip() {
  return (
    <ServicePage
      path={path}
      heading="Herreklip"
      intro="Herreklip i en indbydende og familievenlig frisørsalon i København NV."
      priceItems={menItems}
      priceNote="Studierabat / pensionistrabat: -10 %. Du kan betale med kort, kontant og MobilePay."
    >
      <p>
        Ari har arbejdet som frisør siden 2012 og er vores herre- og børnefrisør. Han er dedikeret til at
        klippe alle slags herrehår med tålmodighed og smil.
      </p>
      <p>
        Efter klipningen rådgiver han om de rigtige produkter, så du kan holde på resultatet
        derhjemme. Vi arbejder med nøje udvalgte, naturlige og bæredygtige hårprodukter.
      </p>
      <p>
        Tager du børnene med, kan de også blive klippet hos os – se mere om{" "}
        <Link href="/boerneklip" className="underline font-semibold">
          børneklip
        </Link>
        .
      </p>
    </ServicePage>
  );
}
