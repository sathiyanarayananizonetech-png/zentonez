import { useEffect } from "react";
import type { FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesShowcase from "../components/Services/ServicesShowcase";
import BridalOffer from "../components/Services/BridalOffer";
import ServicesCTA from "../components/Services/ServicesCTA";
import { SocialSidebar } from "../components/ui/SocialSidebar";

const Services: FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000 relative">
      <div>
        <ServicesHero />
      </div>
      <div>
        <ServicesShowcase />
      </div>
      <div>
        <BridalOffer />
      </div>
      <div>
        <ServicesCTA />
      </div>
      <SocialSidebar />
    </div>
  );
};

export default Services;
