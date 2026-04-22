import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Scissors,
  Heart,
  Droplets,
  Star,
  ShieldCheck,
  Crown,
  Users,
  MapPin,
  Clock,
} from "lucide-react";

// Assets
import bridalImage from "../../assets/bridal_offer.png";
import hairImage from "../../assets/hairwebp images/butterfly cut.webp";
import skinImage from "../../assets/facialwebpimages/facial1.webp";
import spaImage from "../../assets/hairspawebpimages/hairspa1.webp";
import makeupImage from "../../assets/facialwebpimages/facial3.webp";
import nailImage from "../../assets/nailwebpimages/nail1.webp";
import liceImage from "../../assets/licewebpimages/lice1.webp";
import pedicureImage from "../../assets/pedicurewebpimages/manicure1.webp";
import interiorLuxury from "../../assets/hairspawebpimages/hairspa2.webp";
import aboutHero from "../../assets/hairwebp images/caramelhaircolor.webp";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  review: string;
  clientName: string;
  highlights: string[];
  image: string;
  icon: React.ReactNode;
  color: string;
  promo?: {
    title: string;
    subtitle: string;
  };
  objectPosition?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Skin Care",
    category: "Skin Care",
    description: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    price: "₹400+",
    duration: "45 Mins",
    review: "The most affordable yet premium facials I've ever had. My skin is glowing like never before.",
    clientName: "Meera V.",
    highlights: ["Deep Cleansing", "Fruit Facials", "D-Tan Treatment"],
    image: skinImage,
    icon: <Heart size={24} fill="#FF4D4D" color="#FF4D4D" />,
    color: "#F2EFE9",
  },
  {
    id: 2,
    title: "Facial Treatment",
    category: "Facial Care",
    description: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    price: "₹1,500+",
    duration: "60 Mins",
    review: "I received so many compliments! The HD finish is perfect for photographers.",
    clientName: "Sanya K.",
    highlights: ["Photo-ready Finish", "Lash Enhancement", "Brow Sculpting"],
    image: makeupImage,
    icon: <Crown size={24} />,
    color: "#EBE8E0",
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    category: "Hand & Foot Care",
    description: "Pamper your hands and feet with our relaxing nail care services.",
    price: "₹1200",
    duration: "45 Mins",
    review: "The most relaxing pedicure ever. My feet feel brand new and so soft!",
    clientName: "Sneha G.",
    highlights: ["Organic Scrub", "Hot Stone Massage", "Premium Polish"],
    image: pedicureImage,
    icon: <Droplets size={24} />,
    color: "#F8F5F0",
  },
  {
    id: 4,
    title: "Hair Spa",
    category: "Hair Services",
    description: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    price: "₹1,500+",
    duration: "75 Mins",
    review: "My hair was brittle and dry, but one session of their spa ritual made it weightless and shiny.",
    clientName: "Meghna K.",
    highlights: ["Scalp Massage", "Steam Therapy", "Serum Infusion"],
    image: spaImage,
    icon: <Droplets size={24} />,
    color: "#E3DFD5",
  },
  {
    id: 5,
    title: "Bridal Makeup",
    category: "Bridal",
    description: "Look stunning on your special day with our professional bridal makeup services.",
    price: "₹15,000+",
    duration: "240 Mins",
    review: "The best bridal care in Tamil Nadu. My look was absolutely radiant and stayed perfect all day.",
    clientName: "Priya R.",
    highlights: ["20% Regulars Discount", "HD Airbrushing", "Saree Draping", "Bridal Glow"],
    image: bridalImage,
    icon: <Sparkles size={24} />,
    color: "#F4F1EC",
    objectPosition: "top",
  },
  {
    id: 6,
    title: "Nails",
    category: "Artistic Nails",
    description: "Exquisite nail art and extensions to express your unique style.",
    price: "₹1500",
    duration: "75 Mins",
    review: "Tiny canvases, massive impact! My nail art has been the talk of every party.",
    clientName: "Ishita D.",
    highlights: ["Acrylic Extensions", "Gel Polish", "Nail Art"],
    image: nailImage,
    icon: <Star size={24} />,
    color: "#EBE8E0",
  },
  {
    id: 7,
    title: "Lice Removal",
    category: "Essential Care",
    description: "Gentle and effective treatments to ensure a healthy, lice-free scalp.",
    price: "₹1000",
    duration: "60 Mins",
    review: "Very professional and thorough treatment. Highly recommend for safe removal.",
    clientName: "Ritu M.",
    highlights: ["Chemical-free", "Scalp Health", "Follow-up Check"],
    image: liceImage,
    icon: <ShieldCheck size={24} />,
    color: "#F4F1EC",
  },
  {
    id: 8,
    title: "Hair Cuts & Styling",
    category: "Hair Services",
    description: "Nourish, style, and restore your hair to its finest with our expert cutting and styling services.",
    price: "₹1,500+",
    duration: "60 Mins",
    review: "A genuine hair transformation. The stylists understand exactly what looks best on you.",
    clientName: "Ananya S.",
    highlights: ["Shampoo & Condition", "Layered Cut", "Blow Dry"],
    image: hairImage,
    icon: <Scissors size={24} />,
    color: "#E8E4DD",
  },
  {
    id: 9,
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
    color: "#F2EFE9",
  },
  {
    id: 10,
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
    color: "#E3DFD5",
  },
];

const ServicesShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop Animation
    mm.add("(min-width: 769px)", () => {
      // Global Lenis is used, local RAF removed

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
          scrub: 0.5,
          anticipatePin: 1,
        },
        defaults: { force3D: true },
      });

      gsap.set(imgs, {
        clipPath: "inset(0% 0% 0% 0%)",
        objectPosition: "center",
        scale: 1,
      });

      panels.forEach((panel) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        tl.fromTo(
          panel,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        )
          .to(panel, { opacity: 1, y: 0, duration: 0.6 })
          .to(panel, { opacity: 0, y: -50, duration: 0.2, ease: "power2.in" });
      });

      services.forEach((_, index) => {
        const currentImage = imgs[index];
        const nextImage = imgs[index + 1]
          ? (imgs[index + 1] as HTMLImageElement)
          : null;

        const sectionTimeline = gsap.timeline();

        if (nextImage) {
          sectionTimeline
            .to(
              "body",
              {
                backgroundColor: services[index + 1].color,
                duration: 1.5,
                ease: "power2.inOut",
              },
              0,
            )
            .to(
              currentImage,
              {
                clipPath: "inset(0% 0% 100% 0%)",
                scale: 1,
                duration: 2,
                ease: "none",
                force3D: true,
              },
              0,
            );
        }

        mainTimeline.add(sectionTimeline);
      });

      return () => {
        // lenis cleanup removed as it's now global
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      className="showcase-container services-arch bg-background transition-colors duration-1000 overflow-hidden"
      ref={containerRef}
    >
      {/* Mobile/Tablet Layout (< dt) */}
      <div className="dt:hidden py-8 tb:py-16 px-4 tb:px-8 space-y-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl tb:text-4xl font-black text-on-surface uppercase tracking-tighter font-serif">
            Signature <span className="text-primary">Services</span>
          </h2>
          <p className="text-on-surface/70 mt-4 max-w-md mx-auto font-medium">
            Explore our artisanal collection of beauty rituals designed for your transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-surface/50 rounded-4xl overflow-hidden border border-white/40 shadow-xl"
            >
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: service.objectPosition || "center" }}
                />
              </div>
              
              {/* Promo Badge */}
              {service.promo && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-primary text-white px-4 py-2 rounded-2xl shadow-luxury border border-white/20 animate-pulse">
                    <p className="text-[10px] font-black uppercase tracking-widest leading-none">
                      {service.promo.title}
                    </p>
                    <p className="text-[7px] font-bold uppercase tracking-tight mt-1 opacity-80">
                      {service.promo.subtitle}
                    </p>
                  </div>
                </div>
              )}

              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-primary rounded-xl shadow-lg border border-primary/20">
                    {service.icon}
                  </div>
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                    {service.category}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-on-surface uppercase font-serif">
                    {service.title}
                  </h3>
                  <p className="text-on-surface/80 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-on-surface/5 rounded-full text-[9px] font-black uppercase tracking-widest text-on-surface/70 border border-on-surface/10"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-on-surface/10">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-widest text-on-surface/40">
                      Investment
                    </span>
                    <span className="text-2xl font-black text-on-surface">
                      {service.price}
                    </span>
                  </div>
                  <Link to="/contact">
                    <button className="btn-premium-gold px-6 py-3 text-xs">
                      Book Ritual
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout (dt +) */}
      <div className="hidden dt:grid max-w-7xl mx-auto px-6 grid-cols-2 gap-10 xl:gap-16 pb-20">
        {/* Left Column: Rich Content */}
        <div className="space-y-0 flex flex-col items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="showcase-info h-[85vh] flex items-center justify-center text-center"
            >
              <div className="max-w-md space-y-7 flex flex-col items-center">
                {/* Badge & Icon */}
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-white text-primary rounded-2xl shadow-luxury-deep border border-primary/20">
                    {service.icon}
                  </div>
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                    {service.category}
                  </span>
                </div>

                {/* Header & Desc */}
                <div className="space-y-4">
                  <h2 className="text-5xl xl:text-6xl font-black text-on-surface leading-none uppercase font-serif">
                    {service.title}
                  </h2>
                  <p className="text-on-surface/90 text-lg leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Highlights & Duration */}
                <div className="flex flex-col items-center gap-4 py-2">
                  <div className="flex flex-wrap justify-center gap-2 w-full">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-on-surface/5 rounded-full text-[10px] font-black uppercase tracking-widest text-on-surface/80 border border-on-surface/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock size={16} />
                    <span className="font-black text-xs uppercase tracking-widest">
                      {service.duration}
                    </span>
                  </div>
                </div>



                {/* Pricing & CTA */}
                <div className="flex flex-col items-center gap-4 pt-4 w-full">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface/60 mb-1">
                      Ritual Investment
                    </span>
                    <span className="text-4xl font-black text-on-surface font-serif tracking-tight">
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
        <div
          className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          ref={rightColRef}
        >
          <div className="relative w-full max-w-[380px] xl:max-w-[420px] aspect-4/5 rounded-[3rem] overflow-hidden shadow-luxury-deep border-4 border-white bg-white">
            {services.map((service) => (
              <div key={service.id} className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="showcase-img w-full h-full object-cover object-center will-change-[clip-path,transform]"
                  style={{ 
                    objectPosition: service.objectPosition || "center",
                    transform: "translateZ(0)"
                  }}
                  decoding="async"
                  loading={service.id === 1 ? "eager" : "lazy"}
                />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Promo Badge on Image */}
                  {service.promo && (
                    <div className="absolute top-10 right-10 z-20">
                      <div className="bg-primary text-white px-6 py-3 rounded-2xl shadow-luxury border border-white/20 scale-110">
                        <p className="text-xs font-black uppercase tracking-[0.2em] leading-none">
                          {service.promo.title}
                        </p>
                        <p className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-80">
                          {service.promo.subtitle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
