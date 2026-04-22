import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

import interiorImage from "../../assets/hairspawebpimages/hairspa2.webp";
import { ScrollReveal } from "./ScrollReveal";

const heritagePoints = [
  "5+ Years of Experience",
  "Exclusive Women Salon",
  "Premium Products Only",
  "Hygienic & Professional Standards",
  "Personalized Service",
  "Community-Focused",
];

export function AboutPreviewSection() {
  return (
    <section className="py-6 tb:py-10 dt:py-12 relative bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        <div className="grid grid-cols-1 dt:grid-cols-2 gap-8 tb:gap-12 dt:gap-16 items-center">
          <ScrollReveal>
            <div className="relative" style={{ perspective: "1500px" }}>
              <motion.div
                whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-10 rounded-3xl tb:rounded-5xl overflow-hidden shadow-2xl border-4 tb:border-8 border-white mx-4 mb:mx-0"
              >
                <img
                  src={interiorImage}
                  alt="Zentonez Luxury Interior"
                  loading="lazy"
                  className="w-full aspect-4/5 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-6 -right-2 tb:bottom-10 tb:-right-6 bg-surface/90 backdrop-blur-xl p-4 tb:p-6 rounded-xl tb:rounded-2xl shadow-2xl border border-white"
                >
                  <div className="flex items-center gap-3 tb:gap-4">
                    <div className="p-2 tb:p-3 bg-primary rounded-lg tb:rounded-xl text-white shadow-lg shadow-primary/20">
                      <Star size={20} />
                    </div>
                    <div>
                      <div className="text-lg tb:text-2xl font-bold text-on-surface">
                        5+ Years
                      </div>
                      <div className="text-[10px] text-on-surface/60 font-bold tracking-widest uppercase">
                        Expertise
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4 tb:space-y-6 px-4 mb:px-0 mt-6 dt:mt-0">
              <div className="inline-flex items-center gap-2 px-4 tb:px-6 py-2 rounded-full bg-secondary/20 text-primary border border-secondary/30 shadow-sm">
                <Heart size={14} />
                <span className="font-bold uppercase tracking-widest text-[9px] tb:text-[10px]">
                  Our Story
                </span>
              </div>

              <h2 className="text-hero font-black text-on-surface leading-[1.1] dt:leading-[0.9] uppercase tracking-tighter font-serif">
                A Dream Built on <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-tertiary">
                  Beauty & Passion
                </span>
              </h2>

              <p className="text-base tb:text-lg dt:text-xl text-on-surface/90 font-medium leading-relaxed">
                Founded in March 2025 by a seasoned makeup artist with over five
                years of expertise, Zentonez Beauty Salon was envisioned to bring
                refined luxury beauty within reach of every woman in Tamil Nadu,
                evolving seamlessly from a bespoke freelance journey into a
                full-service premium salon.
              </p>

              <div className="grid grid-cols-1 mb:grid-cols-2 gap-x-4 gap-y-3 tb:gap-y-4">
                {heritagePoints.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-on-surface/80 font-bold text-[10px] tb:text-sm uppercase tracking-widest"
                  >
                    <div className="w-4 h-4 tb:w-5 tb:h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg
                        className="w-2.5 h-2.5 tb:w-3 tb:h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 tb:pt-4">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold w-full mb:w-auto px-6 py-3 mb:px-8 mb:py-3.5 text-[10px] mb:text-xs"
                  >
                    Learn More About Us →
                  </motion.button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
