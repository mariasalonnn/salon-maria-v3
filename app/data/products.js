// Retail price list. Sizes and prices follow the salon's printed lists.
// A missing size means the sheet did not print one (Purifying Scrub).

export const productBrands = [
  {
    id: "moroccanoil",
    name: "Moroccanoil",
    brandName: "Moroccanoil",
    image: "/moroccanoil.webp",
    imageAlt: "Moroccanoil Treatment",
    imageWidth: 1440,
    imageHeight: 645,
    categories: [
      {
        title: "Treatment",
        products: [
          {
            name: "Treatment Regular/Light",
            variants: [
              { size: "25 ml", price: 139 },
              { size: "50 ml", price: 289 },
              { size: "100 ml", price: 389 },
            ],
          },
          {
            name: "Treatment Purple",
            variants: [
              { size: "25 ml", price: 159 },
              { size: "50 ml", price: 299 },
            ],
          },
        ],
      },
      {
        title: "Shampoo og balsam",
        products: [
          {
            name: "Shampoo",
            variants: [
              { size: "70 ml", price: 109 },
              { size: "250 ml", price: 229 },
            ],
          },
          {
            name: "Conditioner",
            variants: [
              { size: "70 ml", price: 109 },
              { size: "250 ml", price: 229 },
            ],
          },
        ],
      },
      {
        title: "Masker og hovedbund",
        products: [
          {
            name: "Intense Hydrating Mask",
            variants: [
              { size: "75 ml", price: 149 },
              { size: "250 ml", price: 319 },
            ],
          },
          {
            name: "Weightless Mask",
            variants: [
              { size: "75 ml", price: 159 },
              { size: "250 ml", price: 379 },
            ],
          },
          {
            name: "Restorative Mask",
            variants: [
              { size: "75 ml", price: 159 },
              { size: "250 ml", price: 379 },
            ],
          },
          {
            name: "Color Depositing Masks",
            variants: [
              { size: "30 ml", price: 69 },
              { size: "200 ml", price: 259 },
            ],
          },
          {
            name: "Scalp Oily/Dry Treatment",
            variants: [{ size: "45 ml", price: 269 }],
          },
        ],
      },
      {
        title: "Cremer og mousse",
        products: [
          {
            name: "Hydrating Cream",
            variants: [
              { size: "75 ml", price: 139 },
              { size: "300 ml", price: 309 },
            ],
          },
          {
            name: "Curl Cream",
            variants: [
              { size: "75 ml", price: 139 },
              { size: "300 ml", price: 309 },
            ],
          },
          {
            name: "Curl Defining Cream",
            variants: [
              { size: "75 ml", price: 139 },
              { size: "250 ml", price: 309 },
            ],
          },
          {
            name: "Molding Cream",
            variants: [{ size: "100 ml", price: 249 }],
          },
          {
            name: "Texture Clay",
            variants: [{ size: "75 ml", price: 249 }],
          },
          {
            name: "Thickening Lotion",
            variants: [{ size: "100 ml", price: 279 }],
          },
          {
            name: "Mending Infusion",
            variants: [{ size: "75 ml", price: 279 }],
          },
          {
            name: "Intense Smoothing Serum",
            variants: [{ size: "50 ml", price: 279 }],
          },
          {
            name: "Curl Control Mousse",
            variants: [{ size: "150 ml", price: 229 }],
          },
          {
            name: "Volume Mousse",
            variants: [{ size: "250 ml", price: 279 }],
          },
          {
            name: "Purifying Scrub",
            variants: [{ price: 299 }],
          },
        ],
      },
      {
        title: "Sprays",
        products: [
          {
            name: "Luminous Hairspray",
            note: "Medium, Strong og Extra Strong. Samme pris.",
            variants: [
              { size: "75 ml", price: 109 },
              { size: "330 ml", price: 219 },
            ],
          },
          {
            name: "Root Boost",
            variants: [
              { size: "75 ml", price: 119 },
              { size: "250 ml", price: 259 },
            ],
          },
          {
            name: "Texture Spray",
            variants: [
              { size: "60 ml", price: 119 },
              { size: "205 ml", price: 259 },
            ],
          },
          {
            name: "Dry Shampoo",
            variants: [
              { size: "65 ml", price: 109 },
              { size: "217 ml", price: 229 },
            ],
          },
          {
            name: "Perfect Defense",
            variants: [
              { size: "75 ml", price: 149 },
              { size: "225 ml", price: 269 },
            ],
          },
          {
            name: "Volumizing Mist",
            variants: [
              { size: "50 ml", price: 119 },
              { size: "160 ml", price: 259 },
            ],
          },
          {
            name: "Frizz Shield Spray",
            variants: [
              { size: "50 ml", price: 119 },
              { size: "160 ml", price: 259 },
            ],
          },
          {
            name: "Leave-in Conditioner",
            variants: [
              { size: "50 ml", price: 119 },
              { size: "160 ml", price: 259 },
            ],
          },
          {
            name: "Protect & Prevent",
            variants: [{ size: "160 ml", price: 259 }],
          },
          {
            name: "Revitalizing Scalp Tonic",
            variants: [{ size: "100 ml", price: 349 }],
          },
          {
            name: "Glimmer Shine Spray",
            variants: [{ size: "100 ml", price: 249 }],
          },
        ],
      },
    ],
  },
  {
    id: "wella-ultimate-repair",
    name: "Wella Ultimate Repair",
    brandName: "Wella Professionals",
    image: "/wella.webp",
    imageAlt: "Wella Professionals",
    imageWidth: 1300,
    imageHeight: 1300,
    categories: [
      {
        products: [
          {
            name: "Shampoo",
            variants: [
              { size: "50 ml", price: 75 },
              { size: "250 ml", price: 235 },
            ],
          },
          {
            name: "Conditioner",
            variants: [
              { size: "30 ml", price: 85 },
              { size: "200 ml", price: 255 },
            ],
          },
          {
            name: "Mask",
            variants: [
              { size: "30 ml", price: 95 },
              { size: "150 ml", price: 299 },
            ],
          },
          {
            name: "Miracle Hair Rescue",
            variants: [
              { size: "30 ml", price: 275 },
              { size: "95 ml", price: 615 },
            ],
          },
          {
            name: "Protective Leave-in",
            variants: [{ size: "140 ml", price: 275 }],
          },
          {
            name: "Night Hair Serum",
            variants: [
              { size: "30 ml", price: 195 },
              { size: "95 ml", price: 429 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "wella-ultimate-color",
    name: "Wella Ultimate Color",
    brandName: "Wella Professionals",
    categories: [
      {
        products: [
          {
            name: "Shampoo",
            variants: [
              { size: "50 ml", price: 75 },
              { size: "250 ml", price: 235 },
            ],
          },
          {
            name: "Conditioner",
            variants: [
              { size: "30 ml", price: 95 },
              { size: "200 ml", price: 255 },
            ],
          },
          {
            name: "Mask",
            variants: [
              { size: "30 ml", price: 189 },
              { size: "95 ml", price: 409 },
            ],
          },
          {
            name: "Shine Spray",
            variants: [{ size: "95 ml", price: 255 }],
          },
        ],
      },
    ],
  },
  {
    id: "wella-ultimate-smooth",
    name: "Wella Ultimate Smooth",
    brandName: "Wella Professionals",
    categories: [
      {
        products: [
          {
            name: "Shampoo",
            variants: [
              { size: "50 ml", price: 75 },
              { size: "250 ml", price: 235 },
            ],
          },
          {
            name: "Conditioner",
            variants: [{ size: "200 ml", price: 255 }],
          },
          {
            name: "Mask",
            variants: [
              { size: "30 ml", price: 95 },
              { size: "150 ml", price: 299 },
            ],
          },
          {
            name: "Miracle Oil Serum",
            variants: [
              { size: "30 ml", price: 179 },
              { size: "100 ml", price: 399 },
            ],
          },
        ],
      },
    ],
  },
];
