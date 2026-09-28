import { ServicePage } from "../modules/ServicePage";
import { pageMetadata, phone } from "../data/site";

const path = "/boernefoedselsdag";

const description =
  "Maria kommer hjem til børnefødselsdagen med festfrisure, makeup og neglelak. 3.995 kr. for 10 børn. Ring og book hos Salon Maria.";

export const metadata = pageMetadata({
  path,
  title: "Børnefødselsdag hjemme – hår, makeup og neglelak | Salon Maria",
  description,
});

export default function Boernefoedselsdag() {
  return (
    <ServicePage
      path={path}
      heading="Børnefødselsdag med Salon Maria"
      intro="En særlig oplevelse, hvor Maria kommer hjem til jer."
      priceItems={[
        { name: "10 børn", price: 3995 },
        { name: "Ekstra barn", price: 350 },
      ]}
      priceNote="Gratis kørsel op til 10 km fra salonen. Længere afstand aftales. Depositum på 1.000 kr. ved booking trækkes fra prisen."
      primaryAction={{ href: `tel:${phone}`, label: "Ring og book fest" }}
      secondaryAction={null}
      showMembership={false}
    >
      <h2 className="text-2xl md:text-3xl font-bold font-serif">Prinsessefest hjemme</h2>
      <p>
        Maria pakker tasken og kommer hjem til familien. I omkring 3 timer gør hun børnene klar til
        festen. Der skal være mindst 10 børn.
      </p>
      <p>
        Hvert barn får en festlig frisure, for eksempel fletninger eller hårpynt, let børnemakeup
        eller glimmer, og neglelak. Fødselsdagsbarnet får en ekstra fin styling, for eksempel en
        tiara eller hårpynt.
      </p>
      <p>Hvert barn tager med hjem:</p>
      <ul className="list-[square] ml-5 flex flex-col gap-2">
        <li>et rabatkort på 10 % til næste klip hos Salon Maria</li>
        <li>en lille gave</li>
        <li>et gruppebillede taget med et Polaroid-kamera, ét print til hvert barn</li>
      </ul>
      <p>
        Prisen er 3.995 kr. for 10 børn og 350 kr. for hvert ekstra barn. Kørsel er gratis op til 10
        km fra salonen på Frederiksborgvej 202, 2400 København NV. Længere afstand aftaler vi, og der
        kan komme et ekstra transportgebyr.
      </p>
      <p>
        Festen bookes kun på telefon. Ved booking betales et depositum på 1.000 kr., som trækkes fra
        prisen.
      </p>
    </ServicePage>
  );
}
