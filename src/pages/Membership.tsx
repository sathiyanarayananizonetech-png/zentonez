import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Star,
  Crown,
  Gift,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Zap,
} from "lucide-react";
import membershipCard from "../assets/membership_card.png";
import { InteractiveMembershipCard } from "../components/ui/InteractiveMembershipCard";
import { Reveal } from "../components/ui/Reveal";
import { Scene3D } from "../components/ui/Scene3D";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Membership: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container relative min-h-screen pb-20"
    >
      <Scene3D />
      
      {/* ─── HERO SECTION ─── */}
      <section 
        ref={containerRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
      >
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-slate-900" />
          <img
            src={membershipCard}
            alt="Membership Background"
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
          />
        </motion.div>

        <motion.div 
          style={{ y: contentY, opacity }}
          className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-white border border-primary/40 backdrop-blur-md shadow-sm mb-4">
                <Crown size={16} className="fill-current" />
                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">
                  Premium Loyalty Program
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] font-serif">
                  Zen Tonez{" "}
                  <span className="text-primary block">Membership</span>
                </h1>
                <p className="text-white/70 text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  The ultimate key to consistent beauty and luxury. Join our
                  exclusive inner circle and transform your salon experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-premium-gold px-12 py-5 text-sm shadow-2xl shadow-primary/20 group">
                  Join Now — ₹199/Year{" "}
                  <ArrowRight
                    size={18}
                    className="inline ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <InteractiveMembershipCard />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-5 lg:-right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl hidden sm:block z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none">
                      Instant
                    </p>
                    <p className="text-primary text-lg font-black uppercase tracking-tighter">
                      15% OFF
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── DETAILED BENEFITS ─── */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Parallax Element */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
          <Reveal width="100%" direction="up">
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter font-serif">
                Unrivaled <span className="text-primary">Privileges</span>
              </h2>
              <p className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto font-medium">
                Being a member at Zen Tonez is more than just a discount—it's a
                commitment to your long-term beauty journey.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Zap,
                title: "15% Flat Discount",
                desc: "Get an immediate 15% reduction on every service, from basic beauty to premium bridal packages.",
              },
              {
                icon: Clock,
                title: "Priority Booking",
                desc: "Skip the queue with exclusive access to priority time slots, even during peak festive seasons.",
              },
              {
                icon: Gift,
                title: "Birthday Rewards",
                desc: "Celebrate your special day with a complimentary surprise treatment or double discounts.",
              },
              {
                icon: ShieldCheck,
                title: "Valid for 365 Days",
                desc: "Enjoy your benefits all year round without any usage limits or blackout dates.",
              },
              {
                icon: Star,
                title: "Product Pre-release",
                desc: "Be the first to try our upcoming in-house performance-driven beauty product line.",
              },
              {
                icon: Sparkles,
                title: "Member Events",
                desc: "Invites to exclusive beauty workshops, masterclasses, and transformation sessions.",
              },
            ].map((benefit, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                direction="up"
                width="100%"
              >
                <div
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:rotate-12 transition-transform">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON SECTION ─── */}
      <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden relative">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.1 }}
          className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20vw] font-black text-primary pointer-events-none select-none whitespace-nowrap uppercase tracking-tighter"
        >
          Compare
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
          <Reveal width="100%" direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter font-serif">
                Comparison <span className="text-primary">Guide</span>
              </h2>
            </div>
          </Reveal>

          <Reveal width="100%" direction="up">
            <div 
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-6 lg:p-10 text-xs font-black uppercase tracking-widest">
                      Benefit
                    </th>
                    <th className="p-6 lg:p-10 text-xs font-black uppercase tracking-widest text-center bg-slate-800">
                      Guest
                    </th>
                    <th className="p-6 lg:p-10 text-xs font-black uppercase tracking-widest text-center text-primary bg-slate-900">
                      Zen Tonez Member
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      feature: "Service Pricing",
                      guest: "Standard",
                      member: "15% Discount",
                    },
                    { feature: "Yearly Fee", guest: "₹0", member: "₹199" },
                    {
                      feature: "Booking Priority",
                      guest: "Standard",
                      member: "Priority Lane",
                    },
                    {
                      feature: "Birthday Gift",
                      guest: "None",
                      member: "Included",
                    },
                    {
                      feature: "Product Early Access",
                      guest: "No",
                      member: "Yes",
                    },
                    { feature: "Usage Limit", guest: "N/A", member: "Unlimited" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="p-6 lg:p-10 text-sm font-bold text-slate-700">
                        {row.feature}
                      </td>
                      <td className="p-6 lg:p-10 text-sm font-medium text-slate-500 text-center">
                        {row.guest === "No" ? (
                          <X className="mx-auto text-slate-300" size={20} />
                        ) : (
                          row.guest
                        )}
                      </td>
                      <td className="p-6 lg:p-10 text-sm font-black text-slate-900 text-center bg-primary/5">
                        {row.member === "Yes" ? (
                          <Check className="mx-auto text-primary" size={20} />
                        ) : (
                          row.member
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-8 mt-16">
            <Reveal width="100%" direction="left">
              <div 
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm h-full"
              >
                <h4 className="text-lg font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                  <Star size={20} className="text-primary" /> Pros of Membership
                </h4>
                <ul className="space-y-3">
                  {[
                    "Unbeatable ROI: Pays for itself in 1-2 visits",
                    "Consistent savings on all beauty routines",
                    "Feeling valued as a long-term partner",
                    "No hidden costs or complex tiers",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-sm font-medium text-slate-600 flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            
            <Reveal width="100%" direction="right">
              <div 
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm h-full"
              >
                <h4 className="text-lg font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                  <Star size={20} className="text-slate-400" /> Things to Consider
                </h4>
                <ul className="space-y-3">
                  {[
                    "One-time upfront fee of ₹199",
                    "Discount doesn't stack with other promos",
                    "Non-transferable to other individuals",
                    "Valid only at our signature locations",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-sm font-medium text-slate-600 flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── ELIGIBLE SERVICES ─── */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal width="100%" direction="left">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter font-serif leading-none">
                  Services <span className="text-primary">Covered</span>
                </h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  Your membership discount applies to almost our entire service
                  catalog. Whether it's a monthly refresh or a once-in-a-lifetime
                  transformation.
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Skin Care",
                    "Facial Treatment",
                    "Manicure & Pedicure",
                    "Hair Spa & Therapy",
                    "Bridal Makeup",
                    "Nail Artistry",
                    "Lice Removal",
                    "Hair Styling",
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 py-3 border-b border-slate-100"
                    >
                      <Check size={16} className="text-primary" />
                      <span className="text-sm font-bold text-slate-800">
                        {s}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal width="100%" direction="right">
              <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 text-white space-y-8 relative overflow-hidden group">
                <Sparkles
                  size={150}
                  className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors duration-700"
                />
                <h3 className="text-3xl font-serif font-black uppercase italic leading-none">
                  Ready to join the inner circle?
                </h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  Join thousands of women who have already unlocked the Zen Tonez
                  Membership experience. It's time to reward yourself.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    "Visit our salon in Trichy",
                    "Ask for the Membership Card",
                    "Unlock 15% OFF instantly"
                  ].map((step, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 cursor-default"
                    >
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black shadow-lg">
                        {i + 1}
                      </div>
                      <p className="text-sm font-bold">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Membership;
