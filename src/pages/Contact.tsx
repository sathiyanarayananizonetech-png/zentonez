import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import ContactMap from "../components/Contact/ContactMap";
import { FloatingSocialMenu } from "../components/ui/FloatingSocialMenu";

const Contact: React.FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container relative min-h-screen">
      <ContactHero />

      {/* ─── CONTENT ─── */}
      <section className="py-8 tb:py-12 px-4 tb:px-6 dt:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 dt:grid-cols-3 gap-8 tb:gap-12 dt:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
      <FloatingSocialMenu />
    </div>
  );
};

export default Contact;
