import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { brand } from "@/content/site";
import { absoluteUrl, getContactDetails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${brand.name} intends to handle personal information collected through this website.`,
  alternates: { canonical: absoluteUrl("/privacy") },
};

export default function PrivacyPage() {
  const contact = getContactDetails();

  return (
    <section className="bg-offwhite py-20">
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">Legal</p>
        <h1 className="mt-4 font-serif text-4xl text-graphite">Privacy Policy</h1>
        <p className="mt-4 rounded-sm bg-beige/80 px-4 py-3 text-sm text-graphite">
          Starter policy for the public marketing website. Company legal name,
          registered address, grievance officer, and retention periods require
          confirmation and legal review before this can be treated as a final
          document.
        </p>
        <div className="prose-legal mt-10 space-y-6 text-muted">
          <section>
            <h2 className="font-serif text-2xl text-graphite">Who we are</h2>
            <p className="mt-3">
              This website is operated under the trading name {brand.name}. The
              registered legal entity, CIN, and office address are{" "}
              <strong>to be confirmed</strong>.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">What we collect</h2>
            <p className="mt-3">
              If you submit an enquiry or registration, we collect the details
              you provide: name, email, optional phone number, city, project or
              professional information, and your consent to be contacted.
              Server logs may include IP address and basic browser data.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">How we use it</h2>
            <p className="mt-3">
              We use enquiry data to respond to you, understand demand, and
              prepare onboarding. We do not sell personal information. We do
              not use the form to create a product account unless you later
              agree to that separately.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">Sharing</h2>
            <p className="mt-3">
              If a form webhook or email provider is configured, your submission
              is sent to that processor solely to deliver the enquiry. Future
              matching with professionals will require a clearer notice before
              any introduction is made.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">Your choices</h2>
            <p className="mt-3">
              You may ask to access, correct, or delete enquiry data by writing
              to {contact.email}.
              We will update this policy when a product account, cookies beyond
              essentials, or analytics vendor is introduced.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
