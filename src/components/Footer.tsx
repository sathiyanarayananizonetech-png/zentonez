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
  Youtube,
  MessageCircle,
} from "lucide-react";
import logo from "../assets/zentonez-logo.png";

const Footer: React.FC = () => {
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
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-background relative overflow-hidden pt-6 tb:pt-12 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        {/* ── Navigation Tier ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-2 dt:grid-cols-12 gap-x-4 gap-y-10 tb:gap-12 pb-6 tb:pb-12"
        >
          {/* Brand Info - Full width on smallest mobile, then grid */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 dt:col-span-4 space-y-3 tb:space-y-4 dt:pr-12"
          >
            <Link
              to="/"
              className="flex items-center gap-2 group w-fit mx-auto mb:mx-0"
            >
              <img
                src={logo}
                alt="Zentonez"
                className="h-7 tb:h-9 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-on-surface/70 leading-relaxed font-medium text-[11px] tb:text-[13px] text-center mb:text-left italic dt:max-w-xs px-4 mb:px-0">
              Where Beauty Meets Luxury. Zentonez is an exclusive women salon
              elevating the art of beauty through performance and soul.
            </p>
            <div className="flex space-x-3 pt-2 justify-center mb:justify-start">
              {[
                {
                  Icon: Instagram,
                  href: "https://instagram.com/zentonez",
                  label: "Instagram",
                },
                {
                  Icon: Facebook,
                  href: "https://facebook.com/zentonez",
                  label: "Facebook",
                },
                {
                  Icon: Youtube,
                  href: "https://youtube.com/@zentonez",
                  label: "YouTube",
                },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/919751231239",
                  label: "WhatsApp",
                },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 bg-secondary/5 text-[#C9A24A] rounded-xl hover:bg-[#C9A24A] hover:text-[#1A1A1A] transition-all duration-500 border border-[#C9A24A]/10 hover:border-[#C9A24A]/40 shadow-sm hover:shadow-luxury-gold"
                >
                  <Icon size={16} className="tb:w-5 tb:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Side-by-side on mobile */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 dt:col-span-2 flex flex-col items-center mb:items-start"
          >
            <h3 className="text-[8px] tb:text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-1.5 mb-3 w-full text-center mb:text-left">
              Explore
            </h3>
            <ul className="space-y-1.5 tb:space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex justify-center mb:justify-start"
                >
                  <Link
                    to={item.path}
                    className="group text-on-surface/80 hover:text-white transition-colors text-[8px] tb:text-[9px] font-black uppercase tracking-widest text-center mb:text-left"
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
            className="col-span-1 dt:col-span-3 flex flex-col items-center mb:items-start"
          >
            <h3 className="text-[8px] tb:text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-1.5 mb-3 w-full text-center mb:text-left">
              Services
            </h3>
            <ul className="space-y-1.5 tb:space-y-3">
              {[
                "Skin Care",
                "Facial Treatment",
                "Manicure & Pedicure",
                "Hair Spa",
                "Bridal Makeup",
                "Nails",
                "Lice Removal",
              ].map((s) => (
                <li
                  key={s}
                  className="text-on-surface/80 text-[8px] tb:text-[9px] font-black uppercase tracking-widest cursor-default text-center mb:text-left"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Full width on smallest mobile */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 dt:col-span-3 flex flex-col items-center mb:items-start"
          >
            <h3 className="text-[8px] tb:text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-1.5 mb-3 w-full text-center mb:text-left">
              Visit Us
            </h3>
            <ul className="space-y-2 tb:space-y-3 w-full flex flex-col items-center mb:items-start">
              <li className="flex flex-col mb:flex-row items-center mb:items-start gap-1.5 text-center mb:text-left">
                <MapPin className="text-[#C9A24A] shrink-0 w-2.5 h-2.5 tb:w-3 tb:h-3 tb:mt-0.5" />
                <span className="text-on-surface/80 text-[8px] tb:text-[10px] font-black uppercase tracking-widest">
                  Thillai Nagar, Trichy
                </span>
              </li>
              <div className="flex flex-row mb:flex-col gap-4 tb:gap-3 justify-center">
                <li className="flex flex-col mb:flex-row items-center mb:items-start gap-1.5 group cursor-pointer text-center mb:text-left">
                  <Phone className="text-[#C9A24A] w-2.5 h-2.5 tb:w-3 tb:h-3" />
                  <a
                    href="tel:9751231239"
                    className="text-on-surface/80 text-[8px] tb:text-[10px] group-hover:text-white transition-colors font-black uppercase tracking-widest"
                  >
                    9751231239
                  </a>
                </li>
                <li className="flex flex-col mb:flex-row items-center mb:items-start gap-1.5 group cursor-pointer text-center mb:text-left">
                  <Mail className="text-[#C9A24A] w-2.5 h-2.5 tb:w-3 tb:h-3" />
                  <a
                    href="mailto:zentonezsalon@gmail.com"
                    className="text-on-surface/80 text-[8px] tb:text-[10px] group-hover:text-white transition-colors font-black uppercase tracking-widest"
                  >
                    zentonezsalon@gmail.com
                  </a>
                </li>
              </div>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Tier ── */}
      <div className="relative border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col tb:flex-row justify-between items-center px-6 py-3 tb:py-5 gap-2 relative z-20">
          <p className="text-on-surface/40 text-[7px] tb:text-[9px] font-black uppercase tracking-[0.2em]">
            © 2025 Zentonez Beauty Salon. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 tb:gap-4 text-[7px] tb:text-[9px] uppercase font-black tracking-[0.2em] text-on-surface/40">
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
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.03] tb:opacity-5 translate-y-1/2">
          <h1 className="text-[14vw] tb:text-[15vw] font-black font-serif text-white/5 leading-none tracking-tighter">
            ZENTONEZ
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
