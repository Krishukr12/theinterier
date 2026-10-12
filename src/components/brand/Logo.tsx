import Image from "next/image";
import Link from "next/link";
import { brand } from "@/content/site";

type LogoProps = {
  href?: string | null;
  className?: string;
  invert?: boolean;
};

export function Logo({ href = "/", className = "", invert = false }: LogoProps) {
  const image = (
    <Image
      src="/brand/the-interier-logo.svg"
      alt=""
      width={220}
      height={76}
      unoptimized
      priority
      className={`h-11 w-auto sm:h-12 ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );

  if (href === null) return image;
  return (
    <Link
      href={href}
      aria-label={`${brand.name} home`}
      className="inline-flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
    >
      {image}
    </Link>
  );
}
