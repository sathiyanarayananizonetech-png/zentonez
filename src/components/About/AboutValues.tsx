import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Clock } from "lucide-react";
import interiorImage from "../../assets/hairspawebpimages/hairspa2.webp";

const AboutValues: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-hero italic text-on-surface mb-6">
            The Standards of <span className="text-primary">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-primary-container mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mb-12 sm:mb-20">
          {[
            {
              icon: <Award size={28} strokeWidth={1} />,
              title: "Artisanal Mastery",
              desc: "Every service is a unique ritual, crafted with high-precision techniques and a deep understanding of bespoke aesthetics.",
            },
            {
              icon: <ShieldCheck size={28} strokeWidth={1} />,
              title: "Sanctuary Standards",
              desc: "We adhere to medical-grade hygiene and safety protocols to ensure your well-being in a pristine environment.",
            },
            {
              icon: <Clock size={28} strokeWidth={1} />,
              title: "Bespoke Curation",
              desc: "We dedicate time to curate a personalized journey that celebrates your natural radiance and individual essence.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 sm:p-10 bg-surface-dim rounded-3xl sm:rounded-4xl border border-primary-container/20 text-center hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm border border-primary/20">
                {value.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif italic text-on-surface mb-3 sm:mb-4">
                {value.title}
              </h3>
              <p className="text-on-surface/80 font-sans leading-relaxed text-sm sm:text-base font-medium">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust section */}
        <div className="bg-surface-dim/30 rounded-4xl sm:rounded-5xl p-6 sm:p-12 md:p-16 border border-primary-container/20 shadow-sm relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div>
                <h4 className="text-2xl sm:text-3xl font-serif italic text-on-surface mb-4 sm:mb-6 underline decoration-primary-container underline-offset-8">
                  The Zentonez Core
                </h4>
                <p className="text-on-surface/80 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base italic font-serif font-medium">
                  "Excellence isn't an act; it's a habit born from consistent quality,
                  unwavering discipline, and a genuine passion for the art of beauty."
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm font-bold tracking-widest uppercase text-on-surface/60">
                {[
                  "Medical-Grade Sanctuary Hygiene",
                  "Internationally Certified Master Artisans",
                  "Premium Botanical Product Portfolio",
                  "Transparent & Ethical Aesthetic Curation",
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300 shrink-0" />
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 p-2 bg-primary/10 rounded-4xl sm:rounded-5xl shadow-2xl rotate-2 border border-primary/20">
                <img
                  src={interiorImage}
                  alt="Salon Hygiene"
                  className="rounded-3xl sm:rounded-5xl w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
