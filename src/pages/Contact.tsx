import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Send, Clock, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, CustomEase);

interface ContactInfo { icon: React.ReactNode; title: string; content: string; }

const ContactInfoCard: React.FC<{ info: ContactInfo; idx: number }> = ({ info, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    gsap.to(cardRef.current, { rotateY: x * 12, rotateX: -y * 12, scale: 1.04, duration: 0.4, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.6, ease: "power2.out" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-start gap-3 sm:gap-4 p-5 sm:p-8 bg-white/40 backdrop-blur-md rounded-3xl sm:rounded-5xl border border-slate-900/5 shadow-sm cursor-pointer"
      >
        <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm text-primary shrink-0">
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

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <MapPin  size={20} />, title: "Our Address", content: "Thillai Nagar, Trichy, Tamil Nadu" },
    { icon: <Phone   size={20} />, title: "Call Us",     content: "+91 98765 43210" },
    { icon: <Mail    size={20} />, title: "Email Us",    content: "hello@zentonszbeauty.com" },
  ];

  return (
    <div className="overflow-x-hidden bg-white text-slate-900 font-sans selection:bg-primary-container relative min-h-screen">

      {/* Dust overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay z-9999"
        style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/white-dust-scratches-black-background_279525-2.jpg?w=640")', backgroundRepeat: "repeat" }} />

      {/* ─── HERO ─── */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-16 overflow-hidden bg-linear-to-b from-surface-dim to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/10 text-primary border border-primary-container/20 shadow-sm mb-6 sm:mb-10">
              <Sparkles size={14} />
              <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">Connect with us</span>
            </div>
            <h1 className="text-display font-black text-slate-900 mb-6 sm:mb-10 uppercase tracking-tighter italic font-serif">
              Let's Start Your <br />
              <span className="text-primary">Journey</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-600 leading-relaxed italic max-w-xl sm:max-w-2xl mx-auto">
              "We're here to answer your questions and help you book your next moment of self-care."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">

            {/* Left: Contact Details */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, i) => (
                  <ContactInfoCard key={i} info={info} idx={i} />
                ))}
              </div>

              {/* Hours card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-7 sm:p-10 bg-slate-900 text-white rounded-4xl sm:rounded-5xl relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5">
                  <Clock className="w-24 h-24 sm:w-32 sm:h-32" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black italic mb-6 sm:mb-8 border-b border-white/10 pb-4 uppercase font-serif">
                  Opening Hours
                </h4>
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex justify-between items-center">
                    <span className="text-white/60 font-medium tracking-widest uppercase text-[9px] sm:text-[10px]">Mon – Sat:</span>
                    <span className="text-white font-bold text-sm sm:text-base">10:00 AM – 08:30 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/60 font-medium tracking-widest uppercase text-[9px] sm:text-[10px]">Sunday:</span>
                    <span className="text-primary font-black italic text-sm sm:text-base">Closed</span>
                  </li>
                </ul>
                <div className="mt-8 sm:mt-12 flex gap-4 sm:gap-6">
                  {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      href="#"
                      aria-label={["Instagram","Facebook","Twitter"][idx]}
                      className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl hover:bg-primary transition-colors duration-300 tap-target"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/50 backdrop-blur-xl p-7 sm:p-12 md:p-16 rounded-4xl sm:rounded-[3.5rem] shadow-2xl border border-white/50 relative overflow-hidden">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center p-8 text-center rounded-4xl"
                  >
                    <div className="p-5 sm:p-6 bg-primary rounded-2xl sm:rounded-4xl text-white mb-6 sm:mb-8 shadow-xl shadow-primary/20">
                      <Sparkles size={40} />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black italic text-[#302b27] mb-4 font-serif uppercase leading-tight">
                      Message Received!
                    </h3>
                    <p className="text-slate-900/60 font-medium italic max-w-sm text-sm sm:text-base">
                      Our specialists will reach out to you within the hour for your transformation consultation.
                    </p>
                  </motion.div>
                )}

                <h3 className="text-section-title font-black italic mb-8 sm:mb-12 uppercase font-serif tracking-tight">
                  Send Us a <span className="text-primary">Note</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-slate-900/30 block px-3 sm:px-4">
                        Full Name
                      </label>
                      <input
                        type="text" required
                        className="w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/50 border border-[#302b27]/5 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-[#302b27]/20 font-bold text-sm sm:text-base"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-slate-900/30 block px-3 sm:px-4">
                        Phone Number
                      </label>
                      <input
                        type="tel" required
                        className="w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/50 border border-[#302b27]/5 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-[#302b27]/20 font-bold text-sm sm:text-base"
                        placeholder="+91 00000 00000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-slate-900/30 block px-3 sm:px-4">
                      Your Vision
                    </label>
                    <textarea
                      rows={5} required
                      className="w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/50 border border-[#302b27]/5 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-[#302b27]/20 font-bold resize-none text-sm sm:text-base"
                      placeholder="Share your beauty aspirations..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-premium-gold w-full flex items-center justify-center gap-3 py-5 sm:py-6 text-sm"
                  >
                    Send Mastery Request <Send size={16} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP PLACEHOLDER ─── */}
      <section className="h-[300px] sm:h-[400px] lg:h-[500px] mt-12 sm:mt-24 bg-white relative flex items-center justify-center overflow-hidden border-t border-[#302b27]/5">
        <div className="relative z-10 text-center px-4">
          <MapPin className="text-primary w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl font-black italic uppercase font-serif tracking-tight">Thillai Nagar, Trichy</h3>
          <p className="text-slate-900/30 uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mt-3 sm:mt-4 font-black italic">
            The Heart of Luxury
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #302b27 1px, transparent 1px), linear-gradient(to bottom, #302b27 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        <div className="absolute inset-0 bg-radial-to-c from-transparent to-white" />
      </section>
    </div>
  );
};

export default Contact;
