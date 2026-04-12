import React from "react";
import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { ScrollReveal } from "../home/ScrollReveal";

import testimonal1 from "../../assets/testimonals/testimonal1.jpeg";
import testimonal2 from "../../assets/testimonals/testimonal2.jpeg";
import testimonal3 from "../../assets/testimonals/testimonal3.jpeg";

const TESTIMONIALS = [
  {
    quote:
      "Zentonez isn't just a parlour; it's an experience. The attention to detail and the hygiene standards are unparalleled in the city.",
    name: "Meera Krishnan",
    role: "Regular Client Since 2018",
    image: testimonal1,
  },
  {
    quote:
      "My bridal transformation was exactly what I dreamed of. They understood my vision and executed it with such precision.",
    name: "Ritika Singh",
    role: "Bridal Client 2023",
    image: testimonal2,
  },
  {
    quote:
      "The hair transition I received at Zentonez was beyond my expectations. The stylists are true artists who understand the weight of elegance.",
    name: "Ananya Iyer",
    role: "Signature Ritual Client",
    image: testimonal3,
  },
];

const AboutTestimonials: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <ScrollReveal>
            <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
              Voices of Radiance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic font-serif text-on-surface uppercase tracking-tight leading-none mb-6">
              Client <span className="text-primary">Stories</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </ScrollReveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 sm:p-10 bg-surface-dim/30 rounded-4xl sm:rounded-5xl border border-primary-container/20 relative group overflow-hidden hover:bg-surface-dim hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Background Accent Image (Faded) */}
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <img
                  src={t.image}
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="relative z-10">
                <Quote className="text-primary-container absolute top-0 right-0 w-8 h-8 opacity-40 group-hover:text-primary transition-colors duration-500" />

                {/* Avatar */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 p-1 bg-white/50 backdrop-blur-sm group-hover:border-primary transition-colors duration-500">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                <p className="text-base sm:text-lg font-serif italic text-on-surface/80 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                <h4 className="text-xl font-serif italic text-on-surface">
                  {t.name}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
