import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SparkleHeading } from "../ui/SparkleHeading";
import "./Gallery.css";

// Import local assets
import bridalImage from "../../assets/hairwebp images/haircutv.webp";
import hairImage from "../../assets/hairwebp images/butterflycut.webp";
import skinImage from "../../assets/facialwebpimages/facial5.webp";
import spaImage from "../../assets/hairspawebpimages/hairspa1.webp";
import makeupImage from "../../assets/facialwebpimages/facial1.webp";
import nailImage from "../../assets/nailwebpimages/nail4.webp";
import liceImage from "../../assets/licewebpimages/lice3.webp";
import pedicureImage from "../../assets/pedicurewebpimages/manicure1.webp";
import interiorImage from "../../assets/hairspawebpimages/hairspa2.webp";
import vesselImage from "../../assets/nailwebpimages/nail5.webp";

interface GalleryImage {
  src: string;
  alt: string;
  vPos?: string;
}

const IMAGES_DATA: GalleryImage[] = [
  { src: skinImage, alt: "Skin Care" },
  { src: makeupImage, alt: "Facial Treatment" },
  { src: pedicureImage, alt: "Manicure & Pedicure" },
  { src: spaImage, alt: "Hair Spa" },
  { src: bridalImage, alt: "Bridal Makeup", vPos: "top" },
  { src: nailImage, alt: "Nails" },
  { src: liceImage, alt: "Lice Removal" },
  { src: hairImage, alt: "Hair Styling" },
  { src: interiorImage, alt: "Salon Interior" },
  { src: vesselImage, alt: "Luxury Detail" },
];

const ImageTrackGallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const mouseDownAt = useRef<number>(0);
  const prevPercentage = useRef<number>(0);
  const percentage = useRef<number>(0);

  useEffect(() => {
    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      mouseDownAt.current = clientX;
    };

    const handleOnUp = () => {
      mouseDownAt.current = 0;
      prevPercentage.current = percentage.current;
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (mouseDownAt.current === 0) return;

      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const mouseDelta = mouseDownAt.current - clientX;
      const maxDelta = window.innerWidth / 2;

      const p = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = prevPercentage.current + p;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      percentage.current = nextPercentage;

      if (trackRef.current) {
        trackRef.current.animate(
          {
            transform: `translate(${nextPercentage}%, -50%)`,
          },
          { duration: 1200, fill: "forwards", easing: "ease-out" }
        );

        const domImages = trackRef.current.getElementsByClassName("image-track-img");
        Array.from(domImages).forEach((image, index) => {
          (image as HTMLElement).animate(
            {
              objectPosition: `${100 + nextPercentage}% ${IMAGES_DATA[index].vPos || "center"}`,
            },
            { duration: 1200, fill: "forwards", easing: "ease-out" }
          );
        });
      }
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove, { passive: false });

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, []);


  return (
    <section className="image-track-container snap-section overflow-hidden bg-white!">
      {/* Merged Text Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center tb:justify-start pt-12 tb:pt-24 px-4 text-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="glow-text bg-white/40 backdrop-blur-sm p-4 tb:p-8 rounded-3xl"
        >
          <h1 className="text-display text-slate-900 mb-4 tb:mb-6 normal-case glow-text">
            <SparkleHeading text="The Signature" className="text-slate-900" />
            <br className="dt:block hidden" />
            <SparkleHeading
              text="Lookbook"
              className="text-primary"
              sparkleScale={1.3}
            />
          </h1>
          <p className="text-base tb:text-xl dt:text-2xl text-slate-600/90 leading-relaxed max-w-2xl mx-auto px-4 mb:px-0">
            "A curated journey through the art of transformation, from our
            master stylists to your personal reflection."
          </p>
        </motion.div>
      </div>

      {/* Image Track slider */}
      <div id="image_track" ref={trackRef} className="image-track">
        {IMAGES_DATA.map((img, index) => (
          <img
            key={index}
            className="image-track-img"
            src={img.src}
            alt={img.alt}
            draggable="false"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageTrackGallery;
