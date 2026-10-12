"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/content/navigation";
import { getFutureAppLinks } from "@/lib/apps";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const apps = getFutureAppLinks();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-graphite/10 bg-offwhite/90 backdrop-blur-md">
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${active ? "text-terracotta" : "text-graphite/80 hover:text-graphite"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {apps.firm ? (
            <a href={apps.firm} className="text-sm text-muted hover:text-graphite">
              Studio sign in
            </a>
          ) : null}
          <Button href="/for-customers" variant="secondary">
            Plan a project
          </Button>
          <Button href="/for-interior-firms">Join as a professional</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-graphite lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="text-lg leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </Container>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-graphite/10 bg-offwhite lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base text-graphite"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="py-3 text-base text-graphite">
              Contact
            </Link>
            <div className="mt-2 flex flex-col gap-2 pb-4">
              <Button href="/for-customers" variant="secondary">
                I’m planning a project
              </Button>
              <Button href="/for-interior-firms">I’m an interior professional</Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
