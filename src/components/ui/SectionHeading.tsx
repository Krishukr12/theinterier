type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-medium uppercase tracking-[0.22em] ${invert ? "text-beige/80" : "text-terracotta"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl ${invert ? "text-offwhite" : "text-graphite"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${invert ? "text-beige/90" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
