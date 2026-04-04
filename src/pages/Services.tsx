import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Scissors, Droplets, Heart } from "lucide-react";
import { SparkleHeading } from "../components/ui/SparkleHeading";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

// Assets
import bridalImage from "../assets/bridal_makeup.png";
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import makeupImage from "../assets/makeup_artist.png";
import nailImage from "../assets/nail_art.png";
import beautyHeroImage from "../assets/beauty_treatment_hero.png";

gsap.registerPlugin(ScrollTrigger, CustomEase);

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
  popular: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Bridal Transformation",
    category: "Makeup",
    description:
      "Our signature bridal service includes HD makeup, hairstyling, and draping. We craft the perfect base to ensure your beauty radiates from within.",
    price: "₹5000",
    image: bridalImage,
    icon: <Sparkles size={22} />,
    popular: true,
  },
  {
    id: 2,
    title: "Advanced Hair Styling",
    category: "Hair",
    description:
      "Professional cuts, vibrant global coloring, and deep conditioning treatments. Our stylists treat every strand as a thread in an elegant tapestry.",
    price: "₹1200",
    image: hairImage,
    icon: <Scissors size={22} />,
    popular: true,
  },
  {
    id: 3,
    title: "Radiance Skin Therapy",
    category: "Skin",
    description:
      "Customized facials using international products to restore your skin's health. Nurturing rituals reveal your skin's most authentic glow.",
    price: "₹1500",
    image: skinImage,
    icon: <Heart size={22} />,
    popular: false,
  },
  {
    id: 4,
    title: "Luxury Spa Rituals",
    category: "Spa",
    description:
      "Full body rejuvenation and relaxation therapies in a serene environment. Step into a world where time stops and healing begins.",
    price: "₹2500",
    image: spaImage,
    icon: <Droplets size={22} />,
    popular: false,
  },
  {
    id: 5,
    title: "Event HD Makeup",
    category: "Makeup",
    description:
      "Perfect for parties. Long-lasting, flawless finish for every occasion. Every look is a collaboration between our expertise and your unique expression.",
    price: "₹3000",
    image: makeupImage,
    icon: <Sparkles size={22} />,
    popular: true,
  },
  {
    id: 6,
    title: "Designer Nail Art",
    category: "Nails",
    description:
      "Creative extensions and intricate nail art designs by our master artists. Small canvases, massive impact for your personal style.",
    price: "₹1500",
    image: nailImage,
    icon: <Star size={22} />,
    popular: false,
  },
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bgColors = [
      "#F4F1EC",
      "#E8E4DD",
      "#F4F1EC",
      "#E8E4DD",
      "#F4F1EC",
      "#E8E4DD",
    ];

    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLImageElement>(".img-wrapper img");

      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
          const mainTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".arch",
              start: "top top",
              end: "bottom bottom",
              pin: ".arch__right",
              scrub: 1,
              anticipatePin: 1,
              fastScrollEnd: true,
              preventOverlaps: true,
            },
          });

          gsap.set(imgs, { opacity: 0, scale: 1.1, objectPosition: "0px 0%" });
          gsap.set(imgs[0], { opacity: 1, scale: 1 });

          imgs.forEach((img, index) => {
            const currentImage = img;
            const nextImage = imgs[index + 1]
              ? (imgs[index + 1] as HTMLImageElement)
              : null;
            const sectionTimeline = gsap.timeline();

            if (nextImage) {
              sectionTimeline
                .to(
                  "body",
                  {
                    backgroundColor: bgColors[index % bgColors.length],
                    duration: 1.2,
                    ease: "power1.inOut",
                  },
                  0,
                )
                .to(
                  currentImage,
                  {
                    opacity: 0,
                    scale: 0.9,
                    objectPosition: "0px 60%",
                    duration: 1.5,
                    ease: "power1.inOut",
                    force3D: true,
                  },
                  0,
                )
                .to(
                  nextImage,
                  {
                    opacity: 1,
                    scale: 1,
                    objectPosition: "0px 40%",
                    duration: 1.5,
                    ease: "power1.inOut",
                    force3D: true,
                  },
                  0,
                );
            }
            mainTimeline.add(sectionTimeline);
          });
        },
        "(max-width: 768px)": function () {
          gsap.set(imgs, { objectPosition: "0px 60%" });
          imgs.forEach((image, index) => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: image as Element,
                  start: "top-=70% top+=50%",
                  end: "bottom+=200% bottom",
                  scrub: true,
                },
              })
              .to(image as Element, {
                objectPosition: "0px 30%",
                duration: 5,
                ease: "none",
              })
              .to("body", {
                backgroundColor: bgColors[index % bgColors.length],
                duration: 1.5,
                ease: "power2.inOut",
              });
          });
        },
      });

      const handleMobileLayout = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const leftItems = gsap.utils.toArray<HTMLElement>(".arch__info");
        const rightItems = gsap.utils.toArray<HTMLElement>(".img-wrapper");
        if (isMobile) {
          leftItems.forEach(
            (item, i) => (item.style.order = (i * 2).toString()),
          );
          rightItems.forEach(
            (item, i) => (item.style.order = (i * 2 + 1).toString()),
          );
        } else {
          leftItems.forEach((item) => (item.style.order = ""));
          rightItems.forEach((item) => (item.style.order = ""));
        }
      };

      window.addEventListener("resize", handleMobileLayout);
      handleMobileLayout();
      return () => window.removeEventListener("resize", handleMobileLayout);
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000"
    >
      {/* Optimized Performance: Removed high-cost dust overlay and mix-blend-mode */}

      <style>{`
        /* ─── ARCH: Desktop pinned layout ─── */
        .arch {
          display: flex;
          gap: clamp(2rem, 5vw, 80px);
          justify-content: space-between;
          max-width: 1280px;
          margin-inline: auto;
          padding: clamp(1rem, 3vw, 2rem);
          position: relative;
        }

        .arch__left {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex: 1;
        }

        .arch__info {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding-right: clamp(0.5rem, 2vw, 2rem);
          padding-block: 2rem;
        }

        .arch__right {
          flex-shrink: 0;
          width: clamp(280px, 40vw, 560px);
          height: 100vh;
          position: relative;
        }

        .img-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          height: clamp(280px, 55vh, 500px);
          width: 100%;
          border-radius: clamp(1rem, 3vw, 2rem);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
          will-change: transform;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          will-change: opacity, transform;
        }

        .img-wrapper:hover img { transform: scale(1.05); transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); }

        /* ─── ARCH: Mobile stacked layout ─── */
        @media (max-width: 768px) {
          .arch {
            flex-direction: column;
            gap: 0;
            padding-inline: 1rem;
          }
          .arch__left,
          .arch__right { display: contents; }

          .arch__right .img-wrapper {
            position: static;
            transform: none;
            height: clamp(200px, 50vw, 340px);
            margin-bottom: 1.5rem;
            border-radius: 1.5rem;
          }

          .arch__info {
            min-height: auto;
            height: auto;
            padding: 2rem 0 3rem;
            place-items: start;
          }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center relative z-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start transform-gpu backface-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary border border-secondary/30 shadow-sm mb-5 backface-hidden"
            >
              <Sparkles size={14} />
              <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-hero font-pacifico text-on-surface mb-6 normal-case glow-text"
            >
              <SparkleHeading
                text="Luxury Beauty Services"
                className="text-on-surface"
              />
              <br />
              <SparkleHeading
                text="Tailored For You"
                className="text-primary"
                sparkleScale={1.3}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-on-surface/90 text-lg sm:text-xl md:text-2xl max-w-xl mb-8 sm:mb-12 leading-relaxed font-medium italic"
            >
              "From flawless makeup to rejuvenating skincare, we bring out your
              natural glow."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm"
                >
                  Book Appointment
                </motion.button>
              </Link>
              <button
                onClick={() =>
                  document
                    .querySelector(".arch")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-outline w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm bg-white text-center"
                >
                  View Services
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right – image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative will-change-transform transform-gpu backface-hidden"
          >
            <div className="relative rounded-4xl sm:rounded-5xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white/50 aspect-4/5 sm:aspect-square transform-gpu backface-hidden">
              <img
                src={beautyHeroImage}
                alt="Luxury Beauty Treatment"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
            {/* Optimized: Removed high-cost floating blurs */}
          </motion.div>
        </div>
      </section>

      {/* ─── ARCH ANIMATION SECTION ─── */}
      <div className="arch">
        <div className="arch__left">
          {services.map((service, i) => (
            <div key={service.id} className="arch__info" id={`info-${i}`}>
              <div className="max-w-md w-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 bg-primary text-white rounded-xl sm:rounded-2xl shadow-xl shadow-primary/20">
                    {service.icon}
                  </div>
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px]">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-section-title font-black text-on-surface leading-none mb-4 sm:mb-6 uppercase italic font-serif">
                  {service.title}
                </h2>
                <p className="text-on-surface/80 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-semibold">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-end">
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      Starting From
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-on-surface italic font-serif leading-none">
                      {service.price}
                    </span>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium-gold px-8 sm:px-12 py-3"
                    >
                      Book Ritual
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arch__right" ref={rightColRef}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="img-wrapper"
              style={{ zIndex: services.length - i }}
            >
              <img
                src={service.image}
                alt={service.title}
                loading={i < 2 ? "eager" : "lazy"}
                className="opacity-95 contrast-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-24 sm:py-40 lg:py-60 text-center relative px-4 sm:px-6 border-t border-slate-900/10">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-display font-black mb-8 sm:mb-12 uppercase tracking-tighter italic font-serif leading-[0.9]">
            Custom <br />
            <span className="text-primary">Your Journey</span>
          </h2>
          <p className="text-base sm:text-xl text-on-surface/80 font-semibold max-w-xl mx-auto mb-10 sm:mb-16 italic leading-relaxed">
            "Beauty is not about being noticed, but being remembered. Let us
            craft a tailored package just for you."
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold px-12 sm:px-20 py-4 text-base sm:text-lg"
            >
              Book Your Mastery
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
