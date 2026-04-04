import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon, price }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[450px] overflow-hidden rounded-3xl shadow-luxury-soft bg-secondary/10 flex flex-col border border-secondary/20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/20 to-transparent" />
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white text-left">
        <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="p-3 bg-primary w-fit rounded-xl shadow-luxury-soft mb-4 text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 font-serif italic">
            {title}
          </h3>
          <p className="text-surface/80 line-clamp-2 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>
          {price && (
            <span className="text-lg font-bold tracking-wider text-primary uppercase block">
              Starting from {price}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
