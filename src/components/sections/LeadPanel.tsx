import { EnquiryForm } from "@/components/forms/EnquiryForm";
import type { EnquiryKind } from "@/lib/enquiry";
import { getContactDetails } from "@/lib/site";

export function LeadPanel({
  kind,
  eyebrow,
  title,
  description,
  submitLabel,
}: {
  kind: EnquiryKind;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
}) {
  const contact = getContactDetails();
  return (
    <div className="border border-graphite/10 bg-white p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-terracotta">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-2xl text-graphite sm:text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      <div className="mt-6">
        <EnquiryForm kind={kind} submitLabel={submitLabel} contactEmail={contact.email} />
      </div>
    </div>
  );
}
