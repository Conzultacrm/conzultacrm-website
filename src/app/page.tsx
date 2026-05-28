import HeroSection from "@/components/sections/HeroSection";
import ZohoAppsCarousel from "@/components/sections/ZohoAppsCarousel";
import ValuePropsSection from "@/components/sections/ValuePropsSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PostImplementationSection from "@/components/sections/PostImplementationSection";
import SectorsSection from "@/components/sections/SectorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ZohoAppsCarousel />
      <ValuePropsSection />
      <StatsSection />
      <ProductsSection />
      <ProcessSection />
      <PostImplementationSection />
      <SectorsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
