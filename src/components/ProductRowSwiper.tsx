import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/products";

interface ProductRowSwiperProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductRowSwiper({
  products,
  title,
  subtitle,
}: ProductRowSwiperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-mega-navy shadow-lg transition hover:bg-muted md:-left-2"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-thin [scroll-snap-type:x_mandatory] [&>*]:shrink-0 [&>*]:scroll-snap-align-start"
          style={{ scrollbarWidth: "thin" }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-[280px] sm:w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-mega-navy shadow-lg transition hover:bg-muted md:-right-2"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
