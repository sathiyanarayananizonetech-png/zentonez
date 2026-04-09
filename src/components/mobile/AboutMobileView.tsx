import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Quote,
  Award,
  ShieldCheck,
  Clock,
  Users,
  GraduationCap,
  Package,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import AboutExpertise from "../About/AboutExpertise";

// Import assets
import team1 from "../../assets/makeup_artist.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import testimonal1 from "../../assets/testimonals/testimonal1.jpeg";
import testimonal2 from "../../assets/testimonals/testimonal2.jpeg";
import testimonal3 from "../../assets/testimonals/testimonal3.jpeg";

import { SparkleHeading } from "../ui/SparkleHeading";

import aboutHeroNew from "../../assets/about_hero_headroom.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 120 }
  }
} as const;

export function AboutMobileView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialImages = [testimonal1, testimonal2, testimonal3];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialImages.length]);

  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    handleInteraction();
  }, [handleInteraction, testimonialImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
    handleInteraction();
  }, [handleInteraction, testimonialImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    handleInteraction();
  };

  return (
    <div className="bg-background text-on-surface antialiased pt-24 pb-32">
      {/* Immersive Mobile Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden flex flex-col items-center justify-center -mt-24 mb-20 px-4">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={aboutHeroNew}
              alt="Luxury Interior"
              className="w-full h-full object-cover object-top transform scale-110 motion-safe:animate-[pulse_12s_ease-in-out_infinite]"
            />
          </motion.div>
          {/* Shade Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center space-y-6 px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mx-auto mb-2 shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#C9A24A]" />
            <span className="text-white text-[10px] uppercase font-black tracking-[0.3em]">
              Our Story & Essence
            </span>
          </motion.div>

          <h1 className="text-display font-pacifico leading-[1.0] normal-case drop-shadow-luxury">
            <SparkleHeading text="Crafting Boutique" className="text-white text-2xl sm:text-3xl" />
            <div className="h-2" />
            <SparkleHeading
              text="Beauty"
              className="text-primary text-3xl sm:text-4xl"
              sparkleScale={1.1}
            />
          </h1>

          <div className="pt-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold shadow-luxury-deep"
              >
                Book An Appointment
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="w-12 h-[1px] bg-white/20 mx-auto"
          />
        </motion.div>
      </section>

      {/* The Vision Section */}
      <section className="px-8 space-y-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 flex items-center justify-center text-[#C9A24A]">
              <Sparkles size={20} />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#C9A24A]">The Vision</h2>
          </div>
          <p className="text-lg leading-relaxed text-[#2B2B2B]/80 font-medium">
            Founded on the belief that beauty is an <span className="italic font-serif text-[#C9A24A]">intimate art form</span>, Zen Tonez was born to provide more than just services—we provide a sanctuary.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#E8E4DD]/30 p-8 rounded-3xl border border-white/40 space-y-6 shadow-sm"
        >
          <Quote size={32} className="text-[#C9A24A] opacity-20" />
          <p className="text-xl font-serif italic text-[#2B2B2B]/90 leading-tight">
            "Our mission is to unveil the radiant essence that already exists within every client who walks through our doors."
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#C9A24A]/30" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24A]">Our Philosophy</span>
          </div>
        </motion.div>
      </section>

      {/* Why We Stand Out (Timeline Data) */}
      <section className="bg-[#E8E4DD]/40 py-10 px-8 rounded-[3rem] mb-24 border border-white/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A] font-bold block mb-1">The Difference</span>
          <h2 className="text-2xl font-bold text-[#2B2B2B] leading-tight">Why We <span className="italic font-serif text-[#C9A24A]">Stand Out</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {[
            { icon: <Users size={20} />, title: "Largest Community", desc: "Connecting you with top beauty professionals." },
            { icon: <GraduationCap size={20} />, title: "Trained Masters", desc: "Skilled and certified international experts." },
            { icon: <Package size={20} />, title: "Branded Rituals", desc: "Premium products from trusted global brands." },
            { icon: <ShieldCheck size={20} />, title: "100% Hygienic", desc: "Medical-grade cleanliness for your safety." }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-[#C9A24A] shadow-sm shrink-0 border border-[#C9A24A]/20">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-[#2B2B2B]">{item.title}</h3>
                <p className="text-[#2B2B2B]/60 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Excellence Standards (Values) */}
      <section className="px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Standards of Excellence</span>
          <h2 className="text-2xl font-bold leading-tight">Our Core <span className="italic font-serif text-primary">Pillars</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { icon: <Award size={24} />, title: "Artisanal Excellence", desc: "Every service is a masterpiece, crafted with precision." },
            { icon: <ShieldCheck size={24} />, title: "Safe Sanctuary", desc: "Highest medical-grade sanitization protocols." },
            { icon: <Clock size={24} />, title: "Personalized Care", desc: "Bespoke rituals tailored uniquely to you." }
          ].map((value, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="p-8 bg-surface-dim/40 rounded-3xl border border-primary/20 space-y-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-sm border border-primary/20">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif italic">{value.title}</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expertise Section */}
      <AboutExpertise isMobile />

      {/* Artisans (Team) */}
      <section className="py-10 px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">The Master Artisans</span>
          <h2 className="text-3xl font-bold">Meet the <span className="italic font-serif text-primary">Experts</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {[
            { name: "Priya Raj", role: "Master Makeup Artist", img: team1 },
            { name: "Ananya Sharma", role: "Senior Hair Stylist", img: hairImage },
            { name: "Sanam Kapoor", role: "Skin Care Specialist", img: skinImage }
          ].map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{member.role}</p>
                  <h3 className="text-2xl font-serif italic text-white bg-primary/20 px-3 py-1.5 rounded-xl backdrop-blur-md shadow-lg border border-primary/20">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Carousel - Fixed for Maximum Visibility */}
      <section
        className="bg-[#E8E4DD] py-10 px-8 rounded-b-[4rem]"
        style={{ color: '#2B2B2B' }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
            style={{ color: '#C9A24A' }}
          >
            Client Love
          </span>
          <h2
            className="text-3xl font-bold italic font-serif leading-tight"
            style={{ color: '#2B2B2B' }}
          >
            Trust Built on <br />Results
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden relative aspect-square rounded-3xl shadow-2xl border border-white/10 group"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                src={testimonialImages[currentIndex]}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) nextSlide();
                  if (info.offset.x > 50) prevSlide();
                }}
                className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                alt={`Testimonial ${currentIndex + 1}`}
              />
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls - Moved to Bottom to avoid hiding text */}
          <div className="flex justify-center items-center gap-6 mt-12 pb-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 active:scale-95 transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dot Indicators - Fixed Colors */}
            <div className="flex items-center gap-3">
              {testimonialImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(i);
                  }}
                  className={`transition-all duration-300 rounded-full relative ${currentIndex === i
                      ? "w-8 h-2 bg-[#C9A24A]"
                      : "w-2 h-2 bg-[#2B2B2B]/20"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 active:scale-95 transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {!isAutoPlaying && (
            <p
              className="text-center text-[10px] uppercase tracking-widest mt-6 font-bold"
              style={{ color: 'rgba(43, 43, 43, 0.6)' }}
            >
              Manual Navigation Active
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-8 text-center bg-[#F4F1EC]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#2B2B2B] mb-6">Ready to <span className="italic font-serif text-[#C9A24A]">Transform?</span></h2>
          <p className="text-[#2B2B2B]/60 mb-10 max-w-xs mx-auto font-medium">Step into our sanctuary and let your radiant essence unfold.</p>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold w-full"
            >
              Book Your Ritual
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
