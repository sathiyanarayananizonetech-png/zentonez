import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import salonInterior from "../../assets/salon_interior_luxury.png";

import { SparkleHeading } from "../ui/SparkleHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
} as const;

export function ContactMobileView() {
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

  return (
    <div className="bg-background text-on-surface antialiased pt-24 pb-32">
      {/* Hero Section (Parallax Overlaid Style) */}
      <section 
        ref={heroRef}
        style={{ position: "relative" }}
        className="relative h-[110vh] w-full overflow-hidden flex flex-col items-center justify-center -mt-24 mb-12"
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
              src={salonInterior}
              alt="Luxury Salon"
              className="w-full h-full object-cover object-center motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
            />
          </motion.div>
          {/* Shade Effect Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-background shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
        </motion.div>

        {/* Hero Content Overlaid */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 px-8 text-center space-y-8 -mt-28"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto shadow-sm"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#C9A24A]" />
              <span className="text-white text-[10px] uppercase font-black tracking-[0.3em]">
                Bespoke Beauty Experiences
              </span>
            </motion.div>

            <h1 className="text-display font-pacifico text-white leading-[1.1] normal-case drop-shadow-luxury">
              <SparkleHeading
                text="Reserve Your"
                className="text-white text-2xl sm:text-3xl"
              />
              <div className="h-1" />
              <SparkleHeading
                text="Session"
                className="text-primary text-3xl sm:text-4xl"
                sparkleScale={1.1}
              />
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="px-6 mb-16 relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full opacity-30 blur-3xl" />

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl space-y-8 border border-white/40 shadow-xl relative z-10"
        >
          <motion.div variants={itemVariants} className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Giselle Bennett"
              className="w-full bg-surface-dim/20 border-b-2 border-primary/40 focus:border-primary px-4 py-3 outline-none text-on-surface font-medium transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full bg-surface-dim/20 border-b-2 border-primary/40 focus:border-primary px-4 py-3 outline-none text-on-surface font-medium transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">
              Selected Service
            </label>
            <select className="w-full bg-surface-dim/20 border-b-2 border-[#C9A24A]/40 focus:border-[#C9A24A] px-4 py-3 outline-none text-[#2B2B2B] font-medium appearance-none">
              <option>Signature Silk Blowout</option>
              <option>Botanical Scalp Therapy</option>
              <option>Precision Couture Cut</option>
              <option>Artisanal Balayage</option>
            </select>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">
                Date
              </label>
              <input
                type="date"
                className="w-full bg-surface-dim/20 border-b-2 border-[#C9A24A]/40 focus:border-[#C9A24A] px-4 py-3 outline-none text-[#2B2B2B]"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">
                Time
              </label>
              <input
                type="time"
                className="w-full bg-surface-dim/20 border-b-2 border-[#C9A24A]/40 focus:border-[#C9A24A] px-4 py-3 outline-none text-[#2B2B2B]"
              />
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-premium-gold w-full mt-4"
          >
            Confirm Appointment
          </motion.button>
        </motion.form>
      </section>

      {/* Connect & Map Section (Light Theme Sync) */}
      <section className="bg-[#F4F1EC] pt-16 pb-24 rounded-t-[3rem] -mt-8 relative z-20 shadow-luxury-soft border-t border-[#C9A24A]/10">
        <div className="px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="italic font-serif text-3xl text-[#2B2B2B] leading-tight">
              Connect <br /> With <span className="text-[#C9A24A]">Us</span>
            </h2>
            <p className="text-[#2B2B2B]/60 text-sm max-w-xs font-medium">
              Visit our sanctuary in the heart of the city for a transformative
              beauty experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: <Phone size={20} />,
                label: "Call Us",
                value: "+91 98765 43210",
              },
              {
                icon: <Mail size={20} />,
                label: "Email Us",
                value: "concierge@zentonz.com",
              },
              {
                icon: <MapPin size={20} />,
                label: "Find Us",
                value: "Thillai Nagar, Trichy",
              },
            ].map((contact, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A] bg-[#C9A24A]/5 transition-transform group-hover:scale-110">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#2B2B2B]/40 font-bold">
                    {contact.label}
                  </p>
                  <p className="text-lg font-bold text-[#C9A24A] tracking-wider">
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Minimalist Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group grayscale brightness-90 contrast-125"
          >
            <motion.img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src={salonInterior}
              alt="Our Salon Interior"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#C9A24A]" />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-10 pt-8 border-t border-[#2B2B2B]/10"
          >
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Icon
                  size={24}
                  className="text-[#C9A24A] hover:scale-125 transition-all cursor-pointer active:scale-90"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
