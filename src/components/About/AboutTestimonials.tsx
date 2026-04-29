import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  service: string;
  quote: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  // Bridal Makeup (10)
  {
    id: 1,
    name: "Priya Sharma",
    service: "Bridal Makeup",
    quote:
      "My bridal look was exactly what I dreamed of. Subtle, elegant, and lasted all day! Truly the best salon in Tamil Nadu.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: 2,
    name: "Anjali Nair",
    service: "Bridal Makeup",
    quote:
      "Zentonez made me feel like a queen on my wedding day. Their attention to detail is unmatched.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
  },
  {
    id: 3,
    name: "Meera Iyer",
    service: "Bridal Makeup",
    quote:
      "Exquisite makeup that felt like a second skin. Thank you for making my special day perfect.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
  },
  {
    id: 4,
    name: "Deepika R.",
    service: "Bridal Makeup",
    quote:
      "Professional, punctual, and highly skilled. My makeup was flawless under the lights.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepika",
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    service: "Bridal Makeup",
    quote:
      "They understood my style instantly. The heavy bridal look was handled with such grace.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    id: 6,
    name: "Kavitha V.",
    service: "Bridal Makeup",
    quote:
      "Simply magical. My husband couldn't take his eyes off me! Highly recommended for brides.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavitha",
  },
  {
    id: 7,
    name: "Rohini Singh",
    service: "Bridal Makeup",
    quote:
      "The airbrush finish was incredible. No smudging despite the humidity.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohini",
  },
  {
    id: 8,
    name: "Shalini M.",
    service: "Bridal Makeup",
    quote:
      "A true artist. The colors matched my saree perfectly. I felt so confident.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shalini",
  },
  {
    id: 9,
    name: "Janani K.",
    service: "Bridal Makeup",
    quote:
      "Best bridal experience ever. The pre-bridal sessions really made a difference.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Janani",
  },
  {
    id: 10,
    name: "Divya Balan",
    service: "Bridal Makeup",
    quote:
      "Thank you Zentonez for being part of my journey. The makeup was breathtaking.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Divya",
  },

  // Hair Spa (8)
  {
    id: 11,
    name: "Aishwarya L.",
    service: "Hair Spa",
    quote:
      "The most relaxing hair spa I've ever had. My hair feels so soft and manageable now.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aishwarya",
  },
  {
    id: 12,
    name: "Lakshmi P.",
    service: "Hair Spa",
    quote:
      "Deep conditioning ritual at Zentonez is a must-try. Fixed my dry ends completely.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lakshmi",
  },
  {
    id: 13,
    name: "Saritha G.",
    service: "Hair Spa",
    quote:
      "Premium products and amazing head massage. Totally worth the price.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saritha",
  },
  {
    id: 14,
    name: "Nandini J.",
    service: "Hair Spa",
    quote: "My scalp feels rejuvenated. The aromatic oils used were heavenly.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nandini",
  },
  {
    id: 15,
    name: "Gayathri S.",
    service: "Hair Spa",
    quote:
      "Expert staff who know exactly what your hair needs. Transformed my frizzy hair.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gayathri",
  },
  {
    id: 16,
    name: "Pavithra R.",
    service: "Hair Spa",
    quote:
      "A luxury experience from start to finish. My hair has never looked this shiny.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pavithra",
  },
  {
    id: 17,
    name: "Shanthi K.",
    service: "Hair Spa",
    quote:
      "The ambiance alone is so soothing. The spa treatment was the cherry on top.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shanthi",
  },
  {
    id: 18,
    name: "Vidhya M.",
    service: "Hair Spa",
    quote:
      "Gentle handling and effective results. Will definitely come back for another session.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vidhya",
  },

  // Skin Care (8)
  {
    id: 19,
    name: "Swathi B.",
    service: "Skin Care",
    quote:
      "My skin is glowing after the session! The customized facial was exactly what I needed.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Swathi",
  },
  {
    id: 20,
    name: "Madhu V.",
    service: "Skin Care",
    quote:
      "High-quality products and professional dermatological advice. Best skin care salon.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhu",
  },
  {
    id: 21,
    name: "Rekha S.",
    service: "Skin Care",
    quote:
      "Visible results in just one sitting. My acne marks have significantly faded.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rekha",
  },
  {
    id: 22,
    name: "Keerthi N.",
    service: "Skin Care",
    quote:
      "I love the organic masks they use. My sensitive skin felt so calm and refreshed.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Keerthi",
  },
  {
    id: 23,
    name: "Bhavana T.",
    service: "Skin Care",
    quote:
      "Clean environment and expert estheticians. My go-to place for monthly maintenance.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bhavana",
  },
  {
    id: 24,
    name: "Sandhya W.",
    service: "Skin Care",
    quote:
      "The hydration facial is a lifesaver for dry skin. Felt like a total reset.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandhya",
  },
  {
    id: 25,
    name: "Amrutha Q.",
    service: "Skin Care",
    quote:
      "The detan service worked wonders after my vacation. Highly effective.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amrutha",
  },
  {
    id: 26,
    name: "Latha P.",
    service: "Skin Care",
    quote:
      "Always professional and polite. My skin texture has improved so much.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Latha",
  },

  // Facial Treatment (8)
  {
    id: 27,
    name: "Maya D.",
    service: "Facial Treatment",
    quote:
      "The gold facial gave me an instant radiance. Perfect for festive seasons.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
  },
  {
    id: 28,
    name: "Indira K.",
    service: "Facial Treatment",
    quote:
      "Hydra-facial at Zentonez is world-class. My skin feels plump and youthful.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indira",
  },
  {
    id: 29,
    name: "Varsha S.",
    service: "Facial Treatment",
    quote:
      "They took the time to analyze my skin type before starting. Very thorough.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Varsha",
  },
  {
    id: 30,
    name: "Sindhu M.",
    service: "Facial Treatment",
    quote:
      "No redness or irritation. Just pure glow. The massage technique is excellent.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sindhu",
  },
  {
    id: 31,
    name: "Tanvi J.",
    service: "Facial Treatment",
    quote:
      "Brightening treatment that actually works. My face looks much more even-toned.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvi",
  },
  {
    id: 32,
    name: "Rithika P.",
    service: "Facial Treatment",
    quote:
      "Relaxing vibes and visible results. The anti-aging facial is phenomenal.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rithika",
  },
  {
    id: 33,
    name: "Kajal A.",
    service: "Facial Treatment",
    quote:
      "Premium service at reasonable prices. The fruit facial felt so natural.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kajal",
  },
  {
    id: 34,
    name: "Nisha L.",
    service: "Facial Treatment",
    quote: "Total rejuvenation. I walked out feeling 10 years younger!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
  },

  // Nails (8)
  {
    id: 35,
    name: "Sarah G.",
    service: "Nails",
    quote:
      "Best nail art in the city. The extensions are sturdy and look so natural.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 36,
    name: "Uma R.",
    service: "Nails",
    quote:
      "Gel polish that doesn't chip for weeks! Huge variety of colors to choose from.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Uma",
  },
  {
    id: 37,
    name: "Hema V.",
    service: "Nails",
    quote:
      "Precision and creativity at its best. My festive nail art was a hit.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hema",
  },
  {
    id: 38,
    name: "Monica D.",
    service: "Nails",
    quote:
      "Very hygienic and patient with intricate designs. Love my new nails.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Monica",
  },
  {
    id: 39,
    name: "Pooja C.",
    service: "Nails",
    quote: "Quick and efficient. The matte finish I got is simply stunning.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
  },
  {
    id: 40,
    name: "Ananya B.",
    service: "Nails",
    quote:
      "Luxury nail care. The hand massage after the manicure was so relaxing.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
  },
  {
    id: 41,
    name: "Swetha F.",
    service: "Nails",
    quote:
      "Perfect French tip! Very classy and clean work. Highly recommended.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Swetha",
  },
  {
    id: 42,
    name: "Aruna K.",
    service: "Nails",
    quote: "They use high-quality tools and polishes. My nails feel healthy.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aruna",
  },

  // Manicure Pedicure (4)
  {
    id: 43,
    name: "Geetha S.",
    service: "Manicure Pedicure",
    quote: "The pedicure felt like a mini-vacation for my feet. So smooth!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Geetha",
  },
  {
    id: 44,
    name: "Preethi H.",
    service: "Manicure Pedicure",
    quote:
      "Clean tools and relaxing soak. My hands and feet look groomed and pretty.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Preethi",
  },
  {
    id: 45,
    name: "Sumathi J.",
    service: "Manicure Pedicure",
    quote:
      "Excellent service. The paraffin wax treatment made my skin so soft.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumathi",
  },
  {
    id: 46,
    name: "Bindu M.",
    service: "Manicure Pedicure",
    quote:
      "Professional and thorough. Every bit of dead skin was gone. Amazing.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bindu",
  },

  // Lice Removal (4)
  {
    id: 47,
    name: "Chitra R.",
    service: "Lice Removal",
    quote:
      "Safe and effective for my daughter. Very patient and child-friendly staff.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chitra",
  },
  {
    id: 48,
    name: "Mala V.",
    service: "Lice Removal",
    quote:
      "The only salon that handles this professionally. 100% results in one sitting.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mala",
  },
  {
    id: 49,
    name: "Bala S.",
    service: "Lice Removal",
    quote:
      "Stress-free and painless. Thank you for solving this issue so quickly.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bala",
  },
  {
    id: 50,
    name: "Usha K.",
    service: "Lice Removal",
    quote: "Highly recommended for kids. Discreet and professional service.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Usha",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="shrink-0 w-[300px] sm:w-[350px] p-6 mx-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-luxury-soft transition-all duration-300 group gpu-accelerated will-change-transform"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 bg-[#B87333]/10">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-bold text-sm sm:text-base leading-none mb-1">
            {testimonial.name}
          </h4>
          <p className="text-[#B87333] text-[10px] uppercase font-bold tracking-widest">
            {testimonial.service}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={12} className="fill-[#B87333] text-[#B87333]" />
        ))}
      </div>

      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-[#B87333]/20 w-8 h-8 -z-10" />
        <p className="text-[#B87333] text-sm leading-relaxed italic font-medium">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="absolute inset-0 rounded-3xl group-hover:bg-[#B87333]/5 transition-colors pointer-events-none" />
    </motion.div>
  );
};

const AboutTestimonials: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const row1 = TESTIMONIALS.slice(0, 12);
  const row2 = TESTIMONIALS.slice(12, 24);

  return (
    <section className="py-20 sm:py-32 bg-surface-dim relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B87333] font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Voices of Elegance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif text-on-surface font-black uppercase italic leading-none"
          >
            Client <span className="text-[#B87333]">Stories</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#B87333]/30 mx-auto mt-8 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className={`flex ${isMobile ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4" : "overflow-hidden group"}`}>
          <motion.div
            animate={!isMobile ? { x: ["0%", "-50%"] } : {}}
            transition={!isMobile ? {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            } : {}}
            className={`flex ${isMobile ? "" : "hover:[animation-play-state:paused]"}`}
          >
            {isMobile ? (
              row1.map((t, i) => (
                <div key={i} className="snap-center">
                  <TestimonialCard testimonial={t} />
                </div>
              ))
            ) : (
              [...row1, ...row1].map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))
            )}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="hidden lg:flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Swipe Text */}
      <div className="lg:hidden text-center mt-10">
        <p className="text-on-surface/40 text-[10px] uppercase font-bold tracking-widest">
          Swipe to explore more stories
        </p>
      </div>
    </section>
  );
};

export default AboutTestimonials;
