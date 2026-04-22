import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import stylistImage from "../../assets/bridalwebpimages/stylistimg.webp";

const AboutStory: React.FC = () => {
  return (
    <section className="py-6 mb:py-8 tb:py-12 dt:py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb:px-6 tb:px-8 dt:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb:gap-8 tb:gap-10 dt:gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl sm:rounded-4xl overflow-hidden shadow-luxury-deep aspect-4/5 max-w-sm tb:max-w-md mx-auto">
              <img
                src={stylistImage}
                alt="Our Sanctuary"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block px-4 py-2 bg-secondary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-secondary/30">
              Our Journey
            </div>
            <h2 className="text-hero text-on-surface leading-none">
              A Dream Built on <br />
              <span className="text-primary">Passion</span> <br /> Since 2025
            </h2>
            <p className="text-base sm:text-lg text-on-surface/80 font-sans leading-relaxed">
              Founded in March 2025 by a seasoned makeup artist with over five
              years of expertise, Zentonez Beauty Salon was envisioned to bring
              refined luxury beauty within reach of every woman in Tamil Nadu,
              evolving seamlessly from a bespoke freelance journey into a
              full-service premium salon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-2">
              <div>
                <h4 className="text-lg sm:text-xl font-serif text-on-surface mb-2">
                  Our Vision
                </h4>
                <p className="text-sm text-on-surface/80 leading-relaxed font-medium">
                  To expand across Tamil Nadu as a trusted premium brand, making
                  luxury beauty services accessible to every woman.
                </p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif text-on-surface mb-2">
                  Our Mission
                </h4>
                <p className="text-sm text-on-surface/80 leading-relaxed font-medium">
                  Delivering high-quality service and personalized experiences,
                  while maintaining stringent hygiene standards and building our
                  own performance-driven product line.
                </p>
              </div>
            </div>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold px-8 py-3.5"
              >
                Discover Our Services
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
