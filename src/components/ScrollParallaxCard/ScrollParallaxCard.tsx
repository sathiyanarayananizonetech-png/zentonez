import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./ScrollParallax.css";

interface ParallaxItemProps {
  title: string;
  description: string;
  image: string;
  price: string;
  index: number;
}

export const ScrollParallaxCard: React.FC<ParallaxItemProps> = ({
  title,
  description,
  image,
  price,
  index,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize random values once per component instance using a state initializer
  // to satisfy React purity rules (it only runs once).
  const [randomParams] = React.useState(() => ({
    rz: parseFloat((Math.random() - 0.5).toFixed(2)),
    rotationAmount: Math.floor(Math.random() * (70 - 50 + 1) + 60),
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the progress for the movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Image Parallax (Inner movement)
  const imageTranslateY = useTransform(smoothProgress, [0, 1], [-60, 60]);

  // Card 3D Rotation
  const cardRotation = useTransform(
    smoothProgress, 
    [0, 1], 
    [randomParams.rotationAmount, -randomParams.rotationAmount]
  );

  return (
    <div 
      ref={containerRef}
      style={{ position: "relative" }}
      className={`relative parallax-content__item parallax-content__item--expand ${
        index % 2 === 1 ? "even" : "odd"
      }`}
    >
      {/* 3D Rotating Wrapper */}
      <motion.div 
        className="parallax-content__item-imgwrap"
        style={{
          rotateX: 0,
          rotateY: cardRotation,
          rotateZ: randomParams.rz, // minor tilt
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div 
          className="parallax-content__item-img"
          style={{
            backgroundImage: `url(${image})`,
            y: imageTranslateY,
          }}
        />
      </motion.div>

      {/* Floating Info */}
      <motion.div 
        className="parallax-content__item-description"
        style={{
          translateZ: "100px",
        }}
      >
        <motion.h2 
          className="parallax-content__item-title"
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <p className="description-text">{description}</p>
        <div className="parallax-price">Starting from {price}</div>
      </motion.div>
    </div>
  );
};
