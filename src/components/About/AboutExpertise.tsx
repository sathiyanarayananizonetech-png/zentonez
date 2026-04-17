import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Award, PackageCheck, Thermometer } from "lucide-react";

export const AboutExpertise: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const standards = [
    {
      icon: <ShieldAlert size={isMobile ? 24 : 32} />,
      title: "Bio-Safe Hygiene",
      desc: "We use medical-grade autoclaves and hospital-level disinfectants for all tools, ensuring a 100% sterile experience every time."
    },
    {
      icon: <PackageCheck size={isMobile ? 24 : 32} />,
      title: "Premium Products",
      desc: "Our back-bar features exclusive brands like M.A.C, Estée Lauder, and Kerastase, chosen for their superior results and skin compatibility."
    },
    {
      icon: <Award size={isMobile ? 24 : 32} />,
      title: "Global Certification",
      desc: "Our artists are trained by international academies, bringing the latest global trends and techniques to your fingertips."
    },
    {
      icon: <Thermometer size={isMobile ? 24 : 32} />,
      title: "Safe Environment",
      desc: "Continuous air filtration and climate-controlled sessions to ensure your absolute comfort and safety."
    }
  ];

  return (
    <section className={`bg-surface-dim/30 text-on-surface relative overflow-hidden ${isMobile ? "py-24 px-8" : "py-32"}`}>
      <div className={`container mx-auto ${isMobile ? "" : "px-4 sm:px-6"}`}>
        <div className={`flex flex-col ${isMobile ? "items-start" : "lg:flex-row lg:justify-between lg:items-end"} mb-20 gap-8`}>
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Our Unwavering Standards
            </span>
            <h2 className={`${isMobile ? "text-3xl" : "text-hero"} leading-tight text-on-surface`}>
              Where Safety <br/> Meets <span className="text-primary underline decoration-primary/20 underline-offset-8">Artistry</span>
            </h2>
          </div>
          {!isMobile && (
            <p className="text-lg text-on-surface/60 max-w-sm lg:text-right font-medium">
              We go beyond beauty to ensure your peace of mind through rigorous discipline and elite care.
            </p>
          )}
        </div>

        <div className={`grid ${isMobile ? "grid-cols-1 gap-12" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"}`}>
          {standards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="space-y-6 group p-4 rounded-3xl transition-all duration-500 hover:bg-white/40 border border-transparent hover:border-white/60"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-on-surface">{item.title}</h3>
                <p className="text-on-surface/60 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
    </section>
  );
};

export default AboutExpertise;
