import { motion } from "framer-motion";
// Using the SVGs provided in the snippet
const SkinCareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF1F2" />
        <stop offset="100%" stopColor="#FB7185" />
      </linearGradient>
    </defs>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#skinGrad)" fillOpacity="0.9" />
    <path d="M12 19l-1.1-1C6.2 13.5 3 10.7 3 7.5 3 5.3 4.7 3.5 6.9 3.5c1.3 0 2.5.6 3.4 1.6l1.7 1.9 1.7-1.9c.9-1 2.1-1.6 3.4-1.6 2.2 0 3.9 1.8 3.9 4 0 3.2-3.2 6-7.9 10.5L12 19z" fill="white" fillOpacity="0.4" />
  </svg>
);

const FacialIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="facialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9" fill="url(#facialGrad)" fillOpacity="0.9" />
    <path d="M12 15c-2 0-3.5-1.5-3.5-3.5S10 8 12 8s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5z" fill="white" fillOpacity="0.3" />
    <circle cx="9" cy="11" r="1.5" fill="white" />
    <circle cx="15" cy="11" r="1.5" fill="white" />
    <path d="M10 16c1 1 3 1 4 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ManiPediIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="maniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FB923C" />
      </linearGradient>
    </defs>
    <path d="M18 11c-1.1 0-2 .9-2 2v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 3.3 2.7 6 6 6s6-2.7 6-6v-3c0-1.1-.9-2-2-2z" fill="url(#maniGrad)" fillOpacity="0.9" />
    <rect x="7" y="11" width="2" height="4" rx="1" fill="#EA580C" fillOpacity="0.6" />
    <rect x="11" y="9" width="2" height="4" rx="1" fill="#EA580C" fillOpacity="0.6" />
    <rect x="15" y="9" width="2" height="4" rx="1" fill="#EA580C" fillOpacity="0.6" />
  </svg>
);

const HairSpaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="spaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0F9FF" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#spaGrad)" fillOpacity="0.9" />
    <path d="M12 5l4 4a6 6 0 1 1-8 0z" fill="white" fillOpacity="0.4" />
  </svg>
);

const BridalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" fill="url(#crownGrad)" fillOpacity="0.9" />
    <rect x="5" y="17" width="14" height="2" rx="1" fill="#844D16" fillOpacity="0.3" />
    <circle cx="12" cy="11" r="1.5" fill="white" fillOpacity="0.6" />
  </svg>
);

const NailsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F3FF" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path d="M12 2C7 2 3 6 3 11v8c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-8c0-5-4-9-9-9z" fill="url(#nailGrad)" fillOpacity="0.9" />
    <path d="M7 11c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="14" r="3" fill="white" fillOpacity="0.2" />
  </svg>
);

const LiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="liceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0FDF4" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="url(#liceGrad)" fillOpacity="0.9" />
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SERVICES_DATA = [
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    icon: <SkinCareIcon />,
    color: "#FB7185",
    gradient: "linear-gradient(200deg, #FECDD3 0%, #FB7185 100%)",
  },
  {
    title: "Facial Treatment",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    icon: <FacialIcon />,
    color: "#38BDF8",
    gradient: "linear-gradient(200deg, #BAE6FD 0%, #38BDF8 100%)",
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing nail care services.",
    icon: <ManiPediIcon />,
    color: "#FB923C",
    gradient: "linear-gradient(200deg, #FED7AA 0%, #FB923C 100%)",
  },
  {
    title: "Hair Spa",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    icon: <HairSpaIcon />,
    color: "#0EA5E9",
    gradient: "linear-gradient(200deg, #BAE6FD 0%, #0EA5E9 100%)",
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services.",
    icon: <BridalIcon />,
    color: "#D97706",
    gradient: "linear-gradient(200deg, #FDE68A 0%, #D97706 100%)",
  },
  {
    title: "Nails",
    desc: "Exquisite nail art and extensions to express your unique style.",
    icon: <NailsIcon />,
    color: "#8B5CF6",
    gradient: "linear-gradient(200deg, #DDD6FE 0%, #8B5CF6 100%)",
  },
  {
    title: "Lice Removal",
    desc: "Gentle and effective treatments to ensure a healthy, lice-free scalp.",
    icon: <LiceIcon />,
    color: "#10B981",
    gradient: "linear-gradient(200deg, #A7F3D0 0%, #10B981 100%)",
  },
];

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const ServiceCard = ({ service, index }: { service: typeof SERVICES_DATA[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 25%"],
  });

  // Entry animation: translateX from left (-150) or right (150) to 0
  const xOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -150 : 150, 0]
  );
  
  // Opacity animation: 0 to 1
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  // Scale animation: 0.9 to 1.05
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);

  return (
    <div 
      className="sticky w-full mb-10 last:mb-0"
      style={{ top: `${index * 40 + 120}px`, zIndex: index }}
    >
      <motion.div
        ref={containerRef}
        style={{ 
          x: xOffset,
          opacity,
          scale,
          background: service.gradient,
        }}
        className="w-full overflow-hidden rounded-[30px] shadow-luxury transition-shadow duration-500 border border-white/10 p-6 sm:p-8 hover:shadow-luxury-deep hover:brightness-110 ring-primary/20 hover:ring-2"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-1 bg-white/10 rounded-2xl shadow-inner border border-white/20 backdrop-blur-sm">
              {service.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md leading-tight">
                {service.title}
              </h3>
              <div className="text-white/80 text-sm sm:text-base leading-relaxed font-medium border-t border-white/10 pt-4 mt-3">
                {service.desc}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AboutServicesGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-surface-dim relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20 sm:mb-32">
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] sm:text-xs mb-6 block">
            Experience Our Expertise
          </span>
          <h2 className="text-display text-on-surface">
            Our <span className="text-primary">Exclusive Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto mt-8 rounded-full" />
        </div>

        <div className="flex flex-col w-full max-w-3xl mx-auto pb-40">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServicesGrid;

