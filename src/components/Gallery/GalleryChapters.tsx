import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Gallery.css";

// Assets
import bridalImage from "../../assets/hairwebp images/haircutv.webp";
import hairImage from "../../assets/hairwebp images/straighning.webp";
import skinImage from "../../assets/facialwebpimages/facial4.webp";
import spaImage from "../../assets/hairspawebpimages/hairspa2.webp";


const chapters = [
  {
    id: "bridal",
    title: "Bridal Artistry",
    subtitle: "Bridal",
    img: bridalImage,
    text: "Capturing the radiant essence of every bride through expert styling and meticulous artistry.",
  },
  {
    id: "hair",
    title: "Hair Mastery",
    subtitle: "Hair",
    img: hairImage,
    text: "Transformative hair care and styling rituals designed to reveal your hair's finest potential.",
  },
  {
    id: "skin",
    title: "Skin Radiance",
    subtitle: "Skin",
    img: skinImage,
    text: "Expert skin treatments and facials that nourish and restore your natural, luminous glow.",
  },
  {
    id: "nails",
    title: "Flawless Nails",
    subtitle: "Nails",
    img: spaImage,
    text: "Creative nail art and professional grooming to add the perfect finish to your look.",
  },
];

const GalleryChapters: React.FC = () => {
  return (
    <main className="w-full relative z-10">
      <div className="portfolio-label translate-y-4 tb:translate-y-0">Signature Chapters</div>
      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className="snap-section chapter-snap-section py-10 tb:py-0"
        >
          <div className="gallery-content-outer">
            <div className="gallery-image-wrapper">
              <img
                src={chapter.img}
                alt={chapter.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-primary-container) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary-container) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute top-6 tb:top-12 left-6 tb:left-12">
                <div className="inline-flex items-center gap-2 px-3 tb:px-4 py-1.5 tb:py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm">
                  <Sparkles size={12} />
                  <span className="font-bold uppercase tracking-widest text-[8px] tb:text-[10px]">
                    The Lookbook
                  </span>
                </div>
              </div>
            </div>

            <div className="gallery-text-reveal pb-12 tb:pb-20">
              <h3 className="text-slate-900/40 font-mono text-[9px] tb:text-[10px] uppercase tracking-[0.4em] tb:tracking-[0.5em] mb-3 tb:mb-4 font-black">
                {chapter.subtitle}
              </h3>
              <h2 className="text-4xl tb:text-5xl dt:text-6xl xl:text-7xl font-black mb-5 tb:mb-8 leading-[0.9] uppercase italic font-serif text-slate-900">
                {chapter.title}
              </h2>
              <div className="h-1 w-16 tb:w-20 bg-primary mb-5 tb:mb-8 mx-auto" />
              <p className="text-base tb:text-xl dt:text-2xl italic opacity-70 leading-relaxed text-slate-900 px-4 mb:px-0 mb-8">
                {chapter.text}
              </p>
              <div className="flex justify-center">
                <Link to="/book">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold px-8 py-3 text-xs"
                  >
                    Book Now →
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default GalleryChapters;
