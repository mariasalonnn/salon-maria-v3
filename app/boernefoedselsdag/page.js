import Image from "next/image";
import { ServicePage } from "../modules/ServicePage";
import { extraChildrenDiscountText } from "../data/birthday";
import { pageMetadata, phone } from "../data/site";

const path = "/boernefoedselsdag";

const description =
  "En anderledes og særlig oplevelse – den bedste gave til jeres børn. Maria kommer hjem med hår, makeup og neglelak. 3.995 kr. for 10 børn.";

const shareAlt =
  "Børnefødselsdag hjemme hos jer – hår, makeup og neglelak, 3.995 kr. for 10 børn";

export const metadata = pageMetadata({
  path,
  title: "Børnefødselsdag hjemme – hår, makeup og neglelak | Salon Maria",
  description,
  image: {
    url: "/boernefoedselsdag-banner.jpg",
    width: 1280,
    height: 720,
    alt: shareAlt,
  },
});

export default function Boernefoedselsdag() {
  return (
    <ServicePage
      path={path}
      hero={
        <div className="px-4 md:px-6 pt-8">
          <div className="relative mx-auto w-full max-w-screen-xl overflow-hidden rounded-md">
            <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[1280/720]">
              <Image
                src="/boernefoedselsdag-bg.webp"
                alt="Børn med festfrisurer, tiara, glimmer og neglelak til en børnefødselsdag derhjemme"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[78%_center] lg:object-center"
              />
            </div>
            <p className="bg-[#FBF6F0] px-5 py-4 font-serif text-lg font-medium leading-snug text-[#6E3E3A] sm:px-6 sm:text-xl lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-1/3 lg:items-end lg:bg-transparent lg:px-8 lg:pb-10 lg:text-2xl">
              En anderledes og særlig oplevelse – den bedste gave til jeres børn
            </p>
          </div>
        </div>
      }
      heading="Børnefødselsdag med Salon Maria"
      intro="En særlig oplevelse, hvor Maria kommer hjem til jer."
      priceItems={[
        { name: "10 børn", price: 3995 },
        { name: "Ekstra barn", price: 350 },
      ]}
      priceNote={`${extraChildrenDiscountText} Gratis kørsel op til 10 km fra salonen. Længere afstand aftales. Depositum på 1.000 kr. ved booking trækkes fra prisen.`}
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
        Prisen er 3.995 kr. for 10 børn og 350 kr. for hvert ekstra barn. {extraChildrenDiscountText}{" "}
        Kørsel er gratis op til 10
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
