import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/facialwebpimages/facial1.webp";
import hairImage from "../../assets/hairwebp images/butterfly cut.webp";
import skinImage from "../../assets/facialwebpimages/facial2.webp";

const AboutTeam: React.FC = () => {
  const team2 = hairImage;

  return (
    <section className="py-10 sm:py-16 bg-surface-dim relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
              The Artisans
            </span>
            <h2 className="text-hero text-on-surface">
              Meet Our <span className="text-primary">Master Stylists</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-on-surface/60 font-sans max-w-xl">
            Curated experts committed to translating your inner beauty into an
            outward reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 dt:gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Priya Raj",
              role: "Master Makeup Artist",
              img: team1,
              bio: "Internationally certified, Priya specializes in high-definition bridal transformations.",
            },
            {
              name: "Ananya Sharma",
              role: "Senior Hair Stylist",
              img: team2,
              bio: "With 5 years of experience, Ananya is the architect of avant-garde hair design.",
            },
            {
              name: "Sanam Kapoor",
              role: "Skin Care Specialist",
              img: skinImage,
              bio: "Sanam combines holistic knowledge with modern technology for radiant results.",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
            <div className="relative rounded-4xl sm:rounded-5xl overflow-hidden mb-6 sm:mb-8 aspect-3/4 shadow-xl group-hover:shadow-2xl transition-all duration-700 max-w-[280px] sm:max-w-xs mx-auto">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-container mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm font-sans leading-relaxed text-slate-200">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div className="text-center text-on-surface">
                <h4 className="text-xl sm:text-2xl font-serif text-on-surface mb-1">
                  {member.name}
                </h4>
                <p className="text-[10px] sm:text-sm font-bold opacity-60 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
