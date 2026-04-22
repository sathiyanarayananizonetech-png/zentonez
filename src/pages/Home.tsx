import { CommunityStatsSection } from "../components/home/CommunityStatsSection";
import { HeroSection } from "../components/home/HeroSection";
import { ParallaxServicesSection } from "../components/home/ParallaxServicesSection";
import { PromoQuoteSection } from "../components/home/PromoQuoteSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { PricingSection } from "../components/home/PricingSection";
import { SocialSidebar } from "../components/ui/SocialSidebar";

function Home() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container relative">
      <HeroSection />
      <ServicesSection />
      <CommunityStatsSection />
      <PricingSection />
      <ParallaxServicesSection />
      <PromoQuoteSection />
      <SocialSidebar />
    </div>
  );
}

export default Home;
