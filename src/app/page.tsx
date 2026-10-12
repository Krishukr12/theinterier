import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { EditorialImage } from "@/components/media/EditorialImage";
import { LeadPanel } from "@/components/sections/LeadPanel";
import { PlannedBadge, LiveBadge } from "@/components/ui/StatusNote";
import { faqs } from "@/content/faqs";
import { inspirationGallery, media } from "@/content/media";
import { brand, geography } from "@/content/site";

const customerSteps = [
  "Share project requirements.",
  "Discover suitable professionals.",
  "Explore proposals.",
  "Align on project scope.",
  "Coordinate milestones and approvals.",
];

const professionalSteps = [
  "Create a professional profile.",
  "See relevant project opportunities.",
  "Respond to enquiries.",
  "Share proposals and BOQs.",
  "Coordinate the project with the customer.",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-offwhite">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
              {brand.name} · {geography.initialCity} first
            </p>
            <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.12] tracking-tight text-graphite sm:text-5xl lg:text-[3.35rem]">
              Better interiors begin with a better way to work.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Discover the people, opportunities, and tools that bring interior
              projects together. {brand.name} is building a more connected
              ecosystem for interior professionals and the people they serve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/for-interior-firms" size="lg">
                I’m an Interior Professional
              </Button>
              <Button href="/for-customers" variant="secondary" size="lg">
                I’m Planning a Project
              </Button>
            </div>
            <p className="mt-6 max-w-lg text-sm text-muted">
              {brand.tagline} Early access is open for registrations and
              enquiries. Matching, proposals, and project tools are planned.
            </p>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              image={media.hero}
              priority
              className="aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Industry challenges"
            title="The work is already hard. The operating system around it is harder."
            description="Interior projects fail in the gaps between people: a lead that was never qualified, a quotation nobody can compare, a site instruction that lived only in a chat thread."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="bg-offwhite p-8">
              <h3 className="font-serif text-2xl text-graphite">For interior firms</h3>
              <ul className="mt-5 space-y-3 text-muted">
                <li>Inconsistent, poorly described leads that still demand a site visit.</li>
                <li>Follow-ups scattered across WhatsApp, Instagram, and email.</li>
                <li>Teams, vendors, and drawings that do not share one picture of the job.</li>
                <li>Quotations and BOQs that are difficult to version, explain, or reuse.</li>
                <li>Project coordination that depends on the founder being in every thread.</li>
              </ul>
            </article>
            <article className="bg-graphite p-8 text-offwhite">
              <h3 className="font-serif text-2xl">For customers</h3>
              <ul className="mt-5 space-y-3 text-beige/90">
                <li>Finding a professional whose work actually fits the city, home, and budget.</li>
                <li>Reading proposals that cannot be compared because the scope is different.</li>
                <li>Losing visibility once work starts: what was approved, what changed, what is next.</li>
                <li>Family decisions that reopen after production has already begun.</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container>
          <SectionHeading
            eyebrow={`${brand.name} ecosystem`}
            title="Two audiences. One clearer way to work together."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="flex flex-col bg-white">
              <EditorialImage image={media.worktable} className="aspect-[16/10]" showCredit={false} />
              <div className="flex flex-1 flex-col p-8">
                <LiveBadge />
                <h3 className="mt-4 font-serif text-3xl text-graphite">Interior firms and independent professionals</h3>
                <p className="mt-4 flex-1 text-muted">
                  Register early if you want a more organised path to relevant
                  opportunities, professional presentation, enquiry follow-up,
                  and later, quotations and coordination — without giving up
                  your independence.
                </p>
                <div className="mt-6">
                  <Button href="/for-interior-firms">Explore for firms</Button>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-white">
              <EditorialImage image={media.apartment} className="aspect-[16/10]" showCredit={false} />
              <div className="flex flex-1 flex-col p-8">
                <LiveBadge />
                <h3 className="mt-4 font-serif text-3xl text-graphite">Homeowners and commercial customers</h3>
                <p className="mt-4 flex-1 text-muted">
                  Share a project brief if you want help finding suitable
                  professionals, understanding proposals, and keeping a clearer
                  view of scope as work unfolds.
                </p>
                <div className="mt-6">
                  <Button href="/for-customers">Explore for customers</Button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="How it works"
              title="A calmer journey for both sides of the table."
              description="These steps describe the intended product. Enquiry collection is live; discovery, proposals, and milestone tools are planned."
            />
            <Button href="/how-it-works" variant="secondary">
              See the full journeys
            </Button>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <ol className="space-y-4">
              <li className="text-xs uppercase tracking-[0.2em] text-terracotta">Customers</li>
              {customerSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-t border-graphite/10 pt-4">
                  <span className="font-serif text-2xl text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-graphite">{step}</span>
                </li>
              ))}
            </ol>
            <ol className="space-y-4">
              <li className="text-xs uppercase tracking-[0.2em] text-terracotta">Professionals</li>
              {professionalSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-t border-graphite/10 pt-4">
                  <span className="font-serif text-2xl text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-graphite">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-20 text-offwhite">
        <Container>
          <SectionHeading
            invert
            eyebrow={`Why ${brand.name}`}
            title="Independence for professionals. Choice for customers. Order for the work in between."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Professional independence", "Studios keep their name, relationships, and way of designing."],
              ["Relevant opportunities", "The aim is fewer generic leads and more briefs that fit."],
              ["Customer choice", "People should be able to compare professionals, not be assigned one."],
              ["Clearer communication", "Approvals and changes should live somewhere both sides can see."],
              ["Organised workflows", "Enquiries, quotations, and milestones should not live only in chat."],
            ].map(([title, body]) => (
              <article key={title}>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-beige/80">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container>
          <SectionHeading
            eyebrow="Professional presentation"
            title="How interior firms and their work could be shown."
            description="This is an illustrative layout for future profiles. It is not a live directory, and it does not represent real partner studios or verification."
          />
          <div className="mt-4">
            <PlannedBadge />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { image: media.villa, title: "Residential practice", meta: "Illustrative profile" },
              { image: media.kitchen, title: "Kitchen and wardrobe studio", meta: "Illustrative profile" },
              { image: media.office, title: "Workplace interiors", meta: "Illustrative profile" },
            ].map((card) => (
              <article key={card.title} className="bg-white">
                <EditorialImage image={card.image} className="aspect-[4/3]" showCredit={false} />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-terracotta">{card.meta}</p>
                  <h3 className="mt-2 font-serif text-2xl text-graphite">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    Sample of how a city, typology, and selected rooms could be presented later. No studio is named or endorsed here.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Interior inspiration"
            title="Spaces the industry already knows how to make — if the work around them were clearer."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {inspirationGallery.map((item) => (
              <article key={item.title} className="group">
                <EditorialImage image={item.image} className="aspect-[4/5]" showCredit={false} />
                <h3 className="mt-3 font-serif text-xl text-graphite">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.caption}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-beige/50 py-20" id="enquire">
        <Container>
          <SectionHeading
            eyebrow="Lead generation"
            title="Tell us which side of the project you are on."
            description="These forms go to The Interier team when delivery is configured. They do not create an account or assign a professional."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <LeadPanel
              kind="professional"
              eyebrow="Professionals"
              title="Build your next chapter with The Interier."
              description="Register for early access if you run an interior studio, practice independently, or deliver turnkey interiors in India."
              submitLabel="Request professional access"
            />
            <LeadPanel
              kind="customer"
              eyebrow="Customers"
              title="Planning an interior project?"
              description="Share a brief for a home, office, or commercial space. We will follow up to understand the project. Matching is not live yet."
              submitLabel="Send project enquiry"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20" id="faq">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers while the product is still being built."
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      <section className="bg-terracotta py-20 text-white">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-white/80">Next step</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              The industry already has talent. It needs infrastructure.
            </h2>
            <p className="mt-4 text-white/90">
              Whether you design interiors or you are about to begin a project, start with a conversation. {brand.name} is listening from {geography.initialCity}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/for-interior-firms" variant="inverse">
              Join as a professional
            </Button>
            <Button href="/contact" variant="secondary" className="border-white/30 text-white ring-white/40 hover:bg-white/10">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
