export const publishedContact = {
  email: "contact@theinterieri.com",
  phone: "+91 84314 16032",
  phoneHref: "+918431416032",
} as const;

export const brand = {
  name: "The Interier",
  tagline: "The infrastructure behind better interiors.",
  shortDescription:
    "An India-focused technology platform connecting interior professionals with project opportunities and clearer ways to work.",
  description:
    "The Interier is building a connected ecosystem for interior design professionals, independent firms, turnkey contractors, homeowners, and commercial customers across India.",
} as const;

export const geography = {
  initialCity: "Bengaluru",
  plannedCities: [
    "Mumbai",
    "Delhi NCR",
    "Hyderabad",
    "Chennai",
    "Pune",
  ] as const,
};

export const availability = {
  live: [
    "Public marketing website",
    "Professional early-access registrations",
    "Customer project enquiries",
    "Editorial Insights",
  ],
  planned: [
    "Professional profiles and portfolios on the platform",
    "Opportunity matching and enquiry routing",
    "Quotation and BOQ workflows",
    "Project milestones, approvals, and coordination",
    "Customer marketplace discovery",
  ],
} as const;

export const projectTypes = [
  "Full home interior",
  "Apartment interior",
  "Villa / independent house",
  "Kitchen and wardrobe",
  "Renovation / remodel",
  "Office interior",
  "Retail interior",
  "Hospitality interior",
  "Other commercial",
] as const;

export const propertyTypes = [
  "Apartment",
  "Villa / independent house",
  "Builder floor",
  "Office",
  "Retail store",
  "Restaurant / cafe",
  "Hotel / hospitality",
  "Other",
] as const;

export const budgetRanges = [
  "Under ₹5 lakh",
  "₹5–10 lakh",
  "₹10–25 lakh",
  "₹25–50 lakh",
  "₹50 lakh–1 crore",
  "Above ₹1 crore",
  "Not sure yet",
] as const;

export const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "More than 6 months",
  "Just exploring",
] as const;

export const professionalRoles = [
  "Principal / founder",
  "Independent interior designer",
  "Studio lead",
  "Turnkey contractor",
  "Project manager",
  "Architect offering interiors",
  "Other",
] as const;

export const specializations = [
  "Residential",
  "Kitchens and wardrobes",
  "Luxury homes",
  "Offices",
  "Retail",
  "Hospitality",
  "Renovation",
  "Turnkey execution",
] as const;

export const indianCities = [
  "Bengaluru",
  "Mumbai",
  "Delhi",
  "Gurugram",
  "Noida",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Kochi",
  "Other",
] as const;
