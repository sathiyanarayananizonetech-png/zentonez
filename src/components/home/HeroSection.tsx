import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/hairwebp images/haircolor.webp";
import bridalImage from "../../assets/hairwebp images/butterfly cut.webp";
import hairImage from "../../assets/hairwebp images/shorthaircut.webp";
import skinImage from "../../assets/facialwebpimages/facial2.webp";
import spaImage from "../../assets/hairspawebpimages/hairspa1.webp";
import makeupImage from "../../assets/facialwebpimages/facial3.webp";
import nailImage from "../../assets/nailwebpimages/nail3.webp";
import liceImage from "../../assets/licewebpimages/lice4.webp";
import pedicureImage from "../../assets/pedicurewebpimages/manicure2.webp";
import interiorImage from "../../assets/hairspawebpimages/hairspa2.webp";
import { SparkleHeading } from "../ui/SparkleHeading";

const carouselImages = [
  heroImage,
  bridalImage,
  hairImage,
  skinImage,
  spaImage,
  makeupImage,
  nailImage,
  liceImage,
  pedicureImage,
  interiorImage,
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (previousIndex) => (previousIndex + 1) % carouselImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(217,195,165,0.3),transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.15),transparent_70%)] rounded-full blur-3xl" />
      </div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-32 tb:top-44 left-[5%] tb:left-[10%] text-primary opacity-30 hidden mb:block"
      >
        <Sparkles size={36} className="tb:hidden" />
        <Sparkles size={48} className="hidden tb:block" />
      </motion.div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 w-full grid grid-cols-1 dt:grid-cols-2 gap-8 dt:gap-12 items-center pt-32 pb-8 tb:pt-40 tb:pb-12 dt:pt-32 dt:pb-8 min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center dt:text-left pt-12 dt:pt-0"
        >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block font-bold">
              Zentonez - Exclusive Women Salon
            </span>
            <h1 className="text-display font-pacifico text-on-surface mb-4 tb:mb-6 mt-2 filter drop-shadow-xl normal-case">
              <SparkleHeading
                text="Where Beauty"
                className="text-on-surface/90"
              />
              <div className="h-4 tb:h-6" />
              <SparkleHeading
                text="Meets Luxury"
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-primary"
                sparkleScale={1.8}
              />
            </h1>

            <p className="text-sm mb:text-base tb:text-lg dt:text-xl text-on-surface/80 font-medium leading-relaxed max-w-xl mx-auto dt:mx-0 mb-8 tb:mb-10 px-4 mb:px-0">
              Experience premium skincare, bridal styling, and professional hair
              care — crafted exclusively for you, right here in Tamil Nadu.
            </p>

          <motion.div
            className="flex flex-col mb:flex-row items-center gap-4 mb:gap-6 justify-center dt:justify-start px-4 mb:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/book" className="w-full mb:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold w-full mb:w-auto px-6 py-3 mb:px-10 mb:py-4 text-[10px] mb:text-xs shadow-luxury-soft hover:shadow-luxury-deep"
              >
                Book Your Appointment →
              </motion.button>
            </Link>

            <Link to="/services" className="w-full mb:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline w-full mb:w-auto px-6 py-3 mb:px-10 mb:py-4 border-primary/30 text-primary text-[10px] mb:text-xs"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative block"
          style={{ perspective: 1000 }}
        >
          <div className="relative z-10 w-full aspect-square max-w-[280px] mb:max-w-sm tb:max-w-md dt:max-w-lg mx-auto rounded-3xl tb:rounded-4xl overflow-hidden shadow-luxury-deep border-4 border-white bg-surface">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={carouselImages[currentImageIndex]}
                alt={`Salon Hero ${currentImageIndex}`}
                fetchPriority="high"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl tb:rounded-3xl"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
