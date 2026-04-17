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
      className="rounded-3xl tb:rounded-5xl border border-transparent transition-colors duration-500"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-start gap-3 tb:gap-4 p-5 tb:p-8 bg-primary/5 backdrop-blur-sm rounded-3xl tb:rounded-5xl border border-primary/10 shadow-sm cursor-pointer will-change-transform backface-hidden"
      >
        <div className="p-3 tb:p-4 bg-primary/10 rounded-xl tb:rounded-2xl shadow-sm text-primary shrink-0 border border-primary/20">
          {info.icon}
        </div>
        <div className="min-w-0">
          <h4 className="text-slate-900/40 text-[9px] tb:text-[10px] uppercase tracking-[0.2em] mb-1 font-black leading-none">
            {info.title}
          </h4>
          <p className="text-[#302b27] font-bold text-base tb:text-lg tracking-tight leading-tight wrap-break-word">
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
      content: "Zentonez Beauty Salon, Thillai Nagar, Trichy, Tamil Nadu",
    },
    { icon: <Phone size={20} />, title: "Call Us", content: "9751231239 / 9344621878" },
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      content: "zentonezsalon@gmail.com",
    },
  ];

  return (
    <div className="lg:col-span-1 space-y-6 sm:space-y-10">
      <div className="space-y-4 tb:space-y-6">
        {contactInfoData.map((info, i) => (
          <ContactInfoCard key={i} info={info} idx={i} />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
