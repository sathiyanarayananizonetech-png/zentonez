import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import logo from "../assets/zentonsz.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <footer className="bg-background relative overflow-hidden pt-6 sm:pt-12 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Navigation Tier ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-10 sm:gap-12 pb-6 sm:pb-12"
        >
          {/* Brand Info - Full width on smallest mobile, then grid */}
          <motion.div 
            variants={itemVariants} 
            className="col-span-2 lg:col-span-4 space-y-3 sm:space-y-4 lg:pr-12"
          >
            <Link
              to="/"
              className="flex items-center gap-2 group w-fit mx-auto sm:mx-0"
            >
              <img
                src={logo}
                alt="Zen Tonez"
                className="h-7 sm:h-9 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-on-surface/70 leading-relaxed font-medium text-[11px] sm:text-[13px] text-center sm:text-left italic lg:max-w-xs px-4 sm:px-0">
              Elevating beauty with premium services and expert care. Your transformation is our passion.
            </p>
            <div className="flex space-x-2.5 pt-1 justify-center sm:justify-start">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  whileHover={{ y: -2, scale: 1.1 }}
                  key={i}
                  href="#"
                  className="p-1.5 bg-secondary/10 text-[#C9A24A] rounded-full hover:bg-[#C9A24A] hover:text-[#2B2B2B] transition-all duration-300 border border-[#C9A24A]/20"
                >
                  <Icon size={12} className="sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Side-by-side on mobile */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-2 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-1.5 mb-3 w-full text-center sm:text-left">
              Explore
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Story", path: "/about" },
                { label: "Our Work", path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.label} className="flex justify-center sm:justify-start">
                  <Link
                    to={item.path}
                    className="group text-on-surface/80 hover:text-white transition-colors text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-center sm:text-left"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Side-by-side on mobile */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-3 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-1.5 mb-3 w-full text-center sm:text-left">
              Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              {[
                "Bridal Makeup",
                "Hair Styling",
                "Skin Therapy",
                "Nail Art",
              ].map((s) => (
                <li
                  key={s}
                  className="text-on-surface/80 text-[8px] sm:text-[9px] font-black uppercase tracking-widest cursor-default text-center sm:text-left"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Full width on smallest mobile */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-1.5 mb-3 w-full text-center sm:text-left">
              Visit Us
            </h3>
            <ul className="space-y-2 sm:space-y-3 w-full flex flex-col items-center sm:items-start">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 text-center sm:text-left">
                <MapPin className="text-[#C9A24A] shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 sm:mt-0.5" />
                <span className="text-on-surface/80 text-[8px] sm:text-[10px] font-black uppercase tracking-widest">
                  Thillai Nagar, Trichy
                </span>
              </li>
              <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 justify-center">
                <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 group cursor-pointer text-center sm:text-left">
                  <Phone className="text-[#C9A24A] w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <a
                    href="tel:+919876543210"
                    className="text-on-surface/80 text-[8px] sm:text-[10px] group-hover:text-white transition-colors font-black uppercase tracking-widest"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 group cursor-pointer text-center sm:text-left">
                  <Mail className="text-[#C9A24A] w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <a
                    href="mailto:info@zentonez.com"
                    className="text-on-surface/80 text-[8px] sm:text-[10px] group-hover:text-white transition-colors font-black uppercase tracking-widest"
                  >
                    info@zentonez.com
                  </a>
                </li>
              </div>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Tier ── */}
      <div className="relative border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-3 sm:py-5 gap-2 relative z-20">
          <p className="text-on-surface/40 text-[7px] sm:text-[9px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Zen Tonez.
          </p>
          <div className="flex items-center gap-2 sm:gap-4 text-[7px] sm:text-[9px] uppercase font-black tracking-[0.2em] text-on-surface/40">
            <span className="hover:text-[#C9A24A] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="opacity-30">|</span>
            <span className="hover:text-[#C9A24A] cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>

        {/* Oversized Background Text - Subtler on mobile */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.03] sm:opacity-5 translate-y-1/2">
          <h1 className="text-[14vw] sm:text-[15vw] font-black font-serif italic text-white/5 leading-none tracking-tighter">
            ZENTONEZ
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
