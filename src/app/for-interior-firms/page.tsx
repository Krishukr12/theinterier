import type { Metadata } from "next";
import { LeadPanel } from "@/components/sections/LeadPanel";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { PlannedBadge, LiveBadge } from "@/components/ui/StatusNote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/content/media";
import { brand } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "For interior firms",
  description:
    "How The Interier aims to support independent interior professionals with opportunities, profiles, enquiries, quotations, and project coordination.",
  alternates: { canonical: absoluteUrl("/for-interior-firms") },
  openGraph: {
    title: `For interior firms | ${brand.name}`,
    url: absoluteUrl("/for-interior-firms"),
  },
};

const capabilities = [
  {
    title: "Project lead discovery",
    body: "A future path to briefs that match your city, typology, and capacity. Registration does not guarantee leads.",
  },
  {
    title: "Professional profiles and portfolios",
    body: "A considered way to present selected work, without turning your craft into a generic listing.",
  },
  {
    title: "Enquiry and follow-up management",
    body: "One place to see who enquired, what they asked, and what still needs a reply.",
  },
  {
    title: "Quotations and BOQs",
    body: "Structured proposals that customers can actually read, version, and approve.",
  },
  {
    title: "Project milestones and tasks",
    body: "A shared sequence from brief lock to handover, instead of a founder-only chat history.",
  },
  {
    title: "Customer approvals",
    body: "Selections and changes recorded so production is not reopened by accident.",
  },
  {
    title: "Vendor and team coordination",
    body: "A later layer for the people who actually build the work, without replacing your existing vendors.",
  },
];

export default function FirmsPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <LiveBadge />
            <h1 className="mt-5 font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
              Build a stronger interior business, beyond referrals.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {brand.name} is being built for independent designers, interior
              firms, and turnkey contractors who want relevant opportunities and
              a calmer operating layer — without becoming employees of a
              platform.
            </p>
          </div>
          <EditorialImage image={media.worktable} className="aspect-[4/5] lg:aspect-[5/6]" />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <SectionHeading
              eyebrow="Intended support"
              title="What we aim to help studios do."
            />
            <PlannedBadge />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="border-t border-graphite/10 pt-5">
                <h2 className="font-serif text-2xl text-graphite">{item.title}</h2>
                <p className="mt-3 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted">
            We will not promise guaranteed leads, conversion rates, or revenue
            outcomes. Early access is a registration of interest so we can
            onboard studios thoughtfully as the product opens in Bengaluru and
            then other Indian cities.
          </p>
        </Container>
      </section>

      <section className="bg-beige/40 py-20" id="register">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Early access"
              title="Register your studio."
              description="Tell us who you are and where you work. We will follow up as onboarding opens. This does not create a product account yet."
            />
          </div>
          <div className="lg:col-span-7">
            <LeadPanel
              kind="early-access"
              eyebrow="Professionals"
              title="Join The Interier early access."
              description="Independent practitioners can use their own name as the studio name."
              submitLabel="Submit registration"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
