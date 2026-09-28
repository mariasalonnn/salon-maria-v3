import { ServicePage } from "../modules/ServicePage";
import { prices } from "../data/prices";
import { pageMetadata } from "../data/site";

const path = "/farve-og-balayage";

export const metadata = pageMetadata({
  path,
  title: "Farve og balayage i København NV | Salon Maria",
  description:
    "Hårfarve, striber og balayage hos Salon Maria i København NV. Vi bruger ammoniakfrie farver fra pH Laboratories med argan og keratin.",
});

const colourItems = prices.find((category) => category.title === "Farve").items;

export default function FarveOgBalayage() {
  return (
    <ServicePage
      path={path}
      heading="Farve og balayage"
      intro="Hårfarve, striber og balayage med fokus på sunde, naturlige resultater."
      priceItems={colourItems}
      priceNote="Studierabat / pensionistrabat: -10 %."
    >
      <p>
        Maria har over 20 års erfaring inden for frisørfaget både nationalt og internationalt. Hos
        Salon Maria går vores fokus ud over blot at skabe pænt hår – vi lægger stor vægt på både din
        og dit hårs sundhed.
      </p>
      <p>
        Vi farver med pH Laboratories farver fra Previa. De er ammoniakfrie og indeholder argan og
        keratin, så vi kan skabe sunde, naturlige resultater med vitalitet og glans.
      </p>
      <p>
        Uanset om du ønsker toning, bundfarve, helfarvning, striber eller balayage og babylights,
        finder vi sammen den løsning, der passer til dit hår. Vi tilbyder også kurbehandlinger som
        Olaplex og K18.
      </p>
    </ServicePage>
  );
}
