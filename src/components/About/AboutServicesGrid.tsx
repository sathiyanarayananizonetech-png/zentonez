import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SkinCare3D,
  Facial3D,
  ManiPedi3D,
  HairSpa3D,
  Bridal3D,
  Nails3D,
  LiceRemoval3D,
} from "../ui/ThreeDIcons";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    icon: <SkinCare3D />,
    color: "#FB7185", // Rose
    gradient: "linear-gradient(200deg, #FECDD3 0%, #FB7185 100%)",
  },
  {
    title: "Facial Treatment",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    icon: <Facial3D />,
    color: "#38BDF8", // Blue
    gradient: "linear-gradient(200deg, #BAE6FD 0%, #38BDF8 100%)",
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing nail care services.",
    icon: <ManiPedi3D />,
    color: "#FB923C", // Orange
    gradient: "linear-gradient(200deg, #FED7AA 0%, #FB923C 100%)",
  },
  {
    title: "Hair Spa",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    icon: <HairSpa3D />,
    color: "#0EA5E9", // Sky Blue
    gradient: "linear-gradient(200deg, #BAE6FD 0%, #0EA5E9 100%)",
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services.",
    icon: <Bridal3D />,
    color: "#D97706", // Gold
    gradient: "linear-gradient(200deg, #FDE68A 0%, #D97706 100%)",
  },
  {
    title: "Nails",
    desc: "Exquisite nail art and extensions to express your unique style.",
    icon: <Nails3D />,
    color: "#8B5CF6", // Purple
    gradient: "linear-gradient(200deg, #DDD6FE 0%, #8B5CF6 100%)",
  },
  {
    title: "Lice Removal",
    desc: "Gentle and effective treatments to ensure a healthy, lice-free scalp.",
    icon: <LiceRemoval3D />,
    color: "#10B981", // Emerald
    gradient: "linear-gradient(200deg, #A7F3D0 0%, #10B981 100%)",
  },
];

const AboutServicesGrid: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const accordionsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!accordionsRef.current || !componentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: accordionsRef.current,
          pin: true,
          start: "top 10%",
          end: "+=500%", // More space for 7 services
          scrub: 1,
          anticipatePin: 1,
        },
        defaults: { ease: "none" }
      });

      // Collapse content and pull up the next one
      tl.to(".service-accordion .service-desc", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });

      tl.to(".service-accordion", {
        marginBottom: -15, // Tighter stacking
        scale: 0.95, // Subtle shrinking as they stack
        stagger: 0.5,
      }, "<");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={componentRef} 
      className="py-12 sm:py-20 dt:py-24 bg-surface-dim relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] sm:text-xs mb-6 block">
            Experience Our Expertise
          </span>
          <h2 className="text-display text-on-surface">
            Our <span className="text-primary">Exclusive Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto mt-8 rounded-full" />
        </div>

        <div 
          ref={accordionsRef} 
          className="flex flex-col items-center pb-[20vh]"
        >
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className="service-accordion w-full max-w-[600px] mb-10 overflow-hidden rounded-[25px] shadow-luxury-deep transition-all duration-300"
              style={{ 
                background: service.gradient,
                padding: "30px 30px 15px"
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header: Always Visible */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center p-1 bg-white/10 rounded-2xl shadow-inner border border-white/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Animated Body */}
                <div className="service-desc overflow-hidden">
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium pb-5 border-t border-white/10 pt-4">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Spacer to ensure scroll triggers correctly */}
      <div className="h-[20vh]" />
    </section>
  );
};

export default AboutServicesGrid;
