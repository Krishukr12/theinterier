import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-offwhite py-28">
      <Container className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-terracotta">404</p>
        <h1 className="mt-4 font-serif text-4xl text-graphite">This page is not on the plan.</h1>
        <p className="mt-4 text-muted">
          The link may be out of date. Return home, or go to Insights, firms, or customers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Home</Button>
          <Button href="/insights" variant="secondary">
            Insights
          </Button>
        </div>
      </Container>
    </section>
  );
}
