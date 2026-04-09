import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

const AboutCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-surface-dim/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative bg-primary/5 rounded-4xl sm:rounded-[4rem] p-8 sm:p-16 md:p-20 overflow-hidden border border-primary/20 shadow-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-6 sm:space-y-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6 sm:mb-8 border border-primary/20 shadow-sm">
              <Sparkles size={32} />
            </div>
            <h2 className="text-hero italic text-on-surface">
              Begin Your Journey to <br />
              <span className="text-primary">Unrivaled Radiance</span>
            </h2>
            <p className="text-base sm:text-lg text-on-surface/60 font-sans max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of artisanal skill and modern
              luxury. Your transformation awaits at Zen Tonez.
            </p>
            <div className="pt-4 sm:pt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-12 sm:px-16 py-4"
                >
                  Book Your Appointment
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <Sparkles className="absolute top-8 right-8 text-primary-container/5 w-24 h-24 sm:w-40 sm:h-40" />
          <Heart className="absolute bottom-8 left-8 text-primary-container/5 w-24 h-24 sm:w-40 sm:h-40" />
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
