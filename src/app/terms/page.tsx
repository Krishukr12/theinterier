import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { brand } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using the public ${brand.name} website.`,
  alternates: { canonical: absoluteUrl("/terms") },
};

export default function TermsPage() {
  return (
    <section className="bg-offwhite py-20">
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">Legal</p>
        <h1 className="mt-4 font-serif text-4xl text-graphite">Terms of Use</h1>
        <p className="mt-4 rounded-sm bg-beige/80 px-4 py-3 text-sm text-graphite">
          Starter terms for the marketing website only. Governing law, entity
          name, limitation of liability, and marketplace terms require legal
          review. This page does not create a software subscription or a
          project contract.
        </p>
        <div className="mt-10 space-y-6 text-muted">
          <section>
            <h2 className="font-serif text-2xl text-graphite">The website</h2>
            <p className="mt-3">
              {brand.name} provides information about a planned interior-industry
              platform, editorial articles, and forms for early-access
              registration and project enquiries. Submitting a form is a request
              to be contacted. It is not an offer, booking, introduction, or
              verification of any professional.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">No professional advice</h2>
            <p className="mt-3">
              Insights articles are general editorial content. They are not
              design, legal, or financial advice, and they do not replace a
              conversation with a qualified professional about your site.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">Your submissions</h2>
            <p className="mt-3">
              You confirm that the information you send is accurate to the best
              of your knowledge and that you have the right to share it. Do not
              send payment card numbers or other sensitive credentials through
              these forms.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">Illustrative content</h2>
            <p className="mt-3">
              Photography and profile layouts on this site may be illustrative.
              They do not represent named partner firms unless a page says so
              explicitly. Planned features are labelled as planned.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-graphite">Changes</h2>
            <p className="mt-3">
              These terms will be replaced when a product, paid service, or
              marketplace launches. Governing law is intended to be India, with
              courts <strong>to be confirmed</strong> alongside the registered
              entity.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
