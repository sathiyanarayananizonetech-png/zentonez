import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SparkleHeading } from "../ui/SparkleHeading";

// --- Asset Imports ---
import bridal1 from "../../assets/bridal_makeup.png";
import bridal2 from "../../assets/bridal makeup2.png";
import hair1 from "../../assets/hair_styling.png";
import hair2 from "../../assets/services/serviceimg10.jpeg";
import makeup1 from "../../assets/makeup_artist.png";
import makeup2 from "../../assets/services/serviceimg7.jpeg";
import nails1 from "../../assets/nail_art.png";
import nails2 from "../../assets/services/nail.jpeg";
import skin1 from "../../assets/skin_care.png";
import skin2 from "../../assets/spa_treatment.png";
import transBefore from "../../assets/services/serviceimg1.jpeg";
import transAfter from "../../assets/bridal_makeup.png";
import mehendiBefore from "../../assets/services/serviceimg2.jpeg";
import mehendiAfter from "../../assets/bridal makeup2.png";

// New batch of imports for full utilization
import aboutHero from "../../assets/about_hero_headroom.jpeg";
import beautyDetails from "../../assets/beauty_details.png";
import beautyTreatment from "../../assets/beauty_treatment_hero.png";
import heroSalon from "../../assets/hero_salon.png";
import salonVessel from "../../assets/luxury_salon_vessel.png";
import salonInterior from "../../assets/salon_interior_luxury.png";
import service4 from "../../assets/services/serviceimg4.jpeg";
import service5 from "../../assets/services/serviceimg5.jpeg";
import service6 from "../../assets/services/serviceimg6.jpeg";
import service8 from "../../assets/services/serviceimg8.jpeg";
import service9 from "../../assets/services/seviceimg9.jpeg";

const galleryHero = heroSalon;

// --- Types ---
interface ImageItem {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
}

interface BeforeAfterItem {
  id: string;
  title: string;
  before: string;
  after: string;
}

// --- Data ---
const CATEGORIES = ["All", "Bridal", "Hair", "Makeup", "Nails", "Skincare"];

const GALLERY_IMAGES: ImageItem[] = [
  {
    id: "1",
    category: "Bridal",
    title: "Temple Tradition",
    description: "Authentic South Indian bridal styling with temple jewelry and jasmine.",
    url: bridal1,
  },
  {
    id: "2",
    category: "Hair",
    title: "Golden Cascades",
    description: "Honey-balayage with soft beach waves.",
    url: hair1,
  },
  {
    id: "3",
    category: "Makeup",
    title: "Celestial Glow",
    description: "High-definition editorial makeup featuring a dewy finish.",
    url: makeup1,
  },
  {
    id: "4",
    category: "Nails",
    title: "Minimalist Chic",
    description: "Contemporary nude palette with fine gold geometric lines.",
    url: nails1,
  },
  {
    id: "5",
    category: "Skincare",
    title: "Radiant Revive",
    description: "Deep hydration facial treatment for maximum luminosity.",
    url: skin1,
  },
  {
    id: "6",
    category: "Hair",
    title: "Modern Mane",
    description: "Precision bob cut with architectural layering.",
    url: hair2,
  },
  {
    id: "7",
    category: "Bridal",
    title: "Royal Maharani",
    description: "Classic red lehenga bridal look with kundan jewelry and matte makeup.",
    url: bridal2,
  },
  {
    id: "8",
    category: "Skincare",
    title: "Velvet Soft",
    description: "Anti-aging thermal mask session with collagen infusion.",
    url: skin2,
  },
  {
    id: "9",
    category: "Makeup",
    title: "Bridal Artistry",
    description: "Detailed traditional makeup application by our lead artist.",
    url: makeup2,
  },
  {
    id: "10",
    category: "Nails",
    title: "Crystal Accents",
    description: "Hand-painted nail art with precision crystal embellishments.",
    url: nails2,
  },
  {
    id: "11",
    category: "All",
    title: "Luxury Sanctuary",
    description: "Our high-end salon interior designed for your peace and beauty.",
    url: salonInterior,
  },
  {
    id: "12",
    category: "All",
    title: "Artisanal Details",
    description: "Every corner of our space reflects our commitment to beauty.",
    url: beautyDetails,
  },
  {
    id: "13",
    category: "Hair",
    title: "Sculpted Elegance",
    description: "Advanced hair sculpting and treatment by our masters.",
    url: service4,
  },
  {
    id: "14",
    category: "Skincare",
    title: "Holistic Rituals",
    description: "Experience the depth of our botanical skin treatments.",
    url: service5,
  },
  {
    id: "15",
    category: "Bridal",
    title: "The Ultimate Journey",
    description: "Detailed captures of our complete bridal transformations.",
    url: aboutHero,
  },
  {
    id: "16",
    category: "Makeup",
    title: "Precision Art",
    description: "Color and light working in harmony for the perfect finish.",
    url: service6,
  },
  {
    id: "17",
    category: "All",
    title: "Boutique Atmosphere",
    description: "Step into a world of curated luxury and artisanal care.",
    url: salonVessel,
  },
  {
    id: "18",
    category: "Skincare",
    title: "Deep Rejuvenation",
    description: "Restorative treatments for a lasting, healthy glow.",
    url: service8,
  },
  {
    id: "19",
    category: "Hair",
    title: "Signature Shine",
    description: "Healthy, luminous hair achieved through expert care.",
    url: service9,
  },
  {
    id: "20",
    category: "Makeup",
    title: "Glamour Redefined",
    description: "Bold looks for when you want to make an entrance.",
    url: beautyTreatment,
  },
];

