import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Award,
  ShieldCheck,
  Clock,
  Quote,
  Users,
  GraduationCap,
  CalendarDays,
  Wallet,
  Package,
  BookOpen,
  Handshake,
  Scissors,
  Crown,
  Hand,
  Droplets,
  HeartPulse,
} from "lucide-react";
import { SparkleHeading } from "../components/ui/SparkleHeading";
import { Link } from "react-router-dom";

// Assets
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import team1 from "../assets/makeup_artist.png";
import interiorImage from "../assets/salon_interior_luxury.png";
const team2 = hairImage;

const SERVICES_DATA = [
  {
    title: "Hair Styling",
    desc: "Achieve trendy and elegant hairstyles with our expert stylists.",
    icon: <Scissors size={26} strokeWidth={1.5} />,
  },
  {
    title: "Facial Treatments",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    icon: <Sparkles size={26} strokeWidth={1.5} />,
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services.",
    icon: <Crown size={26} strokeWidth={1.5} />,
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing nail care services.",
    icon: <Hand size={26} strokeWidth={1.5} />,
  },
  {
    title: "Hair Spa",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    icon: <Droplets size={26} strokeWidth={1.5} />,
  },
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    icon: <HeartPulse size={26} strokeWidth={1.5} />,
  },
];

const ServiceCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
}> = ({ title, desc, icon }) => (
  <div className="group relative bg-primary-container/20 p-5 sm:p-6 pt-10 sm:pt-12 rounded-2xl text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
    <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-surface border-2 border-primary-container rounded-full flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-105 group-hover:border-primary">
      <div className="text-secondary transition-colors duration-500 group-hover:text-primary flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-on-surface/60 text-xs sm:text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

const TIMELINE_DATA = [
  {
    year: "01",
    title: "Largest Community",
    desc: "The largest B2C beauty community, directly connecting you with professionals.",
    icon: <Users size={22} />,
  },
  {
    year: "02",
    title: "Pocket Friendly",
    desc: "Explore various salons and filter prices to find the perfect fit for your budget.",
    icon: <Wallet size={22} />,
  },
  {
    year: "03",
    title: "Trained Professionals",
    desc: "Entrust your needs to our team of skilled and certified beauty professionals.",
    icon: <GraduationCap size={22} />,
  },
  {
    year: "04",
    title: "Branded Products",
    desc: "Premium products from trusted brands, selected to enhance your experience.",
    icon: <Package size={22} />,
  },
  {
    year: "05",
    title: "100% Hygienic",
    desc: "Stringent cleanliness standards for a worry-free, healthy experience.",
    icon: <ShieldCheck size={22} />,
  },
  {
    year: "06",
    title: "Exclusive Directory",
    desc: "Comprehensive directory of all beauticians, giving you wide access.",
    icon: <BookOpen size={22} />,
  },
  {
    year: "07",
    title: "Convenient Booking",
    desc: "Hassle-free booking with our user-friendly platform from your home.",
    icon: <CalendarDays size={22} />,
  },
  {
    year: "08",
    title: "Community Engagement",
    desc: "Join a vibrant community of beauty enthusiasts, sharing tips and experiences.",
    icon: <Handshake size={22} />,
  },
];

const About: React.FC = () => {
  React.useEffect(() => {
    const items = document.querySelectorAll(".timeline li");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.isIntersecting
            ? e.target.classList.add("in-view")
            : e.target.classList.remove("in-view"),
        ),
      { threshold: 0.4 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      <style>{`
        /* ─── TIMELINE ─── */
        .timeline-section { 
          background: linear-gradient(to bottom, var(--color-background), var(--color-surface-dim)); 
          padding-top: 60px;
          padding-bottom: 100px; 
          overflow-x: hidden; 
        }

        .timeline ul {
          position: relative;
          padding: 40px 0;
          margin: 0;
        }

        /* The vertical spine */
        .timeline ul::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--color-primary-container);
          opacity: 0.3;
          transform: translateX(-50%);
        }

        .timeline ul li {
          list-style-type: none; 
          position: relative; 
          width: 100%;
          margin-bottom: 60px;
        }

        /* The indicator dot */
        .timeline ul li::after {
          content: ''; 
          position: absolute; 
          left: 50%; 
          top: 20px;
          transform: translateX(-50%); 
          width: 16px; 
          height: 16px;
          z-index: 10; 
          background: var(--color-surface);
          border: 3px solid var(--color-primary-container);
          border-radius: 50%;
          transition: all 0.5s ease;
        }

        .timeline ul li.in-view::after {
          background: var(--color-primary);
          border-color: var(--color-primary-container);
          box-shadow: 0 0 15px var(--color-primary-container);
        }

        /* The main card */
        .timeline ul li div.item-card {
          position: relative; 
          width: 44%;
          min-width: 320px;
          background: var(--color-surface);
          border: 1px solid rgba(115, 92, 0, 0.15);
          border-radius: 24px;
          box-shadow: 0 20px 50px -15px rgba(115, 92, 0, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: row; /* Split view */
          visibility: hidden; 
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        /* Alternating Logic for Desktop */
        .timeline ul li:nth-of-type(odd) div.item-card { 
          left: calc(50% + 40px); 
          transform: translateX(40px);
        }
        .timeline ul li:nth-of-type(even) div.item-card { 
          left: calc(50% - 44% - 40px); 
          transform: translateX(-40px);
        }

        .timeline ul li.in-view div.item-card { 
          transform: translateX(0); 
          visibility: visible; 
          opacity: 1; 
        }

        /* Card Content Styling */
        .timeline ul li time {
          position: absolute; 
          top: 0;
          left: 0;
          background: var(--color-primary);
          color: white;
          padding: 4px 12px;
          border-bottom-right-radius: 12px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 1px;
          z-index: 5;
        }

        .timeline .item-content {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Feature Side (Discovery) */
        .timeline .discovery {
          background: var(--color-primary-container);
          color: white;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.1);
        }

        .timeline .discovery h1 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          color: white;
          line-height: 1.2;
        }

        .timeline .discovery .text-primary {
          color: white;
          opacity: 0.9;
        }

        /* Benefit Side (Scientist) */
        .timeline .scientist {
          background: white;
          text-align: left;
        }

        .timeline .scientist h1 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-primary);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .timeline .scientist span {
          font-size: 0.9rem;
          color: var(--color-on-surface);
          line-height: 1.5;
          opacity: 0.8;
          font-weight: 500;
        }

        /* ─── TABLET RESPONSIVENESS (768px - 1024px) ─── */
        @media (max-width: 1024px) {
          .timeline ul li div.item-card {
            width: 42%;
            min-width: 280px;
          }
          .timeline ul li:nth-of-type(even) div.item-card { 
            left: calc(50% - 42% - 40px); 
          }
        }

        /* ─── MOBILE RESPONSIVENESS (< 768px) ─── */
        @media (max-width: 768px) {
          .timeline ul::before {
            left: 20px;
            transform: none;
          }

          .timeline ul li {
            margin-bottom: 30px;
            padding-top: 20px;
          }

          .timeline ul li::after {
            left: 20px;
            top: 0;
            transform: translateX(-50%);
          }

          .timeline ul li div.item-card {
            width: calc(100% - 50px);
            left: 40px !important;
            margin: 0;
            min-width: 0;
            flex-direction: column; /* Stack on mobile */
            transform: translateX(20px); /* Initial state for mobile */
            transition: all 0.6s ease-out;
          }

          .timeline ul li.in-view div.item-card {
            transform: translateX(0) !important;
          }

          .timeline .item-content {
            padding: 16px;
            text-align: center;
          }

          .timeline .discovery {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-top: 40px; /* Room for the time tag on mobile */
          }

          .timeline .scientist {
            padding-top: 12px;
            text-align: center;
          }

          .timeline .scientist h1 {
            text-align: center;
          }
          
          .timeline .discovery h1 {
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 -mt-20 sm:-mt-32 lg:-mt-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-10 text-center lg:text-left"
            >
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/10 rounded-full mb-6 max-sm:mx-auto">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    Premium Excellence
                  </span>
                </div>
                
                <h1 className="text-display font-black text-on-surface mb-6 italic font-serif glow-text leading-[1.1]">
                  <SparkleHeading text="Where Beauty" className="text-on-surface" />
                  <br className="max-lg:hidden" />
                  <SparkleHeading text="Meets Artistry" className="text-primary" sparkleScale={1.4} />
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-on-surface/70 font-sans leading-relaxed max-w-xl max-lg:mx-auto italic mb-10">
                  Step into a sanctuary of refined elegance, where every treatment
                  is a personalized ritual crafted to celebrate your unique
                  essence.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-lg:justify-center">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium-gold px-10 sm:px-12 w-full sm:w-auto shadow-xl"
                    >
                      Book Your Ritual
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/60 hover:text-on-surface transition-colors duration-300"
                  >
                    <span className="pb-1 border-b-2 border-on-surface/10 group-hover:border-primary transition-all duration-300">
                      Learn Our Story
                    </span>
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Arch */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center lg:justify-end"
            >


              {/* The Arch Shape */}
              <div className="relative w-full max-w-[450px] aspect-4/5 rounded-t-full border-8 border-primary/5 p-4 sm:p-6 shadow-2xl bg-surface/95 overflow-visible">
                <div className="w-full h-full rounded-t-full overflow-hidden shadow-inner border border-primary/20">
                  <img 
                    src={interiorImage}
                    alt="Salon Interior"
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Floating Elements (Optimized with Pure CSS) */}
                <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-surface border-2 border-primary p-4 sm:p-6 rounded-2xl shadow-2xl luxury-float z-20 max-w-[140px] sm:max-w-[180px]">
                  <p className="text-xl sm:text-3xl font-serif italic text-primary mb-1 text-center font-bold">10+</p>
                  <p className="text-[8px] sm:text-[10px] font-bold text-on-surface/60 uppercase tracking-widest text-center">Years of Luxury Service</p>
                </div>




                {/* Decorative Dots (Simplified) */}
                <div className="absolute top-1/4 -right-4 w-2 h-2 rounded-full bg-primary/40" />
                <div className="absolute bottom-1/3 -left-4 w-3 h-3 rounded-full border border-primary/40" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-16 sm:py-24 bg-background overflow-hidden border-b border-primary-container/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-4xl sm:rounded-5xl overflow-hidden shadow-2xl aspect-4/5">
                <img
                  src={spaImage}
                  alt="Our Sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-surface-dim rounded-full blur-3xl opacity-60" />
              <div className="absolute top-1/2 -right-4 sm:-right-10 lg:-right-16 translate-y-[-50%] hidden md:block z-20">
                <div className="bg-surface/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl rotate-6 max-w-[180px] sm:max-w-[220px] transition-transform hover:rotate-0 duration-500">
                  <p className="text-2xl sm:text-3xl font-serif italic text-primary mb-2 text-center leading-tight">
                    "Beauty is an art form."
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold text-on-surface/60 uppercase tracking-[0.2em] text-center">
                    — Our Founder
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block px-4 py-2 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Our Legacy
              </div>
              <h2 className="text-hero italic text-on-surface leading-none">
                Crafting Timeless <br />
                <span className="text-primary">Beauty Stories</span> <br />{" "}
                Since 2010
              </h2>
              <p className="text-base sm:text-lg text-on-surface/80 font-sans leading-relaxed italic">
                "Founded on the belief that everyone deserves a sanctuary of
                self-care, Zentonsz has grown from a boutique salon into a
                hallmark of luxury."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-serif italic text-on-surface mb-2">
                    Our Vision
                  </h4>
                  <p className="text-sm text-on-surface/60 leading-relaxed">
                    To become the global standard for personalized luxury beauty
                    experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-serif italic text-on-surface mb-2">
                    Our Mission
                  </h4>
                  <p className="text-sm text-on-surface/60 leading-relaxed">
                    Enhancing natural beauty through innovative techniques and
                    artisanal care.
                  </p>
                </div>
              </div>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-8 py-3.5"
                >
                  Discover Our Services
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-dim overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-14 sm:mb-24">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-4 sm:mb-6 block">
              Experience Our Expertise
            </span>
            <h2 className="text-hero italic text-on-surface">
              Our <span className="text-primary">Exclusive Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="timeline-section py-16 sm:py-24 timeline">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-32">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-4 sm:mb-6 block">
              Experience the difference today
            </span>
            <h2 className="text-hero italic text-on-surface">
              Why We <br className="md:hidden" />
              <span className="text-display text-primary underline decoration-primary-container underline-offset-12 block md:inline-block md:mt-4">
                Stand Out
              </span>
            </h2>
          </div>
          <ul className="relative">
            {TIMELINE_DATA.map((item, index) => (
              <li key={index}>
                <div className="item-card">
                  <time>{item.year}</time>
                  <div className="discovery item-content">
                    <h1>{item.title}</h1>
                    <div className="text-primary mb-2">{item.icon}</div>
                  </div>
                  <div className="scientist item-content">
                    <h1>Benefit</h1>
                    <span>{item.desc}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-hero italic text-on-surface mb-6">
              The Standards of <span className="text-primary">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-primary-container mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mb-12 sm:mb-20">
            {[
              {
                icon: <Award size={28} strokeWidth={1} />,
                title: "Artisanal Excellence",
                desc: "Every service is a masterpiece, crafted with precision and a deep understanding of aesthetics.",
              },
              {
                icon: <ShieldCheck size={28} strokeWidth={1} />,
                title: "Safe Sanctuary",
                desc: "We adhere to the highest medical-grade sanitization protocols to ensure your absolute well-being.",
              },
              {
                icon: <Clock size={28} strokeWidth={1} />,
                title: "Personalized Care",
                desc: "We dedicate time to understand your unique needs, ensuring a result that is uniquely yours.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 sm:p-10 bg-surface-dim rounded-3xl sm:rounded-4xl border border-primary-container/20 text-center hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif italic text-on-surface mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-on-surface/60 font-sans leading-relaxed text-sm sm:text-base">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust section */}
          <div className="bg-surface-dim/30 rounded-4xl sm:rounded-5xl p-6 sm:p-12 md:p-16 border border-primary-container/20 shadow-sm relative overflow-hidden text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-serif italic text-on-surface mb-4 sm:mb-6 underline decoration-primary-container underline-offset-8">
                    Why Trust Zentonsz?
                  </h4>
                  <p className="text-on-surface/60 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base italic font-serif">
                    "Trust isn't given; it's earned through consistent quality,
                    unwavering discipline, and a genuine passion for beauty."
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm font-bold tracking-widest uppercase text-on-surface/60">
                  {[
                    "Medical-Grade Hygiene Standards",
                    "Internationally Certified Master Artists",
                    "Premium World-Class Product Portfolio",
                    "Transparent & Ethical Aesthetic Practices",
                  ].map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 sm:gap-4 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300 shrink-0" />
                      <span className="group-hover:text-primary transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 p-2 bg-white rounded-4xl sm:rounded-5xl shadow-2xl rotate-2">
                  <img
                    src={interiorImage}
                    alt="Salon Hygiene"
                    className="rounded-3xl sm:rounded-5xl w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-16 sm:py-24 bg-surface-dim relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
                The Artisans
              </span>
              <h2 className="text-hero italic text-on-surface">
                Meet Our <span className="text-primary">Master Stylists</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-on-surface/60 font-sans max-w-xs sm:max-w-sm italic lg:text-right">
              Curated experts committed to translating your inner beauty into an
              outward reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
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
                bio: "With a decade of experience, Ananya is the architect of avant-garde hair design.",
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
                <div className="relative rounded-4xl sm:rounded-5xl overflow-hidden mb-6 sm:mb-8 aspect-3/4 shadow-xl group-hover:shadow-2xl transition-all duration-700">
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
                  <h4 className="text-xl sm:text-2xl font-serif italic text-on-surface mb-1">
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

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
              Client Voices
            </span>
            <h2 className="text-hero italic text-on-surface">
              Trust Built on <span className="text-primary">Results</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 max-w-5xl mx-auto">
            {[
              {
                text: "Zentonsz isn't just a parlour; it's an experience. The attention to detail and the hygiene standards are unparalleled in the city.",
                author: "Meera Krishnan",
                tag: "Regular Client Since 2018",
              },
              {
                text: "My bridal transformation was exactly what I dreamed of. They understood my vision and executed it with such precision.",
                author: "Ritika Singh",
                tag: "Bridal Client 2023",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 sm:p-12 bg-surface-dim/30 rounded-4xl sm:rounded-5xl border border-primary-container/20 relative group hover:bg-surface-dim hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <Quote
                  size={32}
                  className="text-primary-container absolute top-8 right-8 group-hover:text-primary-container/50 transition-colors"
                />
                <p className="text-base sm:text-lg md:text-xl font-serif italic text-on-surface/80 leading-relaxed mb-6 sm:mb-8">
                  "{item.text}"
                </p>
                <div className="text-on-surface">
                  <h4 className="text-xl font-serif italic">{item.author}</h4>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary mt-1">
                    {item.tag}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-24 bg-surface-dim/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative bg-white rounded-4xl sm:rounded-[4rem] p-8 sm:p-16 md:p-20 overflow-hidden border border-primary-container shadow-xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-6 sm:space-y-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background rounded-full flex items-center justify-center mx-auto text-primary mb-6 sm:mb-8 border border-primary-container shadow-sm">
                <Sparkles size={32} />
              </div>
              <h2 className="text-hero italic text-on-surface">
                Begin Your Journey to <br />
                <span className="text-primary">Unrivaled Radiance</span>
              </h2>
              <p className="text-base sm:text-lg text-on-surface/60 font-sans max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                Experience the perfect blend of artisanal skill and modern
                luxury. Your transformation awaits at Zentonsz.
              </p>
              <div className="pt-4 sm:pt-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold px-12 sm:px-16 py-4"
                  >
                    Book Your Appointment
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <Sparkles className="absolute top-8 right-8 text-primary-container/5 w-24 h-24 sm:w-40 sm:h-40" />
            <Heart className="absolute bottom-8 left-8 text-primary-container/5 w-24 h-24 sm:w-40 sm:h-40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
