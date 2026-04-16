import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  SkinCare3D,
  Facial3D,
  ManiPedi3D,
  HairSpa3D,
  Bridal3D,
  Nails3D,
  LiceRemoval3D,
} from "../ui/ThreeDIcons";

const SERVICES_DATA = [
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    icon: <SkinCare3D />,
    color: "#FB7185", // Rose
    bgLight: "rgba(251, 113, 133, 0.05)",
  },
  {
    title: "Facial Treatment",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    icon: <Facial3D />,
    color: "#38BDF8", // Blue
    bgLight: "rgba(56, 189, 248, 0.05)",
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing nail care services.",
    icon: <ManiPedi3D />,
    color: "#FB923C", // Orange
    bgLight: "rgba(251, 146, 60, 0.05)",
  },
  {
    title: "Hair Spa",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    icon: <HairSpa3D />,
    color: "#0EA5E9", // Sky Blue
    bgLight: "rgba(14, 165, 233, 0.05)",
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services.",
    icon: <Bridal3D />,
    color: "#D97706", // Gold
    bgLight: "rgba(217, 119, 6, 0.05)",
  },
  {
    title: "Nails",
    desc: "Exquisite nail art and extensions to express your unique style.",
    icon: <Nails3D />,
    color: "#8B5CF6", // Purple
    bgLight: "rgba(139, 92, 246, 0.05)",
  },
  {
    title: "Lice Removal",
    desc: "Gentle and effective treatments to ensure a healthy, lice-free scalp.",
    icon: <LiceRemoval3D />,
    color: "#10B981", // Emerald
    bgLight: "rgba(16, 185, 129, 0.05)",
  },
];

const ServiceCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
}> = ({ title, desc, icon, color, bgLight }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for subtle tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Limited tilt (max 8 degrees) to keep text visible
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white border border-primary/10 p-6 sm:p-8 rounded-[2rem] text-center transition-all duration-500 hover:border-primary/30 flex flex-col h-full shadow-sm hover:shadow-2xl overflow-hidden"
    >
      {/* Subtle Hover Background Color */}
      <div 
        className="absolute inset-0 rounded-[2rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: bgLight }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Compact Icon Placement */}
        <div className="mb-6 flex justify-center translate-z-[30px]">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center p-1.5"
          >
            {icon}
          </motion.div>
        </div>

        <h3 
          className="text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-primary leading-tight"
          style={{ color: "var(--on-surface)" }}
        >
          {title}
        </h3>
        <p className="text-on-surface/70 text-sm sm:text-base leading-relaxed font-medium">
          {desc}
        </p>
        
        {/* Professional accent line */}
        <div className="mt-auto pt-6 flex justify-center">
          <div 
            className="h-0.5 w-10 rounded-full transition-all duration-500 opacity-20 group-hover:opacity-100 group-hover:w-16" 
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const AboutServicesGrid: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 dt:py-24 px-4 sm:px-6 bg-surface-dim relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] sm:text-xs mb-6 block">
            Experience Our Expertise
          </span>
          <h2 className="text-display italic text-on-surface">
            Our <span className="text-primary">Exclusive Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-16 sm:gap-y-20">
          {SERVICES_DATA.map((service, index) => {
            const isLastItem = index === SERVICES_DATA.length - 1;
            return (
              <div
                key={index}
                className={`${isLastItem ? "sm:col-span-2 lg:col-span-1 lg:col-start-2 sm:max-w-md sm:mx-auto lg:max-w-none" : ""}`}
              >
                <ServiceCard
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                  color={service.color}
                  bgLight={service.bgLight}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutServicesGrid;
