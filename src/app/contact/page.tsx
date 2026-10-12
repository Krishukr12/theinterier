import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { brand, geography } from "@/content/site";
import { getContactDetails, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.name} about professional registration, customer projects, or partnership questions.`,
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  const contact = getContactDetails();

  return (
    <section className="bg-offwhite py-20">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-terracotta">Contact</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
            Write to {brand.name}.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Use the form for professional registrations, project enquiries, and
            general questions. We begin with {geography.initialCity}; other
            Indian cities are welcome and will be reviewed as coverage grows.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="uppercase tracking-[0.16em] text-muted">Email</dt>
              <dd className="mt-1 text-graphite">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.16em] text-muted">Phone</dt>
              <dd className="mt-1 text-graphite">
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.16em] text-muted">Address</dt>
              <dd className="mt-1 text-graphite">
                {contact.address ??
                  "Registered office details will appear here after legal confirmation."}
              </dd>
            </div>
          </dl>
        </div>
        <div className="border border-graphite/10 bg-white p-6 sm:p-8 lg:col-span-7">
          <h2 className="font-serif text-2xl text-graphite">Enquiry form</h2>
          <p className="mt-2 mb-6 text-sm text-muted">
            If form delivery is not configured yet, you will see an error rather
            than a false success message.
          </p>
          <EnquiryForm kind="contact" submitLabel="Send message" contactEmail={contact.email} />
        </div>
      </Container>
    </section>
  );
}
