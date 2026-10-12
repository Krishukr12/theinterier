import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/media/EditorialImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/content/media";
import { brand, geography } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "The Interier is a platform focused on the business infrastructure behind India’s interior industry.",
  alternates: { canonical: absoluteUrl("/about") },
};

const principles = [
  {
    title: "Professionals stay independent",
    body: "The platform should support studios, not absorb them. Your name, relationships, and design judgement remain yours.",
  },
  {
    title: "Customers deserve choice and clarity",
    body: "People should be able to understand who they are speaking to, what a proposal includes, and what happens next.",
  },
  {
    title: "No invented proof",
    body: "We will not publish fake partners, ratings, or results. Trust has to be earned by the product, not the marketing site.",
  },
  {
    title: "India, starting with Bengaluru",
    body: `The first geography is ${geography.initialCity}. Other major cities are intended next. Local practice, GST, and INR pricing are assumed, not copied from another market.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-terracotta">About</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
              Infrastructure for an industry that still runs on referrals and chat threads.
            </h1>
            <p className="mt-6 text-lg text-muted">
              {brand.name} is a technology-enabled platform for the interior
              industry in India. It is being built so independent professionals
              can find and run work more clearly, and so customers can start
              projects with less guesswork.
            </p>
            <p className="mt-4 text-muted">
              We are not an interior execution company. We do not take over
              your projects, and we do not present this website as evidence of
              funding, headcount, or completed marketplace volume. Those facts
              will be stated when they exist.
            </p>
          </div>
          <EditorialImage image={media.dining} className="aspect-[4/5]" />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Vision"
            title="A connected ecosystem, not a louder marketplace ad."
            description="The long-term aim is simple: project opportunities, professional presentation, quotations, and coordination should sit in one coherent system — used by the people who already do the work."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <article>
              <h2 className="font-serif text-2xl text-graphite">Who it is for</h2>
              <p className="mt-3 text-muted">
                Interior firms, independent designers, turnkey contractors,
                homeowners, and commercial clients. Vendors and internal tools
                come later.
              </p>
            </article>
            <article>
              <h2 className="font-serif text-2xl text-graphite">What we will not do</h2>
              <p className="mt-3 text-muted">
                We will not invent company history, team biographies, or
                operational achievements for this page. Empty prestige is worse
                than a short, true story.
              </p>
            </article>
            <article>
              <h2 className="font-serif text-2xl text-graphite">Intended impact</h2>
              <p className="mt-3 text-muted">
                Fewer wasted site visits, clearer proposals, and projects that
                stay legible after the first drawing is approved.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container>
          <SectionHeading eyebrow="Principles" title="How we intend to behave as the product opens." />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="bg-white p-8">
                <h3 className="font-serif text-2xl text-graphite">{item.title}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex gap-3">
            <Button href="/contact">Talk to us</Button>
            <Button href="/insights" variant="secondary">
              Read Insights
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
