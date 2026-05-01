import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6000;
const TRANSITION_MS = 650;

const HERO_BASE =
  "bg-gradient-to-br from-mega-navy from-[8%] via-[#0c3566] via-45% to-[#13589c] to-[100%]";

export function HeroBanner() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = useMemo(
    () => [
      {
        headline: t("hero.headline"),
        subheadline: t("hero.subheadline"),
        cta: t("hero.shopNow"),
        to: "/products",
      },
      {
        headline: t("hero.slide2Headline"),
        subheadline: t("hero.slide2Subheadline"),
        cta: t("common.learnMore"),
        to: "/why-mega-pharm",
      },
      {
        headline: t("hero.slide3Headline"),
        subheadline: t("hero.slide3Subheadline"),
        cta: t("common.shopAll"),
        to: "/products",
      },
    ],
    [t, i18n.language],
  );

  const slide = slides[index];
  const slideCount = slides.length;

  const goTo = useCallback(
    (next: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setIndex(() => (next + slideCount) % slideCount);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [isTransitioning, slideCount]
  );

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slideCount),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, [slideCount]);

  return (
    <section
      className="relative isolate w-full max-w-[100vw] overflow-x-hidden"
      aria-roledescription="carousel"
    >
      <div
        className={cn(
          "relative flex min-h-[min(88vh,640px)] w-full max-w-full flex-col overflow-hidden rounded-none shadow-[0_20px_60px_-15px_rgba(8,30,64,0.45)] sm:rounded-b-2xl md:min-h-[min(78vh,600px)] lg:rounded-b-[2rem]"
        )}
      >
        <div className={cn("pointer-events-none absolute inset-0", HERO_BASE)} />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-[min(480px,50vh)] w-[min(480px,45vw)] max-w-[100%] translate-x-1/4 rounded-full bg-sky-400/15 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[min(440px,45vh)] w-[min(440px,40vw)] max-w-[100%] -translate-x-1/4 rounded-full bg-cyan-300/10 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_70%_45%,rgba(56,189,248,0.08),transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:max-w-7xl lg:px-10 lg:py-16 xl:px-12">
          <div
            key={index}
            className="max-w-2xl animate-hero-fade-up"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/95 ring-1 ring-white/15">
              <Sparkles className="h-3.5 w-3.5 text-sky-200/90" aria-hidden />
              {t("hero.badge")}
            </div>
            <h1 className="text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {slide.headline}
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
              {slide.subheadline}
              {index === 0 && (
                <sup className="ml-0.5 align-super text-sm font-medium text-sky-200/90">
                  +
                </sup>
              )}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-mega-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl"
              >
                <Link to={slide.to}>{slide.cta}</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-12 rounded-full px-6 font-medium text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/about">{t("nav.about")}</Link>
              </Button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white/25 sm:left-4 md:left-6"
          aria-label={t("hero.prevSlide")}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white/25 sm:right-4 md:right-6"
          aria-label={t("hero.nextSlide")}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/20 px-4 py-2.5 shadow-lg backdrop-blur-md ring-1 ring-white/10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 ease-out",
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/65"
              )}
              aria-label={t("hero.goToSlide", { n: i + 1 })}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
