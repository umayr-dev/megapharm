import { HeroBanner } from "@/components/HeroBanner";
import { HomeStatsBar } from "@/components/HomeStatsBar";
import { HomeProductsSection } from "@/components/HomeProductsSection";
import { HomeWhySection } from "@/components/HomeWhySection";
import { HomeCategoriesSection } from "@/components/HomeCategoriesSection";
import { HomeTrustSection } from "@/components/HomeTrustSection";
import { HomeCtaSection } from "@/components/HomeCtaSection";

export function Home() {
  return (
    <div>
      <HeroBanner />
      <HomeStatsBar />
      <HomeProductsSection />
      <HomeWhySection />
      <HomeCategoriesSection />
      <HomeTrustSection />
      <HomeCtaSection />
    </div>
  );
}
