import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import bridalImage from "../../assets/hairwebp images/haircutv.webp";
import hairImage from "../../assets/hairwebp images/butterfly cut.webp";
import skinImage from "../../assets/facialwebpimages/facial1.webp";
import nailImage from "../../assets/nailwebpimages/nail1.webp";
import { ParallaxArrow } from "../ScrollParallaxCard/ParallaxArrow";
import { ScrollParallaxCard } from "../ScrollParallaxCard/ScrollParallaxCard";
import { ScrollReveal } from "./ScrollReveal";

const parallaxServices = [
  {
    title: "Bridal Makeup",
    description:
      "Exquisite bridal transformations tailored to your style. We make your special day truly unforgettable.",
    image: bridalImage,
    price: "Rs5000",
  },
  {
    title: "Hair Styling",
    description:
      "From trendy cuts to elegant updos, our expert stylists bring out the best in your hair.",
    image: hairImage,
    price: "Rs800",
  },
  {
    title: "Skin Care",
    description:
      "Revitalize your glow with customized facials designed for your unique skin type.",
    image: skinImage,
    price: "Rs1200",
  },
  {
    title: "Nail Art Studio",
    description:
      "Express your elegance with intricate nail art executed by our meticulous specialists.",
    image: nailImage,
    price: "Rs1500",
  },
];

export function ParallaxServicesSection() {
  return (
    <section className="py-6 tb:py-8 dt:py-10 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-4 tb:mb-6">
            <div className="inline-flex items-center gap-2 px-4 tb:px-6 py-2 rounded-full bg-secondary/10 text-primary border border-secondary/20 shadow-sm mb-4">
              <Sparkles size={14} />
              <span className="font-bold uppercase tracking-widest text-[9px] tb:text-[10px]">
                Our Full Portfolio
              </span>
            </div>
            <h2 className="text-section-title font-black text-on-surface mb-4 tb:mb-6 uppercase tracking-tighter italic font-serif leading-tight">
              Everything You Need to <br className="hidden tb:block" />
              <span className="text-primary">Shine Brighter</span>
            </h2>
            <p className="text-base tb:text-lg text-on-surface/80 max-w-xl tb:max-w-2xl mx-auto font-medium leading-relaxed px-4 mb:px-0">
              Explore our comprehensive collection of beauty therapies. From
              bridal masterpieces to routine pampering.
            </p>
          </div>
        </ScrollReveal>

        <div className="scroll-parallax-section">
          <h1 className="parallax-page__title">#EXPLORE</h1>
          <ParallaxArrow />
          <div className="parallax-content parallax-content--alternate parallax-content--padded">
            {parallaxServices.map((service, index) => (
              <ScrollParallaxCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-4 tb:mt-6 text-center px-4 mb:px-0">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold w-full mb:w-auto px-8 py-3.5"
              >
                View Detailed Service Menu
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
