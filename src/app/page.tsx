import HeroSection from "@/components/sections/HeroSection";
import LogosBar from "@/components/sections/LogosBar";
import ValuePropsSection from "@/components/sections/ValuePropsSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SectorsSection from "@/components/sections/SectorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogosBar />
      <ValuePropsSection />
      <StatsSection />
      <ProductsSection />
      <ProcessSection />
      <SectorsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
