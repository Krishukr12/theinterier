import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/content/navigation";
import { brand, geography } from "@/content/site";
import { getContactDetails } from "@/lib/site";

export function Footer() {
  const contact = getContactDetails();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-beige">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo invert href="/" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-beige/80">
            {brand.tagline} A connected ecosystem for interior professionals and
            the people they serve, beginning in {geography.initialCity}.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
          <FooterColumn title="Platform" items={footerNav.platform} />
          <FooterColumn title="Resources" items={footerNav.resources} />
          <FooterColumn title="Legal" items={footerNav.legal} />
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-beige/70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {brand.name}. All rights reserved.
        </p>
        <p>
          <a className="hover:text-offwhite" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          {" · "}
          <a className="hover:text-offwhite" href={`tel:${contact.phoneHref}`}>
            {contact.phone}
          </a>
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-beige/60">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-offwhite/90 hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