const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Bridal Glow Transformation",
    before: transBefore,
    after: transAfter,
  },
  {
    id: "ba2",
    title: "Intricate Bridal Mehendi",
    before: mehendiBefore,
    after: mehendiAfter,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 }
  }
} as const;

// --- Components ---

const Lightbox = ({
  isOpen,
  onClose,
  image,
  onNext,
  onPrev
}: {
  isOpen: boolean;
  onClose: () => void;
  image: ImageItem | null;
  onNext: () => void;
  onPrev: () => void;
}) => (
  <AnimatePresence>
    {isOpen && image && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 touch-none"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-primary/20 rounded-full text-white backdrop-blur-md z-10 border border-primary/20"
        >
          <X size={24} />
        </motion.button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full aspect-3/4 flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) onPrev();
            else if (info.offset.x < -100) onNext();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={image.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover select-none"
            />
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/80 to-transparent">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{image.category}</p>
            <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{image.description}</p>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center gap-12">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onPrev} 
            className="p-4 bg-primary/10 rounded-full text-white hover:bg-primary/20 transition-colors border border-primary/20"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <div className="text-white/40 text-sm font-medium tracking-[0.2em]">TOUCH SWIPE</div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onNext} 
            className="p-4 bg-primary/10 rounded-full text-white hover:bg-primary/20 transition-colors border border-primary/20"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const BeforeAfterSlider = () => (
  <div className="py-12 space-y-8">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="px-6 space-y-2"
    >
      <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-primary/80">Transformations</h3>
      <h2 className="text-2xl font-bold text-on-surface">The Power of Process</h2>
    </motion.div>

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory px-6"
    >
      {BEFORE_AFTER_ITEMS.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className="min-w-[85vw] snap-center relative space-y-4"
        >
          <div className="flex gap-2 h-64">
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg border border-on-surface/5">
              <img src={item.before} alt="Before" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded-md text-[10px] text-white font-bold uppercase tracking-widest">Before</div>
            </div>
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg border border-on-surface/5">
              <img src={item.after} alt="After" className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 px-2 py-1 bg-primary/80 backdrop-blur-md rounded-md text-[10px] text-white font-bold uppercase tracking-widest">After</div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-base font-bold text-on-surface">{item.title}</h4>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export function GalleryMobileView() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const filteredImages = activeCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-background min-h-screen pb-40 lg:hidden overflow-x-hidden">
      {/* Premium Hero Section (Parallax Overlaid Style) */}
      <section 
        ref={heroRef}
        style={{ position: "relative" }}
        className="relative h-[110vh] w-full overflow-hidden flex flex-col items-center justify-center pt-20 -mt-24"
      >
        <motion.div 
          style={{ scale: backgroundScale, y: backgroundY, opacity: backgroundOpacity }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={galleryHero}
              alt="Gallery Hero"
              className="w-full h-full object-cover object-center motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/40 to-background shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 px-8 text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-[10px] uppercase font-black tracking-[0.3em]">
                Signature Collection
              </span>
            </motion.div>

            <h1 className="text-display font-pacifico text-slate-900 leading-[1.1] normal-case">
              <SparkleHeading text="The Art of" className="text-slate-900 text-2xl sm:text-3xl" />
              <div className="h-2" />
              <SparkleHeading
                text="Being You"
                className="text-primary text-3xl sm:text-4xl"
                sparkleScale={1.1}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-slate-600/80 text-[11px] font-medium leading-relaxed max-w-[240px] mx-auto"
            >
              Step into a world where precision meets passion. Our curated journey through the art of transformation.
            </motion.p>
          </div>

        </motion.div>
      </section>

        <div className="pt-12 pb-6 px-6 text-center space-y-1">
          <h1 className="text-2xl font-bold text-on-surface tracking-tight">Our Work</h1>
          <p className="text-primary font-medium uppercase tracking-[0.2em] text-[10px]">Real transformations</p>
          <div className="w-10 h-1 bg-primary mx-auto mt-2 rounded-full" />
        </div>

      {/* Horizontal Categories */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory px-6 py-6 items-center"
      >
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            variants={itemVariants}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`shrink-0 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 border-2 ${activeCategory === cat
                ? "bg-primary text-white border-primary shadow-[0_10px_25px_-5px_rgba(201,162,74,0.4)] scale-110 z-10"
                : "bg-primary/10 text-primary border-primary/20 hover:border-primary/40 hover:text-primary"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 px-3 py-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImageIndex(index)}
              whileTap={{ scale: 0.95 }}
              className="relative aspect-4/5 min-h-[220px] rounded-xl overflow-hidden shadow-sm group transition-transform bg-on-surface/5"
            >
              <motion.img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-4">
                <p className="text-white text-[10px] font-bold uppercase tracking-wider">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Before & After Section */}
      <BeforeAfterSlider />

      {/* Contact CTA Section */}
      <section className="relative mx-6 my-12 overflow-hidden rounded-[2.5rem] bg-primary shadow-2xl">
        <div className="relative z-10 p-10 py-16 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-black text-on-surface leading-tight">
              Start Your Journey <br /> <span className="text-white italic font-serif">to Radiance</span>
            </h2>
            <p className="text-on-surface/80 text-[13px] leading-relaxed max-w-[280px] mx-auto">
              Whether it's a timeless bridal look or a revitalizing treatment, our master artists are dedicated to perfecting every detail of your unique beauty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="btn-premium-gold shadow-2xl inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Lightbox */}
      <Lightbox
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        image={selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
