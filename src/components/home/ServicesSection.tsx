import { motion } from "framer-motion";
import { Droplets, Heart, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import bridalImage from "../../assets/hairwebp images/haircutv.webp";
import hairImage from "../../assets/hairwebp images/butterfly cut.webp";
import skinImage from "../../assets/facialwebpimages/facial1.webp";
import spaImage from "../../assets/hairspawebpimages/hairspa1.webp";
import VoyageSlider from "../VoyageSlider/VoyageSlider";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    title: "Skin Care & Facial",
    description:
      "Glow from within with our expert facial and skin treatments",
    image: skinImage,
    icon: <Droplets size={24} />,
    buttonClass: "btn-premium-gold",
  },
  {
    title: "Hair Services",
    description:
      "Nourish, style, and restore your hair to its finest",
    image: hairImage,
    icon: <Scissors size={24} />,
    buttonClass: "btn-premium-gold",
  },
  {
    title: "Bridal Makeup",
    description:
      "Look absolutely radiant on your most special day",
    image: bridalImage,
    icon: <Heart size={24} />,
    buttonClass: "btn-premium-gold",
  },
  {
    title: "Nail Art & Beauty",
    description:
      "Finish your look with flawless nails",
    image: spaImage, // Assuming this is used for Nail Art if no specific nailImage import is active or needed
    icon: <Sparkles size={24} />,
    buttonClass: "btn-premium-gold",
  },
];

export function ServicesSection() {
  return (
    <section className="py-10 tb:py-20 dt:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 tb:mb-16 dt:mb-20">
            <h2 className="text-section-title font-black text-on-surface mb-4 tb:mb-6 uppercase tracking-tighter italic font-serif">
              What{" "}
              <span className="text-primary underline decoration-secondary/30 underline-offset-8">
                We Offer
              </span>
            </h2>
            <p className="text-base tb:text-lg text-on-surface/80 max-w-xl tb:max-w-2xl mx-auto font-medium leading-relaxed px-4 mb:px-0">
              From everyday glow to bridal perfection — Zentonez has you covered
              with expert treatments and premium products.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 sm:mt-12">
          <VoyageSlider slides={services} />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-16 lg:mt-20 text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold px-8 py-3.5"
              >
                View All Treatments
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
