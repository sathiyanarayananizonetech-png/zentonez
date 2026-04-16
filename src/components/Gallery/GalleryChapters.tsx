import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Gallery.css";

// Assets
import skinImage from "../../assets/facialwebpimages/facial1.webp";
import facialImage from "../../assets/facialwebpimages/facial2.webp";
import manicureImage from "../../assets/pedicurewebpimages/manicure1.webp";
import hairSpaImage from "../../assets/hairspawebpimages/hairspa1.webp";
import bridalImage from "../../assets/bridalwebpimages/bridal1.webp";
import nailImage from "../../assets/nailwebpimages/nail1.webp";
import liceImage from "../../assets/licewebpimages/lice1.webp";


interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  text: string;
  objectPosition?: string;
}

const chapters: Chapter[] = [
  {
    id: "skin",
    title: "Skin Care",
    subtitle: "Skin",
    img: skinImage,
    text: "Maintain radiant and healthy skin with our personalized skincare solutions.",
  },
  {
    id: "facial",
    title: "Facial Treatment",
    subtitle: "Facial Care",
    img: facialImage,
    text: "Refresh and rejuvenate your skin with our advanced facial therapies.",
  },
  {
    id: "pedicure",
    title: "Manicure & Pedicure",
    subtitle: "Hand & Foot Care",
    img: manicureImage,
    text: "Pamper your hands and feet with our relaxing nail care services.",
  },
  {
    id: "hairspa",
    title: "Hair Spa",
    subtitle: "Hair Services",
    img: hairSpaImage,
    text: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
  },
  {
    id: "bridal",
    title: "Bridal Makeup",
    subtitle: "Bridal",
    img: bridalImage,
    text: "Look stunning on your special day with our professional bridal makeup services.",
    objectPosition: "top",
  },
  {
    id: "nails",
    title: "Nails",
    subtitle: "Artistic Nails",
    img: nailImage,
    text: "Exquisite nail art and extensions to express your unique style.",
  },
  {
    id: "lice",
    title: "Lice Removal",
    subtitle: "Essential Care",
    img: liceImage,
    text: "Gentle and effective treatments to ensure a healthy, lice-free scalp.",
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
                style={{ objectPosition: chapter.objectPosition || "center" }}
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

            <div className="gallery-text-reveal pb-6 tb:pb-10">
              <h3 className="text-slate-900/40 font-mono text-[9px] tb:text-[10px] uppercase tracking-[0.4em] tb:tracking-[0.5em] mb-1 tb:mb-2 font-black">
                {chapter.subtitle}
              </h3>
              <h2 className="text-3xl tb:text-4xl dt:text-5xl xl:text-6xl font-black mb-2 tb:mb-3 leading-[0.9] uppercase italic font-serif text-slate-900">
                {chapter.title}
              </h2>
              <div className="h-1 w-16 tb:w-20 bg-primary mb-2 tb:mb-3 mx-auto" />
              <p className="text-base tb:text-xl dt:text-2xl italic opacity-70 leading-relaxed text-slate-900 px-4 mb:px-0 mb-4">
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
