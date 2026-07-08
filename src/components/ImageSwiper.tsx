import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageSwiperProps {
  images: string[];
  alt?: string;
  className?: string;
  imageClassName?: string;
}

export function ImageSwiper({
  images,
  alt = "",
  className,
  imageClassName,
}: ImageSwiperProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <div
        className={cn(
          "aspect-square w-full overflow-hidden bg-white",
          imageClassName,
        )}
      >
        <img
          src={encodeURI(images[index])}
          alt={total > 1 ? `${alt} (${index + 1}/${total})` : alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain object-center"
        />
      </div>
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-mega-navy shadow-md transition hover:bg-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-mega-navy shadow-md transition hover:bg-white"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-6 bg-mega-navy"
                    : "w-2 bg-white/70 hover:bg-white"
                )}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
