export type MediaAsset = {
  src: string;
  alt: string;
  credit: string;
};

const u = (id: string, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80${extra}`;

export const media = {
  hero: {
    src: u("photo-1618221195710-dd6b41faaea6"),
    alt: "A contemporary living room with warm wood, layered textiles, and generous natural light",
    credit: "Photo by Spacejoy on Unsplash",
  },
  living: {
    src: u("photo-1600210492486-724fe5c67fb0"),
    alt: "Editorial view of a refined residential interior with sculptural furniture",
    credit: "Photo by R Architecture on Unsplash",
  },
  kitchen: {
    src: u("photo-1556912173-46c336c7fd55"),
    alt: "A modern kitchen with stone surfaces, warm cabinetry, and considered lighting",
    credit: "Photo by Sidekix Media on Unsplash",
  },
  apartment: {
    src: u("photo-1560448204-e02f11c3d0e2"),
    alt: "A bright apartment interior with a composed seating area",
    credit: "Photo by Naomi Baker on Unsplash",
  },
  villa: {
    src: u("photo-1600607687939-ce8a6c25118c"),
    alt: "A villa living space with double-height volume and architectural detailing",
    credit: "Photo by R Architecture on Unsplash",
  },
  office: {
    src: u("photo-1497366216548-37526070297c"),
    alt: "A contemporary office interior with daylight and calm material palette",
    credit: "Photo by Nastuh Abootalebi on Unsplash",
  },
  retail: {
    src: u("photo-1441986300917-64674bd600d8"),
    alt: "A considered retail interior with display, lighting, and circulation",
    credit: "Photo by Clark Street Mercantile on Unsplash",
  },
  hospitality: {
    src: u("photo-1611892440504-42a792e24d32"),
    alt: "A hospitality interior with layered lighting and restful materials",
    credit: "Photo by Francesco Ungaro on Unsplash",
  },
  renovation: {
    src: u("photo-1503387762-592deb58ef4e"),
    alt: "Architectural drawings and a space in the process of being planned",
    credit: "Photo by Daniel McCullough on Unsplash",
  },
  dining: {
    src: u("photo-1616486338812-3dadae4b4ace"),
    alt: "A dining room with warm wood, plaster walls, and a calm composition",
    credit: "Photo by Spacejoy on Unsplash",
  },
  bedroom: {
    src: u("photo-1616594039964-2ab2d19b1a0c"),
    alt: "A bedroom interior with linen, timber, and restrained colour",
    credit: "Photo by Spacejoy on Unsplash",
  },
  worktable: {
    src: u("photo-1524758631624-e2822e304c36"),
    alt: "A studio worktable with samples, drawings, and material palettes",
    credit: "Photo by Inside Weather on Unsplash",
  },
} satisfies Record<string, MediaAsset>;

export const inspirationGallery: { title: string; caption: string; image: MediaAsset }[] =
  [
    { title: "Residences", caption: "Homes composed around light, material, and daily ritual.", image: media.living },
    { title: "Kitchens", caption: "Workspaces that have to look considered and perform every day.", image: media.kitchen },
    { title: "Apartments", caption: "Compact plans that still feel generous and complete.", image: media.apartment },
    { title: "Villas", caption: "Larger volumes, indoor–outdoor thresholds, and architectural sequence.", image: media.villa },
    { title: "Renovations", caption: "Existing buildings given a clearer, more liveable next chapter.", image: media.renovation },
    { title: "Offices", caption: "Workplaces designed for focus, meeting, and a calmer presence.", image: media.office },
    { title: "Retail", caption: "Brand spaces where circulation, display, and finish have to work together.", image: media.retail },
    { title: "Hospitality", caption: "Rooms and lobbies that have to feel specific, not generic.", image: media.hospitality },
  ];
