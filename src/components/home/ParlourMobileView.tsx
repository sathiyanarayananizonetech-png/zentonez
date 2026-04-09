import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Award,
  Shield,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import beautyDetails from "../../assets/beauty_details.png";
import homeHeroNew from "../../assets/home_hero_headroom.jpeg";

import { SparkleHeading } from "../ui/SparkleHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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

export function ParlourMobileView() {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen pb-24">
      {/* Immersive Mobile Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden flex flex-col items-center justify-center pt-20 mb-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={homeHeroNew}
              alt="Luxury Bridal Portrait"
              className="w-full h-full object-cover object-top transform scale-110 motion-safe:animate-[pulse_12s_ease-in-out_infinite]"
            />
          </motion.div>
          {/* Advanced Shade Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
        </div>

        <motion.div
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
              className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto shadow-sm"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#C9A24A]" />
              <span className="text-white text-[10px] uppercase font-black tracking-[0.4em]">
                Sanctuary of Self-Care
              </span>
            </motion.div>

            <h1 className="text-display font-pacifico leading-[1.1] normal-case drop-shadow-luxury">
              <SparkleHeading text="Unveil Your Most" className="text-white text-2xl sm:text-3xl" />
              <div className="h-1" />
              <SparkleHeading
                text="Radiant Essence"
                className="text-primary text-3xl sm:text-4xl"
                sparkleScale={1.1}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/80 text-[11px] font-medium leading-relaxed max-w-[240px] mx-auto"
            >
              Step into a world where precision meets passion. Our curated journey through the art of transformation.
            </motion.p>
          </div>

          <div className="flex flex-col items-center gap-8">
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
        </motion.div>
      </section>

      {/* New Section: Signature Rituals */}
      <section className="py-6 px-0 overflow-hidden">
        <div className="px-6 mb-6 text-center space-y-1">
          <span className="text-primary text-[9px] uppercase font-black tracking-[0.3em]">Curated Collections</span>
          <h2 className="text-2xl font-bold text-on-surface">Signature Rituals</h2>
          <p className="text-on-surface/60 text-[10px] max-w-[260px] mx-auto">Discover our most celebrated beauty experiences designed for lasting radiance.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-4 overflow-x-scroll no-scrollbar px-6 pb-4 snap-x snap-mandatory"
        >
          {[
            { title: "Bridal Sculpt", price: "₹24,999", img: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=400" },
            { title: "Radiant Skin", price: "₹4,499", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400" },
            { title: "Hair Couture", price: "₹6,999", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[280px] snap-center aspect-[4/5] rounded-3xl overflow-hidden relative group border border-on-surface/5"
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <div className="flex justify-between items-center text-white/80">
                  <span className="text-[10px] uppercase tracking-widest">Premium Ritual</span>
                  <span className="text-primary font-bold text-sm">Starts {item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-dim/30 py-6 px-6">
        <div className="mb-8 text-center space-y-1">
          <span className="text-primary text-[9px] uppercase font-black tracking-[0.3em]">Artisanal Care</span>
          <h2 className="text-2xl font-bold text-on-surface">Our Expertise</h2>
          <p className="text-on-surface/60 text-[10px] max-w-[260px] mx-auto">Masterful treatments using premium botanicals for your unique aesthetic journey.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.div
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            className="col-span-2 relative h-64 rounded-2xl overflow-hidden group shadow-md border border-white/40"
          >
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
              alt="Elite Styling"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] uppercase tracking-widest font-bold">Elite Styling</span>
              <h3 className="text-2xl font-bold">The Golden Cut</h3>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
            className="relative h-48 rounded-2xl overflow-hidden group shadow-sm border border-white/40"
          >
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=300"
              alt="Skin Glow"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold">Skin Glow</h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
            className="relative h-48 rounded-2xl overflow-hidden group shadow-sm border border-white/40"
          >
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=300"
              alt="Pure Mani"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold">Pure Mani</h3>
          </motion.div>
        </motion.div>

        <div className="mt-10">
          <Link to="/services">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold w-full"
            >
              Explore Full Menu
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* New Section: Zen Pillars */}
      <section className="py-6 px-6 bg-surface-dim/30">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 gap-4"
        >
          {[
            { icon: <Award className="text-primary mb-2" size={24} />, title: "Expert", desc: "Certified Artists" },
            { icon: <Shield className="text-primary mb-2" size={24} />, title: "Pure", desc: "Organic Products" },
            { icon: <Star className="text-primary mb-2" size={24} />, title: "Elite", desc: "Premium Service" }
          ].map((pill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center">{pill.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-tight">{pill.title}</h4>
              <p className="text-[9px] text-on-surface/50 mt-1 leading-tight">{pill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Zen Tonez Spirit */}
      <section className="bg-background py-10 px-6 relative overflow-hidden">
        <div className="text-center mb-16 space-y-2">
          <span className="text-primary text-[10px] uppercase font-black tracking-[0.3em]">Our Philosophy</span>
          <h2 className="text-3xl font-bold text-on-surface">The Spirit of Zen</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary/5 backdrop-blur-md p-8 pt-24 rounded-[2.5rem] border border-primary/20 shadow-lg relative z-10 text-center"
        >
          <p className="text-on-surface leading-relaxed mb-10 text-[15px] italic font-medium">
            "More than a salon, Zen Tonez is a sanctuary for those who appreciate the finer details of self-care and the art of individual expression."
          </p>
          <Link to="/about" className="inline-block">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold"
            >
              Discover Our Story
              <ArrowRight size={16} className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>

          {/* Floating Image - Centered and slightly moved up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-[6px] border-white shadow-luxury-deep z-20 luxury-float"
          >
            <img
              alt="Artisanal Details"
              src={beautyDetails}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-surface-dim/20 py-6 px-6">
        <div className="text-center mb-8 space-y-2">
          <span className="text-primary text-[10px] uppercase font-black tracking-[0.3em]">Visual Journey</span>
          <h2 className="text-3xl font-bold text-on-surface">Artistry in Motion</h2>
          <p className="text-on-surface/60 text-xs max-w-[260px] mx-auto">A glimpse into our world of bespoke transformations and creative precision.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 mb-10"
        >
          {[
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
          ].map((url, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={url} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-sm"
          >
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" alt="Work 3" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        <div className="text-center">
          <Link to="/gallery">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-primary font-black uppercase text-xs tracking-[0.2em] border-b-2 border-primary/20 pb-1"
            >
              View Entire Collection
            </motion.button>
          </Link>
        </div>
      </section>

      {/* New Section: Master Artists */}
      <section className="py-12 px-6 bg-surface-dim/40 rounded-t-[3rem] -mt-8 relative z-10 shadow-luxury-soft">
        <div className="text-center mb-6 space-y-2">
          <span className="text-primary text-[10px] uppercase font-black tracking-[0.3em]">The Master Artisans</span>
          <h2 className="text-3xl font-bold text-on-surface leading-tight">Elite <span className="italic font-serif text-primary">Artists</span></h2>
          <p className="text-on-surface/50 text-xs max-w-[200px] mx-auto">Internationally certified experts at your service.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { name: "Priya Raj", role: "Master Stylist", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=300" },
            { name: "Ananya", role: "Artistic Lead", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" }
          ].map((artist, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center space-y-3"
            >
              <div className="aspect-square rounded-full overflow-hidden border-2 border-primary/10 p-1">
                <img src={artist.img} alt={artist.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">{artist.name}</h4>
                <p className="text-[10px] text-primary uppercase font-black tracking-widest">{artist.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Hub - Centered Refinement */}
      <section className="py-6 px-6">
        <div className="bg-surface-dim/40 rounded-[2.5rem] p-8 py-12 space-y-10 shadow-xl border border-white relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12" />

          <div className="relative space-y-4">
            <h2 className="text-3xl font-serif italic text-primary">Find Your Tranquility</h2>
            <p className="text-on-surface/70 text-[13px] leading-relaxed font-medium max-w-[240px] mx-auto">Step into our sanctuary for a bespoke beauty experience tailored just for you.</p>
          </div>

          <div className="relative space-y-6 max-w-[240px] mx-auto">
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={16} />
              </div>
              <span className="text-[11px] font-medium text-on-surface text-left">Thillai Nagar, Trichy, Tamil Nadu</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={16} />
              </div>
              <span className="text-[11px] font-medium text-on-surface">+91 98765 43210</span>
            </div>
          </div>

          <Link to="/contact" className="relative block">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold w-full"
            >
              Secure Your Session
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
