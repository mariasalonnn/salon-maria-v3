import { ServicePage } from "../modules/ServicePage";
import { formatPrice, priceByName } from "../data/prices";
import { pageMetadata } from "../data/site";

const path = "/keratin-og-haarbehandlinger";
const keratinFrom = formatPrice(priceByName("Keratin behandling"));

export const metadata = pageMetadata({
  path,
  title: "Keratinbehandling og hårkure i København NV | Salon Maria",
  description: `Keratinbehandling fra ${keratinFrom} kr. samt Olaplex, K18 og Botox hår hos Salon Maria, frisør i København NV. Se priser og book tid online.`,
});

const treatmentItems = [
  { name: "Keratin, kort hår", price: 2300 },
  { name: "Keratin, skulderlængde", price: 2800 },
  { name: "Keratin, fra skulder og ned", price: 3500 },
  { name: "Protein behandling, kort hår", price: 2500 },
  { name: "Protein behandling, skulderlængde", price: 3000 },
  { name: "Protein behandling, fra skulder og ned", price: 3500 },
  { name: "Botox kur", price: 750 },
  { name: "Botox Filler", price: 1495 },
  { name: "Dameklip + Botox hår", price: 900 },
  { name: "K18 kurbehandling", price: 450 },
  { name: "K18 Detox behandling", price: 450 },
  { name: "Olaplex, kort hår", price: 355 },
  { name: "Olaplex, mellem inkl. føn", price: 400 },
  { name: "Olaplex, langt hår inkl. føn", price: 550 },
  { name: "Capillary behandling", price: 1000 },
];

export default function KeratinOgHaarbehandlinger() {
  return (
    <ServicePage
      path={path}
      heading="Keratinbehandling og hårkure i København NV"
      intro="Hårbehandlinger hos Salon Maria i København NV."
      priceItems={treatmentItems}
    >
      <p>
        Keratinbehandlingen er formaldehydfri. Den glatter håret, styrker det med et ekstra lag
        keratin og får det til at se glattere, sundere og stærkere ud. Den holder ca. 5-7 måneder.
        Behandlingen inkluderer kur, vask, føn og styling, og konsultationen før keratin er gratis.
      </p>
      <p>
        Proteinbehandling er en udglattende behandling. Hair Botox er en dybdegående behandling, der
        hjælper med at reparere tørt og beskadiget hår.
      </p>
      <p>
        K18 dybtrenser og fugter hår og hovedbund og er fri for sulfater, parabener, phthalater og
        silikoner. Olaplex reparerer skadet hår. Capillary behandling er en dyb hårkur til tørt,
        slidt eller kemisk skadet hår.
      </p>
    </ServicePage>
  );
}
