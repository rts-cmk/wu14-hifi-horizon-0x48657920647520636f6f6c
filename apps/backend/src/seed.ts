import db from "./db/index.js";
import type { fullProduct, productInsert, variant } from "./db/schema.js";
import {
  productCategoryTable,
  productTable,
  productVariantTable,
} from "./db/schema.js";

const items: fullProduct = [
  {
    id: 1,
    name: "creek_classic_cd",
    summery: "Classic CD player from Creek Audio",
    description:
      "High-quality CD player with excellent sound reproduction and build quality",
    price: 150,
    categoryId: 1,
    variants: [
      {
        id: 1,
        name: "creek_classic_cd",
        imageURL: "creek_classic_cd.jpg",
        productId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "creek_destiny_cd",
    summery: "creek_destiny_cd",
    description: "Premium CD player with advanced digital processing",
    price: 299,
    categoryId: 1,
    variants: [
      {
        id: 2,
        name: "creek_destiny_cd",
        imageURL: "creek_Destiny_CD.jpg",
        productId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "creek_evo_cd",
    summery: "creek_evo_cd",
    description: "Modern CD player with updated technology",
    price: 199,
    categoryId: 1,
    variants: [
      {
        id: 3,
        name: "creek_evo_cd",
        imageURL: "creek_evo_cd.jpg",
        productId: 3,
      },
    ],
  },
  {
    id: 4,
    name: "exp_2010s_cd",
    summery: "exp_2010s_cd",
    description: "High-end CD player with exceptional performance",
    price: 599,
    categoryId: 1,
    variants: [
      {
        id: 4,
        name: "exp_2010s_cd",
        imageURL: "Exp_2010S_CD.gif",
        productId: 4,
      },
    ],
  },
  {
    id: 5,
    name: "creek_classic_amp",
    summery: "creek_classic_amp",
    description: "Classic integrated amplifier from Creek Audio",
    price: 399,
    categoryId: 2,
    variants: [
      {
        id: 5,
        name: "creek_classic_amp",
        imageURL: "creek_classic.jpg",
        productId: 5,
      },
    ],
  },
  {
    id: 6,
    name: "exposure_2010s_amp",
    summery: "exposure_2010s_amp",
    description: "Premium integrated amplifier with excellent sound quality",
    price: 799,
    categoryId: 2,
    variants: [
      {
        id: 6,
        name: "exposure_2010s_amp",
        imageURL: "exposure_2010S.jpg",
        productId: 6,
      },
    ],
  },
  {
    id: 7,
    name: "parasound_d200",
    summery: "parasound_d200",
    description: "High-performance power amplifier",
    price: 1299,
    categoryId: 2,
    variants: [
      {
        id: 7,
        name: "parasound_d200",
        imageURL: "parasound_d200.jpg",
        productId: 7,
      },
    ],
  },
  {
    id: 8,
    name: "parasound_halod3",
    summery: "parasound_halod3",
    description: "Premium DAC and preamplifier combo",
    price: 2499,
    categoryId: 3,
    variants: [
      {
        id: 8,
        name: "parasound_halod3",
        imageURL: "parasound_halod3.jpg",
        productId: 8,
      },
    ],
  },
  {
    id: 9,
    name: "manley_mahi",
    summery: "manley_mahi",
    description: "Tube power amplifier with warm sound signature",
    price: 3499,
    categoryId: 2,
    variants: [
      {
        id: 9,
        name: "manley_mahi",
        imageURL: "manley_mahi.jpg",
        productId: 9,
      },
    ],
  },
  {
    id: 10,
    name: "manley_neoclassic300b",
    summery: "manley_neoclassic300b",
    description: "Luxury 300B tube amplifier",
    price: 8999,
    categoryId: 2,
    variants: [
      {
        id: 10,
        name: "manley_neoclassic300b",
        imageURL: "manley_neoclassic300b.jpg",
        productId: 10,
      },
    ],
  },
  {
    id: 11,
    name: "manley_snapper",
    summery: "manley_snapper",
    description: "Compact tube amplifier with excellent dynamics",
    price: 1999,
    categoryId: 2,
    variants: [
      {
        id: 11,
        name: "manley_snapper",
        imageURL: "manley_snapper.jpg",
        productId: 11,
      },
    ],
  },
  {
    id: 12,
    name: "parasound_haloa23",
    summery: "parasound_haloa23",
    description: "High-end power amplifier with exceptional clarity",
    price: 2999,
    categoryId: 2,
    variants: [
      {
        id: 12,
        name: "parasound_haloa23",
        imageURL: "parasound_haloa23.jpg",
        productId: 12,
      },
    ],
  },
  {
    id: 13,
    name: "creek_obh_22_passive_preamp",
    summery: "creek_obh_22_passive_preamp",
    description: "Passive preamplifier with transparent sound",
    price: 299,
    categoryId: 3,
    variants: [
      {
        id: 13,
        name: "creek_obh_22_passive_preamp",
        imageURL: "Creek_OBH_22_Passive_Preamp.jpg",
        productId: 13,
      },
    ],
  },
  {
    id: 14,
    name: "parasound_classic7100",
    summery: "parasound_classic7100",
    description: "Classic preamplifier with warm sound",
    price: 899,
    categoryId: 3,
    variants: [
      {
        id: 14,
        name: "parasound_classic7100",
        imageURL: "parasound_classic7100.jpg",
        productId: 14,
      },
    ],
  },
  {
    id: 15,
    name: "parasound_halop3",
    summery: "parasound_halop3",
    description: "Premium phono preamplifier for vinyl lovers",
    price: 1199,
    categoryId: 3,
    variants: [
      {
        id: 15,
        name: "parasound_halop3",
        imageURL: "parasound_halop3.jpg",
        productId: 15,
      },
    ],
  },
  {
    id: 16,
    name: "project_prebox",
    summery: "project_prebox",
    description: "Compact preamplifier with excellent value",
    price: 499,
    categoryId: 3,
    variants: [
      {
        id: 16,
        name: "project_prebox",
        imageURL: "Project_prebox.jpg",
        productId: 16,
      },
    ],
  },
  {
    id: 17,
    name: "boesendorfer_vcs_wall",
    summery: "boesendorfer_vcs_wall",
    description: "Premium wall-mounted speaker system",
    price: 4999,
    categoryId: 4,
    variants: [
      {
        id: 17,
        name: "boesendorfer_vcs_wall",
        imageURL: "boesendorfer_vcs_wall.gif",
        productId: 17,
      },
    ],
  },
  {
    id: 18,
    name: "epos_m5",
    summery: "epos_m5",
    description: "Compact bookshelf speakers with detailed sound",
    price: 799,
    categoryId: 4,
    variants: [
      {
        id: 18,
        name: "epos_m5",
        imageURL: "epos_m5.gif",
        productId: 18,
      },
    ],
  },
  {
    id: 19,
    name: "harbeth_hl7es2",
    summery: "harbeth_hl7es2",
    description: "Premium bookshelf speakers with natural sound",
    price: 2499,
    categoryId: 4,
    variants: [
      {
        id: 19,
        name: "harbeth_hl7es2",
        imageURL: "harbeth_hl7es2.jpg",
        productId: 19,
      },
    ],
  },
  {
    id: 20,
    name: "harbeth_monitor30",
    summery: "harbeth_monitor30",
    description: "Professional studio monitors with accurate sound",
    price: 3499,
    categoryId: 4,
    variants: [
      {
        id: 20,
        name: "harbeth_monitor30",
        imageURL: "harbeth_monitor30.jpg",
        productId: 20,
      },
    ],
  },
  {
    id: 21,
    name: "harbeth_p3es2",
    summery: "harbeth_p3es2",
    description: "Compact speakers with exceptional sound quality",
    price: 1899,
    categoryId: 4,
    variants: [
      {
        id: 21,
        name: "harbeth_p3es2",
        imageURL: "harbeth_p3es2.jpg",
        productId: 21,
      },
    ],
  },
  {
    id: 22,
    name: "creek_a50i",
    summery: "creek_a50i",
    description: "Integrated amplifier with built-in DAC",
    price: 899,
    categoryId: 2,
    variants: [
      {
        id: 22,
        name: "creek_a50i",
        imageURL: "creek_a50I.jpg",
        productId: 22,
      },
    ],
  },
  {
    id: 23,
    name: "creek_classic5350se",
    summery: "creek_classic5350se",
    description: "Special edition integrated amplifier",
    price: 1299,
    categoryId: 2,
    variants: [
      {
        id: 23,
        name: "creek_classic5350se",
        imageURL: "creek_classic5350SE.jpg",
        productId: 23,
      },
    ],
  },
  {
    id: 24,
    name: "creek_destiny_amp",
    summery: "creek_destiny_amp",
    description: "High-end integrated amplifier with premium components",
    price: 2499,
    categoryId: 2,
    variants: [
      {
        id: 24,
        name: "creek_destiny_amp",
        imageURL: "creek_destinyamp.jpg",
        productId: 24,
      },
    ],
  },
  {
    id: 25,
    name: "manley_stingray",
    summery: "manley_stingray",
    description: "Iconic tube integrated amplifier",
    price: 4499,
    categoryId: 2,
    variants: [
      {
        id: 25,
        name: "manley_stingray",
        imageURL: "Manley_Stingray.jpg",
        productId: 25,
      },
    ],
  },
  {
    id: 26,
    name: "project_debut_iii_blue",
    summery: "project_debut_iii_blue",
    description: "Entry-level turntable with blue finish",
    price: 399,
    categoryId: 5,
    variants: [
      {
        id: 26,
        name: "project_debut_iii_blue",
        imageURL: "Pro_ject_Debut_III_blue.jpg",
        productId: 26,
      },
    ],
  },
  {
    id: 27,
    name: "project_debut_iii_red",
    summery: "project_debut_iii_red",
    description: "Entry-level turntable with red finish",
    price: 399,
    categoryId: 5,
    variants: [
      {
        id: 27,
        name: "project_debut_iii_red",
        imageURL: "Pro_ject_Debut_III_red.jpg",
        productId: 27,
      },
    ],
  },
  {
    id: 28,
    name: "project_debut_iii_yellow",
    summery: "project_debut_iii_yellow",
    description: "Entry-level turntable with yellow finish",
    price: 399,
    categoryId: 5,
    variants: [
      {
        id: 28,
        name: "project_debut_iii_yellow",
        imageURL: "Pro_ject_Debut_III_yellow.jpg",
        productId: 28,
      },
    ],
  },
  {
    id: 29,
    name: "project_rpm10",
    summery: "project_rpm10",
    description: "High-end turntable with advanced features",
    price: 2999,
    categoryId: 5,
    variants: [
      {
        id: 29,
        name: "project_rpm10",
        imageURL: "Pro_ject_rpm10.jpg",
        productId: 29,
      },
    ],
  },
  {
    id: 30,
    name: "project_rpm5",
    summery: "project_rpm5",
    description: "Mid-range turntable with excellent performance",
    price: 999,
    categoryId: 5,
    variants: [
      {
        id: 30,
        name: "project_rpm5",
        imageURL: "Pro_ject_rpm_5.jpg",
        productId: 30,
      },
    ],
  },
  {
    id: 31,
    name: "jolida_jd102b",
    summery: "jolida_jd102b",
    description: "Hybrid integrated amplifier with tube preamp",
    price: 699,
    categoryId: 2,
    variants: [
      {
        id: 31,
        name: "jolida_jd102b",
        imageURL: "jolida_JD102b.jpg",
        productId: 31,
      },
    ],
  },
  {
    id: 32,
    name: "jolida_jd202a",
    summery: "jolida_jd202a",
    description: "Tube integrated amplifier with warm sound",
    price: 999,
    categoryId: 2,
    variants: [
      {
        id: 32,
        name: "jolida_jd202a",
        imageURL: "jolida_JD202a.jpg",
        productId: 32,
      },
    ],
  },
  {
    id: 33,
    name: "jolida_jd300b",
    summery: "jolida_jd300b",
    description: "Premium 300B tube integrated amplifier",
    price: 2499,
    categoryId: 2,
    variants: [
      {
        id: 33,
        name: "jolida_jd300b",
        imageURL: "jolida_JD300b.jpg",
        productId: 33,
      },
    ],
  },
  {
    id: 34,
    name: "jolida_jd302b",
    summery: "jolida_jd302b",
    description: "Compact tube amplifier with excellent sound",
    price: 799,
    categoryId: 2,
    variants: [
      {
        id: 34,
        name: "jolida_jd302b",
        imageURL: "jolida_JD302b.jpg",
        productId: 34,
      },
    ],
  },
  {
    id: 35,
    name: "jolida_jd502b",
    summery: "jolida_jd502b",
    description: "Powerful tube amplifier for demanding speakers",
    price: 1499,
    categoryId: 2,
    variants: [
      {
        id: 35,
        name: "jolida_jd502b",
        imageURL: "jolida_JD502b.jpg",
        productId: 35,
      },
    ],
  },
];

const files = [
  "Creek_classic_cd.jpg",
  "creek_Destiny_CD.jpg",
  "creek_evo_cd.jpg",
  "Exp_2010S_CD.gif",
  "creek_classic.jpg",
  "exposure_2010.jpg",
  "parasound_d200.jpg",
  "parasound_halod3.jpg",
  "manley_mahi.jpg",
  "manley_neoclassic300b.jpg",
  "manley_snapper.jpg",
  "parasound_haloa23.jpg",
  "Creek_OBH_22_Passive_Preamp.jpg",
  "parasound_classic7100.jpg",
  "parasound_halop3.jpg",
  "Project_prebox.jpg",
  "boesendorfer_vcs_wall.gif",
  "epos_m5.gif",
  "harbeth_hl7es2.jpg",
  "harbeth_monitor30.jpg",
  "harbeth_p3es2.jpg",
  "creek_a50I.jpg",
  "creek_classic5350SE.jpg",
  "creek_destinyamp.jpg",
  "manley_snapper.jpg",
  "Manley_Stingray.jpg",
  "Pro_ject_Debut_III_blue.jpg",
  "Pro_ject_Debut_III_red.jpg",
  "Pro_ject_Debut_III_yellow.jpg",
  "Pro_ject_rpm10.jpg",
  "Pro_ject_rpm_5.jpg",
  "jolida_JD102b.jpg",
  "jolida_JD202a.jpg",
  "jolida_JD300b.jpg",
  "jolida_JD302b.jpg",
  "jolida_JD502b.jpg",
];

const categories = [
  { id: 1, name: "CD Players" },
  { id: 2, name: "Amplifiers" },
  { id: 3, name: "Preamplifiers" },
  { id: 4, name: "Speakers" },
  { id: 5, name: "Turntables" },
];

const categoryMap = new Map<string, number>();

async function main() {
  const firstRandomItem = await db.query.productTable.findFirst();
  if (firstRandomItem) {
    console.log(
      "[SEEDER] database already seeded, if needed drop the data and re-seed",
    );
    return;
  }

  // Seed categories first
  for (const category of categories) {
    await db.insert(productCategoryTable).values(category);
  }

  // Then seed products
  for (var item of items) {
    const updatedVariants: variant[] = []
    item.variants.forEach(v => {
      updatedVariants.push({
        ...v,
        imageURL: `https://storage.ulf.milasholsting.dk/hifi-horizon/${v.imageURL}`
      })
    })
    item.variants = updatedVariants
    await db.insert(productTable).values(item);

    // Insert variants for each product
    for (const variant of item.variants) {
      await db.insert(productVariantTable).values(variant);
    }
  }

  console.log("[SEEDER] Database seeded successfully");
}

main();
