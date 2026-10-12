import { brand, publishedContact } from "@/content/site";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  return raw.replace(/\/$/, "");
}

export function getContactDetails() {
  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || publishedContact.email;
  const phone =
    process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || publishedContact.phone;
  const phoneHref = phone.replace(/[^\d+]/g, "") || publishedContact.phoneHref;
  const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS?.trim() || null;
  return { email, phone, phoneHref, address };
}

export function absoluteUrl(path = "/") {
  const origin = getSiteUrl();
  if (path === "/") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title?: string) {
  return title ? `${title} | ${brand.name}` : `${brand.name} — ${brand.tagline}`;
}

export function isEnquiryDeliveryConfigured() {
  return Boolean(
    process.env.FORM_WEBHOOK_URL?.trim() ||
      (process.env.RESEND_API_KEY?.trim() &&
        (process.env.ENQUIRY_TO_EMAIL?.trim() ||
          process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
          publishedContact.email)),
  );
}
