import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const ContactHero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "2-digit",
        hour12: true,
      });

      const parts = formatter.formatToParts(now);
      let hour12Str = "", minStr = "", secStr = "", ampmStr = "";

      parts.forEach((p) => {
        if (p.type === "hour") hour12Str = p.value;
        if (p.type === "minute") minStr = p.value;
        if (p.type === "second") secStr = p.value;
        if (p.type === "dayPeriod") ampmStr = p.value;
      });

      setCurrentTime(`${hour12Str}:${minStr}:${secStr} ${ampmStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 tb:pt-36 pb-10 tb:pb-16 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        <div className="grid grid-cols-1 dt:grid-cols-2 gap-12 dt:gap-20 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center dt:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary border border-secondary/30 shadow-sm mb-6 tb:mb-10">
              <Sparkles size={14} />
              <span className="font-bold uppercase tracking-widest text-[9px] tb:text-[10px]">
                Connect With The Atelier
              </span>
            </div>
            <h1 className="text-display font-pacifico text-on-surface mb-6 tb:mb-10 normal-case leading-tight">
              Begin Your <br className="tb:block hidden" />
              <span className="text-primary">Transformation</span>
            </h1>
            <p className="text-base tb:text-lg dt:text-xl text-on-surface/90 leading-relaxed max-w-xl tb:max-w-2xl mx-auto dt:mx-0 font-medium px-4 mb:px-0">
              "Reach out to reserve your personalized ritual or to discover more about
              our high-performance beauty philosophy."
            </p>
          </motion.div>

          {/* Right Column: Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-6 tb:p-10 bg-white/80 backdrop-blur-xl rounded-3xl tb:rounded-[3rem] relative overflow-hidden shadow-luxury-deep border border-primary/20 group">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-110" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8 border-b border-primary/10 pb-8 relative z-10">
                <div>
                  <h4 className="text-xl tb:text-2xl font-black uppercase font-h-primary text-on-surface m-0 mb-2 leading-none">
                    Opening Hours
                  </h4>
                  <div className="h-1.5 w-12 bg-primary/30 rounded-full" />
                </div>

                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex flex-col items-center sm:items-end min-w-[140px] group/clock">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                      Live IST
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="text-2xl tb:text-3xl font-black text-on-surface font-h-primary tracking-tighter tabular-nums transition-transform duration-500 group-hover/clock:scale-105">
                      {currentTime.split(" ")[0]}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary font-h-primary">
                      {currentTime.split(" ")[1]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-primary/5 rounded-2xl border border-primary/10 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                      <Clock size={20} />
                    </div>
                    <span className="text-on-surface/60 font-black uppercase tracking-widest text-[10px] tb:text-xs">
                      Availability
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-on-surface font-black text-sm tb:text-base tracking-tight uppercase">
                      Mon – Sun
                    </p>
                    <p className="text-primary font-bold text-xs">
                      10:00 AM – 08:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 relative z-10">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" }
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    aria-label={item.label}
                    className="p-4 bg-white shadow-xl shadow-primary/5 border border-primary/10 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 tap-target text-primary"
                  >
                    <item.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
