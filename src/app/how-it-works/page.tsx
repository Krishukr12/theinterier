import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LiveBadge, PlannedBadge } from "@/components/ui/StatusNote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { availability, brand } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Customer and professional journeys on The Interier, with a clear split between live enquiries and planned product capabilities.",
  alternates: { canonical: absoluteUrl("/how-it-works") },
};

const customerJourney = [
  { step: "Share a brief", status: "live" as const, detail: "City, rooms, budget band, timeline, and a short description." },
  { step: "Team follow-up", status: "live" as const, detail: "If delivery is configured, The Interier reviews the enquiry and replies." },
  { step: "Discover professionals", status: "planned" as const, detail: "See studios whose work and capacity fit the brief." },
  { step: "Explore proposals", status: "planned" as const, detail: "Compare comparable scopes instead of incompatible quotes." },
  { step: "Align on scope", status: "planned" as const, detail: "Lock rooms, finishes, and exclusions before production." },
  { step: "Milestones and approvals", status: "planned" as const, detail: "A shared trail of what was agreed as work proceeds." },
];

const professionalJourney = [
  { step: "Register interest", status: "live" as const, detail: "Early-access form for studios and independent designers." },
  { step: "Profile and portfolio", status: "planned" as const, detail: "Present selected work without a fake verification badge." },
  { step: "Opportunities", status: "planned" as const, detail: "See briefs that match city, typology, and capacity." },
  { step: "Enquiries", status: "planned" as const, detail: "Respond from one queue instead of scattered chats." },
  { step: "Proposals", status: "planned" as const, detail: "Send quotations and BOQs the customer can actually read." },
  { step: "Coordination", status: "planned" as const, detail: "Keep tasks, vendors, and approvals next to the project." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-terracotta">Process</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
            How {brand.name} is meant to work.
          </h1>
          <p className="mt-6 text-lg text-muted">
            Two parallel journeys: one for the person who owns the space, one for
            the practice that will shape it. Labels below are honest. Live means
            you can act on this website today. Planned means it is part of the
            product direction, not a current service.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Journey title="Customers" items={customerJourney} />
          <Journey title="Professionals" items={professionalJourney} />
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Currently available" title="What you can do now." />
            <ul className="mt-6 space-y-2 text-muted">
              {availability.live.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Planned" title="What is not live yet." />
            <ul className="mt-6 space-y-2 text-muted">
              {availability.planned.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </Container>
        <Container className="mt-12 flex gap-3">
          <Button href="/for-customers">Customer enquiry</Button>
          <Button href="/for-interior-firms" variant="secondary">
            Professional registration
          </Button>
        </Container>
      </section>
    </>
  );
}

function Journey({
  title,
  items,
}: {
  title: string;
  items: { step: string; status: "live" | "planned"; detail: string }[];
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl text-graphite">{title}</h2>
      <ol className="mt-8 border-l border-graphite/15 pl-6">
        {items.map((item, index) => (
          <li key={item.step} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-terracotta" />
            <p className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-1 font-serif text-2xl text-graphite">{item.step}</h3>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
            <div className="mt-3">
              {item.status === "live" ? <LiveBadge /> : <PlannedBadge />}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
