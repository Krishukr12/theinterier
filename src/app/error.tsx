"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-offwhite py-28">
      <Container className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-terracotta">Error</p>
        <h1 className="mt-4 font-serif text-4xl text-graphite">Something went wrong on this page.</h1>
        <p className="mt-4 text-muted">
          The page failed to render. You can try again, or return home. No form
          data is submitted from this screen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-sm bg-terracotta px-5 py-3 text-sm font-medium text-white hover:bg-terracotta-dark"
          >
            Try again
          </button>
          <Button href="/" variant="secondary">
            Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
