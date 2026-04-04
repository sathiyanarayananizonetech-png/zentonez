import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { ShuffleHero } from "../components/ui/ShuffleHero";
import BookGallery from "../components/ui/BookGallery";
import { SparkleHeading } from "../components/ui/SparkleHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import bridalImage from "../assets/bridal_makeup.png";
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import makeupImage from "../assets/makeup_artist.png";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      id: "bridal",
      title: "Bridal Art",
      subtitle: "The First Impression",
      img: bridalImage,
      text: "Every transformation begins with silence. We craft the perfect base, ensuring your beauty radiates from within.",
    },
    {
      id: "hair",
      title: "Hair Mastery",
      subtitle: "Sculpting Elegance",
      img: hairImage,
      text: "Movement and form collide. Our stylists treat every strand as a thread in a larger, elegant tapestry.",
    },
    {
      id: "skin",
      title: "Skin Revival",
      subtitle: "The Radiant Ritual",
      img: skinImage,
      text: "Nourishment transcends the surface. We use precise rituals to reveal your skin's most authentic glow.",
    },
    {
      id: "spa",
      title: "Spa Sanctuary",
      subtitle: "Stillness in Movement",
      img: spaImage,
      text: "Step into a world where time stops. Our spa rituals are designed to nourish the soul through moments of care.",
    },
    {
      id: "masters",
      title: "The Masters",
      subtitle: "Creative Reflection",
      img: makeupImage,
      text: "Meet the visionaries. Every look is a collaboration between our expertise and your unique expression.",
    },
  ];

  useEffect(() => {
    /* Sequential snapping for chapters removed in favor of free scroll/book focus */

    const bookHero = document.querySelector(".book-hero-section");
    const bookScaleContainer = document.querySelector(".galeria-book-3d");
    const pages = gsap.utils.toArray<HTMLElement>(".book-page");

    if (bookHero && bookScaleContainer && pages.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bookHero,
          start: "top top",
          end: "+=400%", // 400% height for a long, cinematic experience
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Step 1: Scale up the book, shift spine, and fade out text
      tl.to(bookScaleContainer, {
        "--book-scale": 1.2,
        "--spine-shift": "140px",
        duration: 2,
        ease: "power2.inOut",
      });

      tl.to(
        ".book-text-overlay",
        {
          opacity: 0,
          y: -30,
          duration: 1.5,
          ease: "power2.inOut",
        },
        0,
      ); // Concurrent with scaling up

      // Step 2: Flip pages sequentially
      pages.forEach((page, i) => {
        tl.to(
          page,
          {
            "--page-rotate": "-180deg",
            duration: 1.5,
            ease: "power1.inOut",
            onStart: () => {
              gsap.set(page, { zIndex: 20 + i });
            },
            onReverseComplete: () => {
              gsap.set(page, { zIndex: 10 - i });
            },
          },
          "-=0.2",
        ); // Slight overlap for natural flow
      });

      // Final pause at the end
      tl.to({}, { duration: 1 });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden bg-white text-slate-900 font-sans relative min-h-screen"
    >
      {/* Dust overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay z-9999"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/white-dust-scratches-black-background_279525-2.jpg?w=640")',
          backgroundRepeat: "repeat",
        }}
      />

      <style>{`
        /* ─── Snap sections ─── */
        .snap-section {
          min-height: 100svh;
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;
        }

        .hero-section {
          width: 100%;
          min-height: 100svh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: white;
          z-index: 100;
        }

        .content-outer {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          padding: clamp(1rem, 3vw, 2rem);
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 3vw, 2rem);
          align-items: center;
        }

        .image-wrapper {
          width: 100%;
          height: clamp(220px, 50vw, 60vh);
          border-radius: clamp(1.5rem, 4vw, 3rem);
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px -15px rgba(48, 43, 39, 0.2);
          border: 1px solid rgba(48,43,39,0.08);
        }

        .text-reveal {
          padding-top: 1rem;
        }

        /* Desktop layout: image left, text right */
        @media (min-width: 1024px) {
          .content-outer {
            grid-template-columns: repeat(12, 1fr);
          }
          .image-wrapper {
            grid-column: 2 / span 7;
            height: clamp(400px, 72vh, 80vh);
          }
          .text-reveal {
            grid-column: 9 / span 4;
            text-align: left;
            padding-top: 0;
          }
        }

        /* ─── Portfolio Label ─── */
        .portfolio-label {
          position: absolute;
          top: 8%;
          left: 4vw;
          font-size: clamp(2.5rem, 8vw, 8rem);
          font-weight: 800;
          opacity: 0.06;
          color: var(--color-on-surface);
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      {/* ─── BOOK GALLERY ─── */}
      <section className="snap-section book-hero-section min-h-svh! relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 sm:pt-32 px-4 text-center z-20 pointer-events-none book-text-overlay">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glow-text"
          >
            <h1 className="text-display font-pacifico text-slate-900 mb-4 sm:mb-6 normal-case glow-text mt-8 sm:mt-12">
              <SparkleHeading text="The Signature" className="text-slate-900" />
              <br />
              <SparkleHeading
                text="Lookbook"
                className="text-primary"
                sparkleScale={1.3}
              />
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-600/80 leading-relaxed max-w-2xl mx-auto">
              "A curated journey through the art of transformation, from our
              master stylists to your personal reflection."
            </p>
          </motion.div>
        </div>
        <BookGallery />
      </section>

      {/* ─── SHUFFLE HERO ─── */}
      <section className="hero-section snap-section">
        <ShuffleHero />
      </section>

      {/* ─── CHAPTERS ─── */}
      <main className="w-full relative z-10">
        <div className="portfolio-label">Signature Chapters</div>
        {chapters.map((chapter) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className="snap-section chapter-snap-section"
          >
            <div className="content-outer">
              <div className="image-wrapper">
                <img
                  src={chapter.img}
                  alt={chapter.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--color-primary-container) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary-container) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute top-6 sm:top-12 left-6 sm:left-12">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm">
                    <Sparkles size={12} />
                    <span className="font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">
                      The Lookbook
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-reveal col-span-12 lg:col-start-9 lg:col-span-4 self-center lg:self-end lg:pb-12">
                <h3 className="text-slate-900/40 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4 font-black">
                  {chapter.subtitle}
                </h3>
                <h2 className="text-display font-black mb-5 sm:mb-8 leading-[0.9] uppercase italic font-serif text-slate-900">
                  {chapter.title}
                </h2>
                <div className="h-1 w-16 sm:w-20 bg-primary mb-5 sm:mb-8" />
                <p className="text-base sm:text-xl md:text-2xl italic opacity-70 leading-relaxed text-slate-900">
                  {chapter.text}
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="snap-section flex flex-col items-center justify-center p-6 sm:p-8 bg-white/30">
        <Heart
          size={48}
          className="sm:hidden text-primary mb-6 animate-pulse"
        />
        <Heart
          size={64}
          className="hidden sm:block text-primary mb-8 animate-pulse"
        />
        <h2 className="text-display font-black italic uppercase font-serif mb-8 sm:mb-12 text-center text-slate-900">
          End of <br /> Reflections
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-premium-gold px-10 sm:px-16 py-4"
        >
          Restart Journey
        </motion.button>
      </footer>
    </div>
  );
};

export default Gallery;
