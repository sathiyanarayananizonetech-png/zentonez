import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Clock,
} from "lucide-react";
import gsap from "gsap";

interface ContactInfoData {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoCard: React.FC<{ info: ContactInfoData; idx: number }> = ({
  info,
  idx,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    gsap.to(cardRef.current, {
      rotateY: x * 12,
      rotateX: -y * 12,
      scale: 1.04,
      duration: 0.4,
      ease: "power2.out",
      force3D: true,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      force3D: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        borderColor: "rgba(115, 92, 0, 0.4)",
        boxShadow: "0 0 20px rgba(115, 92, 0, 0.1)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      style={{ perspective: "1000px" }}
      className="rounded-3xl sm:rounded-5xl border border-transparent transition-colors duration-500"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-start gap-3 sm:gap-4 p-5 sm:p-8 bg-primary/5 backdrop-blur-sm rounded-3xl sm:rounded-5xl border border-primary/10 shadow-sm cursor-pointer will-change-transform backface-hidden"
      >
        <div className="p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl shadow-sm text-primary shrink-0 border border-primary/20">
          {info.icon}
        </div>
        <div className="min-w-0">
          <h4 className="text-slate-900/40 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-1 font-black leading-none">
            {info.title}
          </h4>
          <p className="text-[#302b27] font-bold text-base sm:text-lg italic tracking-tight leading-tight wrap-break-word">
            {info.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {
  const contactInfoData = [
    {
      icon: <MapPin size={20} />,
      title: "Our Address",
      content: "Thillai Nagar, Trichy, Tamil Nadu",
    },
    { icon: <Phone size={20} />, title: "Call Us", content: "+91 98765 43210" },
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      content: "hello@zentonszbeauty.com",
    },
  ];

  return (
    <div className="lg:col-span-1 space-y-6 sm:space-y-10">
      <div className="space-y-4 sm:space-y-6">
        {contactInfoData.map((info, i) => (
          <ContactInfoCard key={i} info={info} idx={i} />
        ))}
      </div>

      {/* Hours card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-7 sm:p-10 bg-on-surface text-background rounded-3xl sm:rounded-4xl relative overflow-hidden shadow-luxury-deep"
      >
        <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10">
          <Clock className="w-24 h-24 sm:w-32 sm:h-32 text-primary" />
        </div>
        <h4 className="text-xl sm:text-2xl font-black italic mb-6 sm:mb-8 border-b border-white/10 pb-4 uppercase font-serif">
          Opening Hours
        </h4>
        <ul className="space-y-4 sm:space-y-6">
          <li className="flex justify-between items-center">
            <span className="text-white/60 font-medium tracking-widest uppercase text-[9px] sm:text-[10px]">
              Mon – Sat:
            </span>
            <span className="text-white font-bold text-sm sm:text-base">
              10:00 AM – 08:30 PM
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-white/60 font-medium tracking-widest uppercase text-[9px] sm:text-[10px]">
              Sunday:
            </span>
            <span className="text-primary font-black italic text-sm sm:text-base">
              Closed
            </span>
          </li>
        </ul>
        <div className="mt-8 sm:mt-12 flex gap-4 sm:gap-6">
          {[Instagram, Facebook, Twitter].map((Icon, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="#"
              aria-label={["Instagram", "Facebook", "Twitter"][idx]}
              className="p-3 sm:p-4 bg-amber-50/10 rounded-xl sm:rounded-2xl hover:bg-primary transition-colors duration-300 tap-target"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
