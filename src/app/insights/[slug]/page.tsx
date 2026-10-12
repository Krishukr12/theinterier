import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { articles, getArticle } from "@/content/articles";
import { brand } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: absoluteUrl(`/insights/${article.slug}`) },
    openGraph: {
      title: `${article.title} | ${brand.name}`,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.related
    .map((item) => getArticle(item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <article className="bg-offwhite pb-20">
      <Container className="py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
          <Link href="/insights">Insights</Link> · {article.category}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-graphite sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          Editorial guide · {article.readingMinutes} minute read · {brand.name}
        </p>
      </Container>
      <Container>
        <EditorialImage image={article.cover} className="aspect-[21/9] min-h-64" sizes="100vw" />
      </Container>
      <Container className="mt-12 max-w-3xl">
        <p className="text-lg leading-relaxed text-muted">{article.description}</p>
        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl text-graphite sm:text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <div className="mt-14 border border-graphite/10 bg-white p-8">
          <h2 className="font-serif text-2xl text-graphite">Continue with {brand.name}</h2>
          <p className="mt-3 text-muted">
            If you are planning a project, send a brief. If you run a studio, register for early access.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/for-customers">Plan a project</Button>
            <Button href="/for-interior-firms" variant="secondary">
              Join as a professional
            </Button>
          </div>
        </div>

        {related.length ? (
          <div className="mt-14">
            <h2 className="font-serif text-2xl text-graphite">Related guides</h2>
            <ul className="mt-4 space-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link className="text-terracotta hover:underline" href={`/insights/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </article>
  );
}
