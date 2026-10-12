import Image from "next/image";
import type { MediaAsset } from "@/content/media";

type EditorialImageProps = {
  image: MediaAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showCredit?: boolean;
};

export function EditorialImage({
  image,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  showCredit = true,
}: EditorialImageProps) {
  return (
    <figure className={`relative overflow-hidden bg-beige ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {showCredit ? (
        <figcaption className="pointer-events-none absolute bottom-3 left-3 rounded-sm bg-graphite/70 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-offwhite">
          {image.credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
