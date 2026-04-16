import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesShowcase from "../components/Services/ServicesShowcase";

import ServicesCTA from "../components/Services/ServicesCTA";

const Services: React.FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000">
      <div className="order-1 dt:order-2">
        <ServicesHero />
      </div>
      <div className="order-2 dt:order-1">
        <ServicesShowcase />
      </div>
      <div className="order-3">
        <ServicesCTA />
      </div>
    </div>
  );
};

export default Services;
