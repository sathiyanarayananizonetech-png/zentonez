import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center', dark = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4 block">
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold ${dark ? 'text-surface' : 'text-on-surface'}`}>
        {title}
      </h2>
      <div
        className={`mt-6 h-1 w-24 bg-primary ${align === 'center' ? 'mx-auto' : ''} rounded-full opacity-60`}
      />
    </motion.div>
  );
};

export default SectionHeading;
