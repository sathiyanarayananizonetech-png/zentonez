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
          <p className="text-[#302b27] font-bold text-base tb:text-lg italic tracking-tight leading-tight wrap-break-word">
            {info.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {

  const [currentTime, setCurrentTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "2-digit",
        hour12: true,
        weekday: "short", // Added for status check
      });

      const parts = formatter.formatToParts(now);

      let hour12Str = "";
      let minStr = "";
      let secStr = "";
      let ampmStr = "";

      parts.forEach((p) => {

        if (p.type === "hour") hour12Str = p.value;
        if (p.type === "minute") minStr = p.value;
        if (p.type === "second") secStr = p.value;
        if (p.type === "dayPeriod") ampmStr = p.value;
      });

      // Set Clock String
      setCurrentTime(`${hour12Str}:${minStr}:${secStr} ${ampmStr}`);


    };

    updateTimeAndStatus();
    const interval = setInterval(updateTimeAndStatus, 1000); // Check every second for live clock
    return () => clearInterval(interval);
  }, []);

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

      {/* Hours card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-5 tb:p-10 bg-on-surface text-background rounded-3xl tb:rounded-4xl relative overflow-hidden shadow-luxury-deep"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 tb:mb-8 border-b border-white/10 pb-6">
          <h4 className="text-lg tb:text-2xl font-black italic uppercase font-h-primary m-0 shrink-0">
            Opening Hours
          </h4>
          <div className="flex flex-col items-start sm:items-end pointer-events-none">
            <div className="flex items-center gap-1.5 text-primary/40 mb-1">
              <Clock size={12} />
              <span className="text-[8px] tb:text-[9px] font-black uppercase tracking-[0.2em]">
                Live IST
              </span>
            </div>
            <div className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-lg tb:text-3xl font-black italic text-primary font-h-primary tracking-tight drop-shadow-lg tabular-nums">
                {currentTime.split(" ")[0]}
              </span>
              <span className="text-[9px] tb:text-xs font-bold uppercase tracking-widest text-primary/70 font-h-primary">
                {currentTime.split(" ")[1]}
              </span>
            </div>
          </div>
        </div>
        <ul className="space-y-4 tb:space-y-6">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
            <span className="text-primary font-medium tracking-widest uppercase text-[9px] tb:text-[10px] shrink-0">
              Mon – Sun:
            </span>
            <span className="text-green-400 font-bold text-sm tb:text-base whitespace-nowrap">
              10:00 AM – 08:30 PM
            </span>
          </li>
        </ul>
        <div className="mt-8 tb:mt-12 flex gap-4 tb:gap-6">
          {[Instagram, Facebook, Twitter].map((Icon, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="#"
              aria-label={["Instagram", "Facebook", "Twitter"][idx]}
              className="p-3 tb:p-4 bg-amber-50/10 rounded-xl tb:rounded-2xl hover:bg-primary transition-colors duration-300 tap-target"
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
