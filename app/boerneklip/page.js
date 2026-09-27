import { ServicePage } from "../modules/ServicePage";
import { prices } from "../data/prices";
import { pageMetadata } from "../data/site";

const path = "/boerneklip";

export const metadata = pageMetadata({
  path,
  title: "Børneklip i København NV | Salon Maria",
  description:
    "Børnefrisør på Frederiksborgvej i København NV. Sjove stole, legetøj og tv under klipningen og en lille gave til sidst. Book børneklip hos Salon Maria.",
});

const childItems = prices
  .find((category) => category.title === "Klip")
  .items.filter((item) => item.name.startsWith("Børn"));

export default function Boerneklip() {
  return (
    <ServicePage
      path={path}
      heading="Børneklip"
      intro="En tryg og sjov frisørtur for børn i en familievenlig salon i København NV."
      priceItems={childItems}
    >
      <p>
        Vi er stolte af at have åbnet Københavns første børnefrisør for over 10 år siden. Salonen
        er indrettet specielt til børn med inspiration fra engelske børnefrisører, og vi byder både
        børn og voksne velkommen i vores to forskellige lokaler.
      </p>
      <p>
        Under klipningen kan børnene sidde i en af vores sjove stole – en bil eller en scooter – og
        blive underholdt med legetøj og tv. Når klipningen er færdig, får de en lille gave med en
        slikkepind.
      </p>
      <p>
        Ari har over 12 års erfaring og er vores herre- og børnefrisør. Han klipper alle slags
        børnehår med tålmodighed og smil, og Maria er en erfaren voksen- og børnefrisør.
      </p>
    </ServicePage>
  );
}
