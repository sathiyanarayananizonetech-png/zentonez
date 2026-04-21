import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import ChapterWebGLView from "./ChapterWebGLView";
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
  yShift?: number;
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
    objectPosition: "top",
    yShift: 0.05,
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
    objectPosition: "top",
    yShift: 0.05,
  },
  {
    id: "bridal",
    title: "Bridal Makeup",
    subtitle: "Bridal",
    img: bridalImage,
    text: "Look stunning on your special day with our professional bridal makeup services.",
    objectPosition: "top",
    yShift: 0.1, // Even more for bridal as it was specifically mentioned
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

const ChapterSection: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate progress for WebGL (0 at center, increased at edges)
  // We want the image to be "assembled" (0) when it's fully in view center,
  // and "exploded" (>0) when it's entering or leaving.
  const webGLProgress = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.8, 0.9, 1],
    [0.6, 0.2, 0, 0, 0.2, 0.6],
  );

  const isInView = useInView(sectionRef, { amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id={chapter.id}
      className="snap-section chapter-snap-section py-10 tb:py-0 overflow-hidden"
    >
      <div className="gallery-content-outer">
        <div className="gallery-image-wrapper relative bg-slate-100">
          <ChapterWebGLView
            imageSrc={chapter.img}
            progress={webGLProgress}
            isInView={isInView}
            objectPosition={chapter.objectPosition}
            yShift={chapter.yShift}
          />

          <div className="absolute top-6 tb:top-12 left-6 tb:left-12 z-20">
            <div className="inline-flex items-center gap-2 px-3 tb:px-4 py-1.5 tb:py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm backdrop-blur-md">
              <Sparkles size={12} />
              <span className="font-bold uppercase tracking-widest text-[8px] tb:text-[10px]">
                The Lookbook
              </span>
            </div>
          </div>
        </div>

        <div className="gallery-text-reveal pb-4 tb:pb-6">
          <h3 className="text-slate-900/40 font-mono text-[9px] tb:text-[10px] uppercase tracking-[0.4em] tb:tracking-[0.5em] mb-1 font-black">
            {chapter.subtitle}
          </h3>
          <h2 className="text-3xl tb:text-4xl dt:text-5xl xl:text-6xl font-black mb-1 tb:mb-2 leading-[0.9] uppercase font-serif text-slate-900">
            {chapter.title}
          </h2>
          <div className="h-1 w-16 tb:w-20 bg-primary mb-1 tb:mb-2 mx-auto" />
          <p className="text-base tb:text-xl dt:text-2xl opacity-70 leading-relaxed text-slate-900 px-4 mb:px-0 mb-3">
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
  );
};

const GalleryChapters: React.FC = () => {
  return (
    <main className="w-full relative z-10">
      <div className="portfolio-label translate-y-4 tb:translate-y-0">
        Signature Chapters
      </div>
      {chapters.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}
    </main>
  );
};

export default GalleryChapters;
