import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Gallery.css";

const GalleryFooter: React.FC = () => {
  return (
    <footer className="snap-section flex flex-col items-center justify-center p-6 tb:p-8 bg-white/30">
      <Heart
        className="text-primary mb-6 tb:mb-8 animate-pulse w-12 h-12 tb:w-16 tb:h-16"
      />
      <h2 className="text-4xl tb:text-5xl dt:text-6xl xl:text-7xl font-black italic uppercase font-serif mb-8 tb:mb-12 text-center text-slate-900 leading-tight">
        End of <br /> Reflections
      </h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn-premium-gold px-10 tb:px-16 py-4 w-full mb:w-auto"
      >
        Restart Journey
      </motion.button>
    </footer>
  );
};

export default GalleryFooter;
