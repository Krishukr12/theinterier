import Link from "next/link";

const variants = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark",
  secondary:
    "bg-transparent text-graphite ring-1 ring-inset ring-graphite/20 hover:ring-graphite/40 hover:bg-white",
  inverse:
    "bg-offwhite text-graphite hover:bg-white",
  ghost:
    "bg-transparent text-graphite hover:text-terracotta",
} as const;

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-[0.9375rem]",
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
