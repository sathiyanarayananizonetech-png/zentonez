import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { SparkleHeading } from "../ui/SparkleHeading";
import beautyHeroImage from "../../assets/beauty_treatment_hero.png";

const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start transform-gpu backface-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary border border-secondary/30 shadow-sm mb-5 backface-hidden"
          >
            <Sparkles size={14} />
            <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-hero font-pacifico text-on-surface mb-6 normal-case glow-text"
          >
            <SparkleHeading
              text="Luxury Beauty Services"
              className="text-on-surface"
            />
            <br />
            <SparkleHeading
              text="Tailored For You"
              className="text-primary"
              sparkleScale={1.3}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-on-surface/90 text-lg sm:text-xl md:text-2xl max-w-xl mb-8 sm:mb-12 leading-relaxed font-medium italic"
          >
            "From flawless makeup to rejuvenating skincare, we bring out your
            natural glow."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm"
              >
                Book Appointment
              </motion.button>
            </Link>
            <button
              onClick={() =>
                document
                  .querySelector(".services-arch")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm bg-primary/5 border-primary/30 text-primary hover:bg-primary/10 transition-all text-center"
              >
                View Services
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right – image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative will-change-transform transform-gpu backface-hidden"
        >
          <div className="relative rounded-4xl sm:rounded-5xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white/50 aspect-4/5 sm:aspect-square transform-gpu backface-hidden">
            <img
              src={beautyHeroImage}
              alt="Luxury Beauty Treatment"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
