import type { Metadata } from "next";
import Link from "next/link";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { articleCategories, articles, articlesByCategory } from "@/content/articles";
import { brand } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

type Search = { category?: string };

export const metadata: Metadata = {
  title: "Insights",
  description: `Editorial guides from ${brand.name} on interior planning, renovation, professional practice, and project management in India.`,
  alternates: { canonical: absoluteUrl("/insights") },
};

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const params = await searchParams;
  const category = articleCategories.find((item) => item === params.category);
  const list = articlesByCategory(category);

  return (
    <section className="bg-offwhite py-20">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-terracotta">Insights</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
          Clear writing for a messy industry.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Practical guides. No invented authors and no fabricated case studies.
          These pieces are editorial resources from {brand.name}.
        </p>

        <div className="mt-10 flex flex-wrap gap-2" role="navigation" aria-label="Article categories">
          <FilterChip href="/insights" active={!category}>
            All
          </FilterChip>
          {articleCategories.map((item) => (
            <FilterChip
              key={item}
              href={`/insights?category=${encodeURIComponent(item)}`}
              active={category === item}
            >
              {item}
            </FilterChip>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {list.map((article) => (
            <article key={article.slug} className="bg-white">
              <Link href={`/insights/${article.slug}`} className="block">
                <EditorialImage image={article.cover} className="aspect-[16/10]" showCredit={false} />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-terracotta">
                    {article.category} · {article.readingMinutes} min read
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-graphite">{article.title}</h2>
                  <p className="mt-3 text-sm text-muted">{article.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-10 text-muted">No articles in this category yet.</p>
        ) : null}
        <p className="mt-8 text-sm text-muted">{articles.length} guides currently published.</p>
      </Container>
    </section>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-sm px-3 py-1.5 text-sm ${active ? "bg-graphite text-offwhite" : "bg-white text-graphite ring-1 ring-graphite/10 hover:ring-graphite/30"}`}
    >
      {children}
    </Link>
  );
}
