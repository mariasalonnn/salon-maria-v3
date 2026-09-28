"use client";

import Link from "next/link";
import { Hero } from "./Hero";
import { ClubBanner } from "./ClubBanner";
import { Hours } from "./Hours";
import { Info } from "./Info";
import { Prices } from "./Prices";
import Map from "./Map";

export function HomeClient() {
  return (
    <main>
      <Hero />
      <ClubBanner />
      <section className="px-4 md:px-6 pb-4 md:pb-8">
        <div className="max-w-screen-xl mx-auto bg-white text-black rounded-md border-t-4 border-red px-6 py-4">
          <Link href="/boernefoedselsdag" className="underline font-semibold">
            Nyhed: Børnefødselsdag hjemme hos jer
          </Link>
        </div>
      </section>
      <Info slides={slides} enableGSAP />
      <Hours />
      <Prices />
      <Info slides={products} />
      <Map />
    </main>
  );
}

const slides = [
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Om Maria
        </h2>
        <p>
          Jeg er Maria, med over 20 års erfaring inden for frisørfaget både nationalt og
          internationalt. Hos Salon Maria går vores fokus ud over blot at skabe pænt hår; vi lægger
          stor vægt på både din og dit hårs sundhed.
        </p>
      `,
    image: "/maria.webp",
    alt: "Frisør Maria",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Om Ari
        </h2>
        <p>
          Ari har arbejdet som frisør siden 2012 og er vores herre- og børnefrisør. Han er dedikeret til at
          klippe alle slags herre- og børnehår med tålmodighed og smil. Efter klipningen rådgiver
          han om de rigtige produkter for at opretholde resultatet derhjemme.
        </p>
      `,
    image: "/arash.webp",
    alt: "Frisør Ari",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Børnefrisør
        </h2>
        <p>
          Siden 2014 – Københavns første børnefrisør med sin egen børnevenlige indretning. Vores salon er
          designet specielt til børn med inspiration fra engelske børnefrisører. Maria, en erfaren
          voksen- og børnefrisør, byder både børn og voksne velkommen i vores to forskellige
          lokaler.
        </p>
        <br>
        <p class="font-semibold">Børnevenlige omgivelser:</p>
        <ul class="list-[square] ml-5 flex flex-col gap-2">
          <li>Sjove stole (en bil og en scooter)</li>
          <li>Legetøj og tv for at underholde under klipningen</li>
          <li>En lille gave med en slikkepind til børnene ved afslutningen</li>
        </ul>
      `,
    image: "/gallery/boerneklip1.webp",
    alt: "Børnefrisør",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Glade kunder
        </h2>
        <p>
          Vi har glade og tilfredse kunder, der sætter pris på vores behagelige salon og vores nøje
          udvalgte, naturlige hårprodukter. Besøg os for inspiration til en ny frisure eller for at
          se vores produktsortiment.
        </p>
      `,
    image: "/gallery/boerneklip6.webp",
    alt: "Pige med langt rødt hår og farvede hårextensions hos Salon Maria",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Bestil tid
        </h2>
        <p>
          Du kan allerede i dag bestille tid til vores salon via vores hjemmeside. Se vores ledige
          tider og book den tid, der passer dig bedst. Vi glæder os til at byde dig velkommen hos
          Salon Maria.
        </p>
        <a href="https://salon-maria.planway.com/" class="underline font-semibold">Book tid her</a>
      `,
    image: "/booking.webp",
    alt: "Telefon, der viser tidsbestilling hos Salon Maria",
  },
];

const products = [
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Previa Hair Care
        </h2>
        <p>
          Vi har valgt at samarbejde med Previa Hair Care på grund af deres 100% naturlige produkter
          og bæredygtige filosofi. Previa Hair Care er ikke bare organisk hårpleje, det er en
          holdning til at beskytte miljøet og vores naturlige ressourcer.
        </p>
        <p>
          Forkæl dit hår med vores pH Laboratories farver fra Previa. De er ammoniakfrie og
          indeholder argan og keratin for at give dig pålidelige og let anvendelige farver. Vores
          frisører skaber sunde, naturlige resultater med vitalitet og glans.
        </p>
      `,
    image: "/previa.webp",
    alt: "Previa Hair Care",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
        Wella Professionals
        </h2>
        <p>
        Wella Professionals er en serie af fantastiske hårplejeprodukter, der bringer håret tilbage i sin naturlige balance. Wella Professionals består af forskellige underserier, der matcher alle hårtyper og behov.
        </p>
      `,
    image: "/wella.webp",
    alt: "Wella Professionals",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Moroccanoil
        </h2>
        <p>
        Moroccanoil Treatment er mærkets signaturprodukt og har i mere end et årti været det perfekte fundament for hår hos millionvis af mennesker over hele verden.
        </p>
      `,
    image: "/moroccanoil.webp",
    alt: "Moroccanoil",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          pH Laboratories
        </h2>
        <p>
        pH Laboratories er et italiensk mærke som laver meget luksuriøse hårprodukter; både shampoo, conditioner, stylingprodukter m.m.
        </p>
        <p>
        Det er også et brand, jeg har arbejdet med, siden det kom til Danmark for nogle år siden. Og serien indeholder blandt andet nogle af de mest fugtgivende og blødgørende produkter jeg har stiftet bekendtskab med igennem min karriere.
        </p>
      `,
    image: "/ph.webp",
    alt: "pH Laboratories",
  },
];
