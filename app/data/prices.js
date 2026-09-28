export function formatPrice(price) {
  const format = (value) => Number(value).toLocaleString("da-DK");
  if (typeof price === "number") {
    return format(price);
  }
  if (typeof price === "string") {
    return price.replace(/\d{4,}/g, (digits) => format(digits));
  }
  return price;
}

export const prices = [
  {
    title: "Klip",
    items: [
      { name: "Pandehår", price: 100 },
      { name: "Dameklip uden vask", price: 360 },
      { name: "Dameklip m. vask og føn", price: 500 },
      { name: "Luksus dameklip (proteinkur + massage)", price: 550 },
      { name: "Luksus dameklip (Olaplex + føn)", price: 800 },
      { name: "Dameklip + Botox hår", price: 900 },
      { name: "Herreklip", price: 250 },
      { name: "Børn første klip", price: 350 },
      { name: "Børneklip (0-4 år)", price: 300 },
      { name: "Drengeklip (4-10 år)", price: 280 },
      { name: "Pigeklip (4-10 år)", price: 290 },
    ],
  },
  {
    title: "Farve",
    items: [
      { name: "Toning med farve", price: 200 },
      { name: "Bundfarve", price: 580 },
      { name: "Helfarvning - kort hår", price: 750 },
      { name: "Helfarvning - mellemlangt hår", price: 1150 },
      { name: "Helfarvning - langt hår", price: 1500 },
      { name: "Helfarvning - ekstra langt hår", price: 1600 },
      { name: "Striber - kort hår", price: 850 },
      { name: "Striber - mellemlangt hår", price: 1500 },
      { name: "Striber - langt hår", price: 1800 },
      { name: "Balayage & babylights", price: 2500 },
    ],
  },
  {
    title: "Bryn & Vipper",
    items: [
      { name: "Ret bryn", price: 150 },
      { name: "Farve bryn m. retning", price: 250 },
      { name: "Farve bryn + vipper m. retning", price: 300 },
    ],
  },
  {
    title: "Keratin og hårbehandlinger",
    items: [
      { name: "Olaplex standalone", price: "Fra 355" },
      { name: "Keratin behandling", price: "Fra 2300" },
      { name: "Botox hår", price: 750 },
      { name: "K18 kurbehandling", price: 450 },
    ],
  },
];
