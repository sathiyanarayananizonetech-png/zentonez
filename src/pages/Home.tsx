import { CommunityStatsSection } from "../components/home/CommunityStatsSection";
import { HeroSection } from "../components/home/HeroSection";
import { ParallaxServicesSection } from "../components/home/ParallaxServicesSection";
import { PromoQuoteSection } from "../components/home/PromoQuoteSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { AboutPreviewSection } from "../components/home/AboutPreviewSection";
import { PricingSection } from "../components/home/PricingSection";
function Home() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <CommunityStatsSection />
      <PricingSection />
      <ParallaxServicesSection />
      <PromoQuoteSection />
    </div>
  );
}

export default Home;
