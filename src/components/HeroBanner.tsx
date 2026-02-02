import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 5500;
const TRANSITION_MS = 700;

export function HeroBanner() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      headline: t("hero.headline"),
      subheadline: t("hero.subheadline"),
      cta: t("hero.shopNow"),
      to: "/products",
      gradient: "from-mega-sky/40 via-mega-light to-mega-sky/20",
      accent: "bg-mega-navy",
    },
    {
      headline: "Support Your Microbiome",
      subheadline: "Probiotics you can trust",
      cta: t("common.learnMore"),
      to: "/why-mega-pharm",
      gradient: "from-mega-navy/90 via-mega-blue/80 to-mega-navy/90",
      accent: "bg-white",
    },
    {
      headline: "Wide Range of Solutions",
      subheadline: "From daily support to specialized formulas",
      cta: t("common.shopAll"),
      to: "/products",
      gradient: "from-mega-light via-white to-mega-sky/30",
      accent: "bg-mega-navy",
    },
  ];

  const slideCount = 3;
  const goTo = useCallback(
    (next: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setIndex((prev) => (next + slideCount) % slideCount);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [isTransitioning],
  );

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slideCount),
      SLIDE_DURATION_MS,
    );
    return () => clearInterval(id);
  }, [slideCount]);

  return (
    <section className="relative h-[min(85vh,560px)] w-full overflow-hidden rounded-b-2xl md:h-[min(75vh,520px)]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 flex flex-col justify-center px-6 py-12 transition-all duration-[700ms] ease-out md:flex-row md:items-center md:px-12 lg:px-16",
            `bg-gradient-to-r ${slide.gradient}`,
            i === index
              ? "translate-x-0 opacity-100"
              : i < index
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0",
          )}
          style={{ transitionProperty: "transform, opacity" }}
        >
          <div className="relative z-10 flex flex-1 flex-col justify-center">
            <h1
              className={cn(
                "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
                slide.accent === "bg-white" ? "text-white" : "text-mega-navy",
              )}
            >
              {slide.headline}
            </h1>
            <p
              className={cn(
                "mt-2 text-lg md:text-xl",
                slide.accent === "bg-white"
                  ? "text-white/90"
                  : "text-mega-navy/90",
              )}
            >
              {slide.subheadline}
              {i === 0 && <sup className="ml-0.5 text-sm">+</sup>}
            </p>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className={cn(
                  "transition-transform hover:scale-[1.02]",
                  slide.accent === "bg-white"
                    ? "bg-white text-mega-navy hover:bg-white/95"
                    : "bg-mega-navy hover:bg-mega-blue",
                )}
              >
                <Link to={slide.to}>{slide.cta}</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden flex-1 items-center justify-center md:flex">
            <div
              className="h-56 w-44 rounded-2xl bg-white/20 shadow-xl md:h-64 md:w-52"
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-mega-navy shadow-lg transition hover:bg-white md:left-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-mega-navy shadow-lg transition hover:bg-white md:right-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === index
                ? "w-8 bg-white"
                : "w-2 bg-white/60 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
