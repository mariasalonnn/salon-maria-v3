import { ServicePage } from "../modules/ServicePage";
import { formatPrice, lowestMatchingPrice, prices } from "../data/prices";
import { pageMetadata } from "../data/site";

const path = "/dameklip";
const dameFrom = formatPrice(
  lowestMatchingPrice("Klip", (item) => item.name.toLowerCase().includes("dame"))
);

export const metadata = pageMetadata({
  path,
  title: "Dameklip i København NV | Salon Maria",
  description: `Dameklip fra ${dameFrom} kr. hos Salon Maria på Frederiksborgvej i København NV. Maria har over 20 års erfaring og fokus på hårets sundhed. Book tid online.`,
});

const womenItems = prices
  .find((category) => category.title === "Klip")
  .items.filter((item) => item.name.toLowerCase().includes("dame"));

export default function Dameklip() {
  return (
    <ServicePage
      path={path}
      heading="Dameklip i København NV"
      intro="Dameklip i en familievenlig frisørsalon i København NV."
      priceItems={womenItems}
      priceNote="Studierabat / pensionistrabat: -10 %. Du kan betale med kort, kontant og MobilePay."
    >
      <p>
        Maria har over 20 års erfaring inden for frisørfaget både nationalt og internationalt. Hos
        Salon Maria går vores fokus ud over blot at skabe pænt hår – vi lægger stor vægt på både din
        og dit hårs sundhed.
      </p>
      <p>
        Vi arbejder med nøje udvalgte, naturlige og bæredygtige hårprodukter. Salonen er
        indbydende og familievenlig for både børn og voksne.
      </p>
      <p>
        Maria er en erfaren voksen- og børnefrisør. Studerende og pensionister får 10 % rabat.
      </p>
    </ServicePage>
  );
}
