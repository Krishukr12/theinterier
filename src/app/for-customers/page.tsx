import type { Metadata } from "next";
import { LeadPanel } from "@/components/sections/LeadPanel";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { LiveBadge, PlannedBadge } from "@/components/ui/StatusNote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/content/media";
import { brand } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "For customers",
  description:
    "Submit interior project requirements and explore how The Interier aims to help homeowners and commercial clients find suitable professionals.",
  alternates: { canonical: absoluteUrl("/for-customers") },
};

const steps = [
  {
    title: "Submit requirements",
    body: "Tell us the city, rooms, budget band in INR, and when you hope to start. A clear brief is more useful than a moodboard alone.",
  },
  {
    title: "Discover suitable professionals",
    body: "Planned: see studios whose work fits the typology and city, not a random directory.",
  },
  {
    title: "Explore portfolios and proposals",
    body: "Planned: compare how different practices would approach the same brief, with comparable scope.",
  },
  {
    title: "Work with more visibility",
    body: "Planned: follow milestones, approvals, and changes without chasing every update on WhatsApp.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <LiveBadge />
            <h1 className="mt-5 font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
              Find the right people for the space you imagine.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {brand.name} is for homeowners and commercial customers who want a
              more organised way to start an interior project in India. You can
              share a brief today. Self-serve matching and in-product hiring are
              still being built.
            </p>
          </div>
          <EditorialImage image={media.living} className="aspect-[4/5] lg:aspect-[5/6]" />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <SectionHeading
              eyebrow="The intended customer journey"
              title="From a brief to a more organised project."
            />
            <PlannedBadge />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="border-t border-graphite/10 pt-5">
                <p className="font-serif text-terracotta">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-serif text-2xl text-graphite">{step.title}</h2>
                <p className="mt-3 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-beige/40 py-20" id="project-enquiry">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Project enquiry"
              title="Tell us about the space."
              description="Use INR ranges and the city where the site actually is. We will not treat this form as a booking."
            />
          </div>
          <div className="lg:col-span-7">
            <LeadPanel
              kind="customer"
              eyebrow="Customers"
              title="Planning an interior project?"
              description="Homes, offices, retail, and hospitality interiors are all in scope for enquiry."
              submitLabel="Send project enquiry"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
