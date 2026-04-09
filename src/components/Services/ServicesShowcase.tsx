import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { Sparkles, Scissors, Heart, Droplets, Star, ShieldCheck, Crown, Users, MapPin, Gem, Clock, Quote } from "lucide-react";

// Assets
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import makeupImage from "../../assets/makeup_artist.png";
import nailImage from "../../assets/nail_art.png";
import treatmentHero from "../../assets/beauty_treatment_hero.png";
import interiorLuxury from "../../assets/salon_interior_luxury.png";
import salonVessel from "../../assets/luxury_salon_vessel.png";
import aboutHero from "../../assets/abouthero.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Bridal Transformation",
    category: "Makeup Ritual",
    description: "Our signature bridal service crafting a flawless foundation and ethereal radiance.",
    price: "₹5000",
    duration: "180 Mins",
    review: "The gold standard of bridal care. My makeup stayed perfect for over 12 hours!",
    clientName: "Priya R.",
    highlights: ["HD Airbrushing", "Hairstyling", "Saree Draping"],
    image: bridalImage,
    icon: <Sparkles size={24} />,
    color: "#F4F1EC" 
  },
  {
    id: 2,
    title: "Advanced Hair Styling",
    category: "Artisan Hair",
    description: "Precision cuts and vibrant global coloring treatments for your unique identity.",
    price: "₹1200",
    duration: "90 Mins",
    review: "Best hair transformation I've had. The coloring is exactly what I wanted.",
    clientName: "Ananya S.",
    highlights: ["Global Color", "Layered Cuts", "Spa Hair Wash"],
    image: hairImage,
    icon: <Scissors size={24} />,
    color: "#E8E4DD"
  },
  {
    id: 3,
    title: "Radiance Skin Therapy",
    category: "Skin Alchemy",
    description: "Customized facials using international products to restore your natural health.",
    price: "₹1500",
    duration: "60 Mins",
    review: "My skin felt like silk after just one session. Truly a nurturing experience.",
    clientName: "Meera V.",
    highlights: ["Crystal Peels", "Hydration Therapy", "LED Masking"],
    image: skinImage,
    icon: <Heart size={24} />,
    color: "#F2EFE9"
  },
  {
    id: 4,
    title: "Luxury Spa Rituals",
    category: "Wellness Spa",
    description: "Total body rejuvenation and relaxation within our sanctuary of serenity.",
    price: "₹2500",
    duration: "120 Mins",
    review: "The only place where time truly stops. Rejuvenating for both body and mind.",
    clientName: "Rahul M.",
    highlights: ["Full Body Scrub", "Aromatherapy", "Deep Tissue"],
    image: spaImage,
    icon: <Droplets size={24} />,
    color: "#E3DFD5"
  },
  {
    id: 5,
    title: "Event HD Makeup",
    category: "High Definition",
    description: "Sophisticated and long-lasting looks for your most memorable social occasions.",
    price: "₹3000",
    duration: "90 Mins",
    review: "I received so many compliments! The HD finish is perfect for photographers.",
    clientName: "Sanya K.",
    highlights: ["Photo-ready Finish", "Lash Enhancement", "Brow Sculpting"],
    image: makeupImage,
    icon: <Crown size={24} />,
    color: "#F8F5F0"
  },
  {
    id: 6,
    title: "Designer Nail Art",
    category: "Artistic Nails",
    description: "Creative extensions and intricate hand-painted designs from our master artists.",
    price: "₹1500",
    duration: "75 Mins",
    review: "Tiny canvases, massive impact! My nail art has been the talk of every party.",
    clientName: "Ishita D.",
    highlights: ["Acrylic Extensions", "Artisanal Designs", "Buff & Polish"],
    image: nailImage,
    icon: <Star size={24} />,
    color: "#EBE8E0"
  },
  {
    id: 7,
    title: "Holistic Longevity",
    category: "Elite Wellness",
    description: "Integrated programs tailored for long-term health and consistent outer glow.",
    price: "₹4000",
    duration: "Full Day",
    review: "A complete life balance reset. Highly recommend for busy professionals.",
    clientName: "Karan B.",
    highlights: ["Dietary Fusion", "Mental Reset", "Posture Correction"],
    image: treatmentHero,
    icon: <ShieldCheck size={24} />,
    color: "#F4F1EC"
  },
  {
    id: 8,
    title: "Sanctuary Boutique",
    category: "The Ambience",
    description: "Relax within our award-winning architectural home designed for calm.",
    price: "Tour Now",
    duration: "Permanent",
    review: "The design alone lowers your stress level. An absolute paradise.",
    clientName: "Sneha G.",
    highlights: ["Eco-friendly Air", "Soundproof Rooms", "Zen Gardens"],
    image: interiorLuxury,
    icon: <MapPin size={24} />,
    color: "#E3DFD5"
  },
  {
    id: 9,
    title: "Elite Salon Gear",
    category: "Engineering",
    description: "Utilizing world-class equipment and precision vessels for highest safety.",
    price: "Premium",
    duration: "Perennial",
    review: "You can feel the quality of the tools. Everything is pristine and advanced.",
    clientName: "Vikram P.",
    highlights: ["Medical-grade Sterility", "Ergonomic Chairs", "Precision Tools"],
    image: salonVessel,
    icon: <Gem size={24} />,
    color: "#F2EFE9" // Linen
  },
  {
    id: 10,
    title: "Elite Master Art",
    category: "Grand Ritual",
    description: "The pinnacle of our artisan crafts, performed by our most senior team.",
    price: "Custom",
    duration: "Varies",
    review: "Beyond just a service—it's genuine artistry and unmatched attention.",
    clientName: "Dr. Aarti L.",
    highlights: ["Master Consultation", "Legacy Techniques", "Aftercare Kit"],
    image: aboutHero,
    icon: <Users size={24} />,
    color: "#E8E4DD"
  },
];

const ServicesShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLImageElement>(".showcase-img");
      const panels = gsap.utils.toArray<HTMLElement>(".showcase-info");

      imgs.forEach((img, index) => {
        gsap.set(img.parentElement, { zIndex: services.length - index });
      });

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: rightColRef.current,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      gsap.set(imgs, {
        clipPath: "inset(0% 0% 0% 0%)",
        objectPosition: "0px 0%",
        scale: 1.1
      });

      services.forEach((_, index) => {
        const currentImage = imgs[index];
        const nextImage = imgs[index + 1] ? (imgs[index + 1] as HTMLImageElement) : null;
        const currentSection = panels[index];

        const sectionTimeline = gsap.timeline();

        sectionTimeline.fromTo(currentSection, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          0
        );

        if (nextImage) {
          sectionTimeline
            .to("body", {
              backgroundColor: services[index + 1].color,
              duration: 1.5,
              ease: "power2.inOut"
            }, 0)
            .to(currentImage, {
              clipPath: "inset(0% 0% 100% 0%)",
              objectPosition: "0px 60%",
              scale: 1.2,
              duration: 2,
              ease: "none"
            }, 0)
            .to(nextImage, {
              objectPosition: "0px 0%",
              scale: 1.1,
              duration: 2,
              ease: "none"
            }, 0);
        }

        mainTimeline.add(sectionTimeline);
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div className="showcase-container bg-background transition-colors duration-1000" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 gap-16 xl:gap-24 pb-32">
          
          {/* Left Column: Rich Content */}
          <div className="space-y-0 flex flex-col items-center">
            {services.map((service) => (
              <div key={service.id} className="showcase-info h-screen flex items-center justify-center text-center">
                <div className="max-w-md space-y-7 flex flex-col items-center">
                  
                  {/* Badge & Icon */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-primary text-white rounded-2xl shadow-luxury-deep">
                      {service.icon}
                    </div>
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                      {service.category}
                    </span>
                  </div>

                  {/* Header & Desc */}
                  <div className="space-y-4">
                    <h2 className="text-5xl xl:text-6xl font-black text-on-surface leading-none uppercase italic font-serif">
                      {service.title}
                    </h2>
                    <p className="text-on-surface/70 text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights & Duration */}
                  <div className="flex flex-col items-center gap-4 py-2">
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 bg-on-surface/5 rounded-full text-[10px] font-black uppercase tracking-widest text-on-surface/60 border border-on-surface/10">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Clock size={16} />
                      <span className="font-black text-xs uppercase tracking-widest">{service.duration}</span>
                    </div>
                  </div>

                  {/* Review Snippet */}
                  <div className="relative px-8 pt-6 pb-4 bg-on-surface/5 rounded-3xl border border-on-surface/10">
                    <Quote className="absolute top-2 left-2 text-primary/20 rotate-180" size={24} />
                    <p className="text-on-surface/80 text-sm italic font-medium leading-relaxed leading-relaxed mb-2">
                      "{service.review}"
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">— {service.clientName}</span>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex flex-col items-center gap-4 pt-4 w-full">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface/30 mb-1">Ritual Investment</span>
                      <span className="text-4xl font-black text-on-surface italic font-serif tracking-tight">
                        {service.price}
                      </span>
                    </div>
                    <Link to="/contact" className="w-full">
                      <button className="btn-premium-gold w-full py-4 text-sm tracking-widest">
                        Book Ritual
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pinned Visualization */}
          <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden" ref={rightColRef}>
            <div className="relative w-full max-w-[450px] xl:max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-luxury-deep border-8 border-white bg-white">
              {services.map((service) => (
                <div key={service.id} className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="showcase-img w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
