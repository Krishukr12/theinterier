import { media, type MediaAsset } from "@/content/media";

export const articleCategories = [
  "Interior Planning",
  "Home Renovation",
  "Finding an Interior Designer",
  "Interior Business Growth",
  "Project Management",
  "Quotations and Budgeting",
  "Design Trends",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  readingMinutes: number;
  cover: MediaAsset;
  sections: ArticleSection[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "how-to-brief-an-interior-designer-in-india",
    title: "How to brief an interior designer in India",
    description:
      "A practical way to describe rooms, constraints, budget, and taste so a designer can respond with a usable proposal.",
    category: "Interior Planning",
    readingMinutes: 8,
    cover: media.worktable,
    related: [
      "what-a-serious-interior-quotation-should-include",
      "choosing-an-interior-designer-without-guesswork",
    ],
    sections: [
      {
        heading: "Start with the rooms, not Pinterest",
        paragraphs: [
          "A useful interior brief is closer to a project note than a moodboard. Before sharing inspiration images, list the rooms in scope, who uses them, and what has to work on a weekday morning. In Indian homes this often includes shoe storage at the entrance, a pooja or quiet corner, helper circulation, and a living room that has to host both family and guests.",
          "Write down what must stay: structural walls, existing flooring you do not want to break, a window you cannot cover, or a kitchen that has to remain in the same wet area. Constraints are more valuable to a designer than a stack of screenshots.",
        ],
      },
      {
        heading: "Make the budget and the decision-makers explicit",
        paragraphs: [
          "Share an approximate budget in INR, including or excluding appliances, loose furniture, and civil work. If two family members will approve every drawing, say so. Designers lose weeks when a brief is written by one person and overturned by another at the first site visit.",
        ],
        bullets: [
          "City and locality, including floor and lift constraints.",
          "Possession date or when the site will actually be free.",
          "Rooms in scope, and rooms explicitly out of scope.",
          "Whether you want design-only, design-and-build, or a turnkey contractor.",
        ],
      },
      {
        heading: "Describe taste as references, not slogans",
        paragraphs: [
          "Words like modern, luxurious, or minimal rarely survive the first quotation. Attach five to eight images and annotate them: keep the wood tone, ignore the marble, this sofa scale is right. That is enough for a professional to understand direction without locking the project into a copied interior.",
        ],
      },
    ],
  },
  {
    slug: "renovating-an-apartment-without-losing-the-plot",
    title: "Renovating an apartment without losing the plot",
    description:
      "How to sequence civil work, kitchens, and interiors in an occupied or newly purchased Indian apartment.",
    category: "Home Renovation",
    readingMinutes: 9,
    cover: media.renovation,
    related: [
      "how-to-brief-an-interior-designer-in-india",
      "milestones-that-keep-an-interior-project-honest",
    ],
    sections: [
      {
        heading: "Separate structure from surface",
        paragraphs: [
          "Apartment renovations go wrong when tiling, electrical points, false ceilings, and furniture are treated as one lump. Civil and MEP decisions have to settle before modular work is measured. If you change a wet-area drain after the kitchen has been produced, you pay twice.",
        ],
      },
      {
        heading: "Society rules are part of the design",
        paragraphs: [
          "Many Bengaluru, Mumbai, and Gurgaon societies restrict demolition hours, balcony enclosures, plumbing reroutes, and material hoists. Put those rules in the brief. A drawing that looks resolved on paper can still be unexecutable if the association will not allow a slab cut or a window AC sleeve.",
        ],
      },
      {
        heading: "Live-in renovations need a room-by-room plan",
        paragraphs: [
          "If the home is occupied, renovate in zones. Keep one bathroom functioning. Do kitchens after basic electrical and plumbing are complete. Agree in writing where the family will sleep during dusty work. These are project-management decisions, not afterthoughts.",
        ],
      },
    ],
  },
  {
    slug: "choosing-an-interior-designer-without-guesswork",
    title: "Choosing an interior designer without guesswork",
    description:
      "A clearer way to evaluate studios based on relevant work, process, and scope — not just Instagram presence.",
    category: "Finding an Interior Designer",
    readingMinutes: 8,
    cover: media.living,
    related: [
      "how-to-brief-an-interior-designer-in-india",
      "what-a-serious-interior-quotation-should-include",
    ],
    sections: [
      {
        heading: "Look for similar constraints, not similar filters",
        paragraphs: [
          "A villa in Goa photographed at dusk does not prove a studio can resolve a 3BHK in Whitefield with a 10-lakh kitchen budget. Ask for two or three projects with a similar city, typology, and budget band. Completed work with site photos is more useful than renders.",
        ],
      },
      {
        heading: "Ask how decisions travel",
        paragraphs: [
          "The important question is not whether the studio has taste. It is how selections, revisions, and site instructions move. Who visits the site? How are changes recorded? Who owns the BOQ if a carpenter substitutes a shutter material? Studios that cannot describe this usually leak time and money later.",
        ],
      },
      {
        heading: "Pay for clarity before paying for volume",
        paragraphs: [
          "A paid concept or measured survey is often a better first step than a full turnkey commitment. You learn how the studio thinks. They learn whether your brief is stable. The Interier’s longer-term product aim is to make this comparison easier; until that exists, a written scope and a conversation about process remain the most reliable filters.",
        ],
      },
    ],
  },
  {
    slug: "growing-an-interior-practice-beyond-referrals",
    title: "Growing an interior practice beyond referrals",
    description:
      "Why independent Indian interior firms stall after word of mouth, and which operating habits actually help.",
    category: "Interior Business Growth",
    readingMinutes: 9,
    cover: media.office,
    related: [
      "milestones-that-keep-an-interior-project-honest",
      "what-a-serious-interior-quotation-should-include",
    ],
    sections: [
      {
        heading: "Referrals are a channel, not a system",
        paragraphs: [
          "Most independent studios in India still grow through friends, architects, and past clients. That is a strength until the pipeline becomes lumpy: three projects arrive together, then nothing for a month. A practice that wants steadier work needs a way to describe who it is for, capture enquiries, and decline misaligned briefs without guilt.",
        ],
      },
      {
        heading: "The bottleneck is usually follow-up, not talent",
        paragraphs: [
          "Enquiries arrive on Instagram, WhatsApp, email, and phone. If they live only in a founder’s chat list, quotations slip and the studio looks unreliable. A simple shared log — source, city, budget band, next action, last contact — changes more than a new logo. The Interier is being built to support this kind of operating layer, not to replace the designer’s craft.",
        ],
      },
      {
        heading: "Do not buy leads you cannot serve",
        paragraphs: [
          "Paid lead platforms often send volume without context. If your studio cannot take a 2BHK in another city this quarter, those enquiries only create unpaid work. Define geography, ticket size, and typology before you spend on visibility. Early-access registration with The Interier is a way to signal interest, not a promise of qualified demand.",
        ],
      },
    ],
  },
  {
    slug: "milestones-that-keep-an-interior-project-honest",
    title: "Milestones that keep an interior project honest",
    description:
      "A simple milestone language clients and studios can share: brief, concept, working drawings, site, snag.",
    category: "Project Management",
    readingMinutes: 7,
    cover: media.dining,
    related: [
      "renovating-an-apartment-without-losing-the-plot",
      "growing-an-interior-practice-beyond-referrals",
    ],
    sections: [
      {
        heading: "Name the gates before the moodboards",
        paragraphs: [
          "Interior projects stall when everyone is busy and nobody knows what “done” means this fortnight. Agree a small set of gates: brief locked, concept approved, working drawings issued, site mobilisation, finishing, snag list, handover. Each gate should have an artefact — a drawing set, a signed selection sheet, a photo log — not just a verbal okay on WhatsApp.",
        ],
      },
      {
        heading: "Approvals need a person and a date",
        paragraphs: [
          "If three family members can reopen the kitchen shutter finish after production has started, the programme is fiction. Record who can approve, how long they have, and what happens if they miss the window. This is not bureaucracy. It is how you protect both the client’s money and the studio’s calendar.",
        ],
      },
      {
        heading: "Site is a different language from the studio",
        paragraphs: [
          "Drawings that look complete in InDesign still fail when the mason does not have a dimensioned wet-area plan. Build a habit of translating design decisions into site instructions the same week they are approved. Future tools at The Interier are meant to hold this trail. Until then, a shared folder and a dated instruction note are enough to start.",
        ],
      },
    ],
  },
  {
    slug: "what-a-serious-interior-quotation-should-include",
    title: "What a serious interior quotation should include",
    description:
      "How to read a quotation or BOQ in India so that wood, civil work, and exclusions do not hide later.",
    category: "Quotations and Budgeting",
    readingMinutes: 10,
    cover: media.kitchen,
    related: [
      "how-to-brief-an-interior-designer-in-india",
      "choosing-an-interior-designer-without-guesswork",
    ],
    sections: [
      {
        heading: "Price without specification is not a quote",
        paragraphs: [
          "A single-line “modular kitchen — ₹4.2 lakh” does not tell you carcass material, shutter finish, hardware, counter, or whether the hob is included. Ask for a BOQ that names brand or equivalent, thickness, finish, and unit. If two studios quote different numbers, you are often comparing different products, not different value.",
        ],
      },
      {
        heading: "Separate design fees, civil work, and FF&E",
        paragraphs: [
          "Lumping everything into one turnkey number makes later changes impossible to price. Keep design fees, demolition and civil, electrical, false ceiling, modular, loose furniture, and styling on separate lines. GST treatment also differs; a clean split saves arguments at invoice time.",
        ],
      },
      {
        heading: "Read the exclusions first",
        paragraphs: [
          "Appliances, gas, plumbing points beyond a stated number, stone, wallpaper, and outdoor work are common exclusions. So are society deposits and debris disposal. A quotation that looks cheaper often moved those items onto the client. That is acceptable if it is explicit. It is not acceptable if it appears in week ten as a surprise.",
        ],
        bullets: [
          "What is measured in square feet versus lumsum.",
          "Who buys and warranties appliances.",
          "How extra site visits and drawing revisions are charged.",
          "Payment milestones tied to work, not only to calendar dates.",
        ],
      },
    ],
  },
  {
    slug: "indian-interior-taste-is-moving-past-copied-luxury",
    title: "Indian interior taste is moving past copied luxury",
    description:
      "What is actually changing in Indian homes and workplaces: quieter materials, better storage, less imported theatre.",
    category: "Design Trends",
    readingMinutes: 7,
    cover: media.bedroom,
    related: [
      "how-to-brief-an-interior-designer-in-india",
      "renovating-an-apartment-without-losing-the-plot",
    ],
    sections: [
      {
        heading: "The useful trend is restraint",
        paragraphs: [
          "Across apartments in Bengaluru, Mumbai, and Hyderabad, the more durable work is not louder marble or gold hardware. It is better daylight, honest wood or laminate used with care, kitchens that ventilate, and storage that absorbs Indian household bulk. Trends that photograph well but age in two years are expensive.",
        ],
      },
      {
        heading: "Climate and maintenance are design, not footnotes",
        paragraphs: [
          "Dust, humidity, monsoon ingress, and full-time household help change how finishes perform. A European pale oak floor copied into a ground-floor home with sandy shoes will not look like the reference. Ask what the material does after three summers, not how it looks on day one.",
        ],
      },
      {
        heading: "Workplaces want the same calm",
        paragraphs: [
          "Small offices and studios are also moving away from generic glass boxes toward quieter rooms, better acoustics, and furniture that can survive hybrid weeks. If you are briefing a commercial interior, write about how the day is actually spent — calls, focused work, client meetings — before you specify a feature wall.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articlesByCategory(category?: string) {
  if (!category) return articles;
  return articles.filter((article) => article.category === category);
}
