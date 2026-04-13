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
  Quote,
} from "lucide-react";

// Assets
import bridalImage from "../../assets/hairwebp images/butterfly cut.webp";
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

const services = [
  {
    id: 1,
    title: "Bridal Artistry",
    category: "Bridal",
    description:
      "Look absolutely radiant on your most special day with our complete bridal transformation rituals.",
    price: "₹15,000+",
    duration: "240 Mins",
    review:
      "The best bridal care in Tamil Nadu. My look was absolutely radiant and stayed perfect all day.",
    clientName: "Priya R.",
    highlights: ["HD Airbrushing", "Saree Draping", "Bridal Glow"],
    image: bridalImage,
    icon: <Sparkles size={24} />,
    color: "#F4F1EC",
  },
  {
    id: 2,
    title: "Hair Cuts & Styling",
    category: "Hair Services",
    description:
      "Nourish, style, and restore your hair to its finest with our expert cutting and styling services.",
    price: "₹1,500+",
    duration: "60 Mins",
    review:
      "A genuine hair transformation. The stylists understand exactly what looks best on you.",
    clientName: "Ananya S.",
    highlights: ["Shampoo & Condition", "Layered Cut", "Blow Dry"],
    image: hairImage,
    icon: <Scissors size={24} />,
    color: "#E8E4DD",
  },
  {
    id: 3,
    title: "Skin Care & Facials",
    category: "Skin Care",
    description:
      "Glow from within with our expert facial and skin treatments designed for every skin type.",
    price: "₹400+",
    duration: "45 Mins",
    review:
      "The most affordable yet premium facials I've ever had. My skin is glowing like never before.",
    clientName: "Meera V.",
    highlights: ["Deep Cleansing", "Fruit Facials", "D-Tan Treatment"],
    image: skinImage,
    icon: <Heart size={24} />,
    color: "#F2EFE9",
  },
  {
    id: 4,
    title: "Hair Spa Rituals",
    category: "Hair Services",
    description:
      "Deeply nourish your hair and scalp with our premium hair spa and restoration treatments.",
    price: "₹1,500+",
    duration: "75 Mins",
    review:
      "My hair was brittle and dry, but one session of their spa ritual made it weightless and shiny.",
    clientName: "Meghna K.",
    highlights: ["Scalp Massage", "Steam Therapy", "Serum Infusion"],
    image: spaImage,
    icon: <Droplets size={24} />,
    color: "#E3DFD5",
  },
  {
    id: 5,
    title: "Designer Nail Art",
    category: "Artistic Nails",
    description:
      "Creative extensions and intricate hand-painted designs from our master artists.",
    price: "₹1500",
    duration: "75 Mins",
    review:
      "Tiny canvases, massive impact! My nail art has been the talk of every party.",
    clientName: "Ishita D.",
    highlights: ["Acrylic Extensions", "Gel Polish", "Nail Art"],
    image: nailImage,
    icon: <Star size={24} />,
    color: "#EBE8E0",
  },
  {
    id: 6,
    title: "Luxury Pedicure",
    category: "Hand & Foot Care",
    description:
      "Soothing ritual for your hands and feet, featuring organic scrubs and massage.",
    price: "₹1200",
    duration: "45 Mins",
    review:
      "The most relaxing pedicure ever. My feet feel brand new and so soft!",
    clientName: "Sneha G.",
    highlights: ["Organic Scrub", "Hot Stone Massage", "Premium Polish"],
    image: pedicureImage,
    icon: <Droplets size={24} />,
    color: "#F8F5F0",
  },
  {
    id: 7,
    title: "Professional Lice Treatment",
    category: "Essential Care",
    description:
      "Safe, effective, and chemical-free lice removal treatment in a comfortable environment.",
    price: "₹1000",
    duration: "60 Mins",
    review:
      "Very professional and thorough treatment. Highly recommend for safe removal.",
    clientName: "Ritu M.",
    highlights: ["Chemical-free", "Scalp Health", "Follow-up Check"],
    image: liceImage,
    icon: <ShieldCheck size={24} />,
    color: "#F4F1EC",
  },
  {
    id: 8,
    title: "Event HD Makeup",
    category: "High Definition",
    description:
      "Sophisticated and long-lasting looks for your most memorable social occasions.",
    price: "₹3000",
    duration: "90 Mins",
    review:
      "I received so many compliments! The HD finish is perfect for photographers.",
    clientName: "Sanya K.",
    highlights: ["Photo-ready Finish", "Lash Enhancement", "Brow Sculpting"],
    image: makeupImage,
    icon: <Crown size={24} />,
    color: "#EBE8E0",
  },
  {
    id: 9,
    title: "Elite Master Art",
    category: "Grand Ritual",
    description:
      "The pinnacle of our artisan crafts, performed by our most senior team.",
    price: "Custom",
    duration: "Varies",
    review:
      "Beyond just a service—it's genuine artistry and unmatched attention.",
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
    description:
      "Relax within our award-winning architectural home designed for calm.",
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
          scrub: 1,
          anticipatePin: 1,
        },
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
      className="showcase-container bg-background transition-colors duration-1000 overflow-hidden"
      ref={containerRef}
    >
      {/* Mobile/Tablet Layout (< dt) */}
      <div className="dt:hidden py-10 tb:py-20 px-4 tb:px-6 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl tb:text-4xl font-black text-on-surface uppercase tracking-tighter italic font-serif">
            Signature <span className="text-primary italic">Services</span>
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
                />
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary text-white rounded-xl shadow-lg">
                    {service.icon}
                  </div>
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                    {service.category}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-on-surface uppercase italic font-serif">
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
      <div className="hidden dt:grid max-w-7xl mx-auto px-12 grid-cols-2 gap-16 xl:gap-24 pb-32">
        {/* Left Column: Rich Content */}
        <div className="space-y-0 flex flex-col items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="showcase-info h-screen flex items-center justify-center text-center"
            >
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
                  <p className="text-on-surface/90 text-lg leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Highlights & Duration */}
                <div className="flex flex-col items-center gap-4 py-2">
                  <div className="flex flex-wrap justify-center gap-2">
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

                {/* Review Snippet */}
                <div className="relative px-8 pt-6 pb-4 bg-on-surface/5 rounded-3xl border border-on-surface/20">
                  <Quote
                    className="absolute top-2 left-2 text-primary/30 rotate-180"
                    size={24}
                  />
                  <p className="text-on-surface/90 text-sm italic font-medium leading-relaxed mb-2">
                    "{service.review}"
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    — {service.clientName}
                  </span>
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col items-center gap-4 pt-4 w-full">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface/60 mb-1">
                      Ritual Investment
                    </span>
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
        <div
          className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          ref={rightColRef}
        >
          <div className="relative w-full max-w-[500px] xl:max-w-[550px] aspect-4/5 rounded-[3rem] overflow-hidden shadow-luxury-deep border-8 border-white bg-white">
            {services.map((service) => (
              <div key={service.id} className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="showcase-img w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
