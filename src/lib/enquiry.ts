import {
  budgetRanges,
  indianCities,
  professionalRoles,
  projectTypes,
  propertyTypes,
  timelines,
} from "@/content/site";

export const enquiryKinds = [
  "professional",
  "customer",
  "contact",
  "early-access",
] as const;

export type EnquiryKind = (typeof enquiryKinds)[number];

export type EnquiryPayload = {
  kind: EnquiryKind;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  message?: string;
  consent: boolean;
  firmName?: string;
  role?: string;
  specializations?: string[];
  website?: string;
  projectType?: string;
  propertyType?: string;
  budget?: string;
  timeline?: string;
  topic?: string;
  companyWebsite?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => asString(item)).filter(Boolean);
}

function inList(value: string, list: readonly string[]) {
  return list.includes(value);
}

export type EnquiryResult =
  | { ok: true; data: EnquiryPayload }
  | { ok: false; errors: Record<string, string> };

export function parseEnquiry(input: unknown): EnquiryResult {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Please complete the form." } };
  }

  const raw = input as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const kind = asString(raw.kind) as EnquiryKind;

  if (!enquiryKinds.includes(kind)) {
    errors.kind = "Choose a valid enquiry type.";
  }

  const name = asString(raw.name);
  if (name.length < 2) errors.name = "Enter your name.";

  const email = asString(raw.email).toLowerCase();
  if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";

  const phone = asString(raw.phone);
  if (phone && !phonePattern.test(phone.replace(/[()]/g, ""))) {
    errors.phone = "Enter a valid Indian mobile number, or leave this blank.";
  }

  const city = asString(raw.city);
  if (city && !inList(city, indianCities)) {
    errors.city = "Choose a city from the list.";
  }

  const consent = raw.consent === true || raw.consent === "true" || raw.consent === "on";
  if (!consent) {
    errors.consent = "Consent is required so we can contact you about this enquiry.";
  }

  const message = asString(raw.message);
  const payload: EnquiryPayload = {
    kind,
    name,
    email,
    consent,
  };

  if (phone) payload.phone = phone;
  if (city) payload.city = city;
  if (message) payload.message = message.slice(0, 4000);

  const honeypot = asString(raw.companyWebsite || raw.company_website);
  if (honeypot) payload.companyWebsite = honeypot;

  if (kind === "professional" || kind === "early-access") {
    const firmName = asString(raw.firmName);
    const role = asString(raw.role);
    const website = asString(raw.website);
    const specializations = asStringArray(raw.specializations);

    if (firmName.length < 2) errors.firmName = "Enter your studio or firm name. Independent practitioners can use their own name.";
    if (role && !inList(role, professionalRoles)) errors.role = "Choose a role from the list.";
    if (!city) errors.city = "Tell us which city you primarily work from.";
    if (website && !/^https?:\/\//i.test(website) && !/^[\w.-]+\.[a-z]{2,}/i.test(website)) {
      errors.website = "Enter a website or portfolio URL, or leave this blank.";
    }

    payload.firmName = firmName;
    if (role) payload.role = role;
    if (specializations.length) payload.specializations = specializations;
    if (website) payload.website = website;
  }

  if (kind === "customer") {
    const projectType = asString(raw.projectType);
    const propertyType = asString(raw.propertyType);
    const budget = asString(raw.budget);
    const timeline = asString(raw.timeline);

    if (!city) errors.city = "Select the city for this project.";
    if (!inList(projectType, projectTypes)) errors.projectType = "Select a project type.";
    if (!inList(propertyType, propertyTypes)) errors.propertyType = "Select a property type.";
    if (!inList(budget, budgetRanges)) errors.budget = "Select an approximate budget in INR.";
    if (!inList(timeline, timelines)) errors.timeline = "Select when you hope to start.";
    if (message.length < 20) {
      errors.message = "Describe the project in at least a couple of sentences.";
    }

    payload.projectType = projectType;
    payload.propertyType = propertyType;
    payload.budget = budget;
    payload.timeline = timeline;
  }

  if (kind === "contact") {
    const topic = asString(raw.topic);
    if (!topic) errors.topic = "Choose a topic.";
    if (message.length < 10) errors.message = "Please share a short message.";
    payload.topic = topic;
  }

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, data: payload };
}
