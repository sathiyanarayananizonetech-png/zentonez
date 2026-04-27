import { motion } from 'framer-motion';

export type CardItem = {
  id: number | string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: string;
  image?: string;
};

interface CardStackProps {
  items: CardItem[];
  className?: string;
  activeIndex: number;
}

const CardStack: React.FC<CardStackProps> = ({ items, className, activeIndex }) => {
  return (
    <div className={`relative w-full aspect-4/5 sm:aspect-video flex items-center justify-center ${className || ''}`}>
      <div className="relative w-full h-full max-w-xl mx-auto">
        {items.map((item, i) => {
          // Distance from the currently active card
          const diff = i - activeIndex;
          
          // Animation states
          // 1. Future cards: Hidden below/side
          // 2. Current card: Focused in center
          // 3. Past cards: Scaled down and pushed back

          // Staggered horizontal entry for future cards
          const entryX = i % 2 === 0 ? -120 : 120;

          return (
            <motion.div
              key={item.id}
              className="absolute inset-0 rounded-[30px] sm:rounded-[40px] shadow-xl border border-white/10 p-6 sm:p-10 flex flex-col justify-center overflow-hidden"
              style={{
                background: item.gradient || 'linear-gradient(200deg, #333 0%, #000 100%)',
                zIndex: items.length - Math.abs(diff),
                transformPerspective: 1000,
              }}
              initial={false}
              animate={{
                // Position logic - Locked at 0 for active/past cards
                y: diff > 0 ? 60 : 0, 
                x: diff > 0 ? entryX : 0,
                scale: diff > 0 ? 0.85 : 1 + diff * 0.04,
                
                // Visibility
                opacity: diff > 0 ? 0 : Math.max(0, 1 + diff * 0.5),
                filter: `brightness(${Math.max(0.8, 1 + diff * 0.1)})`,
                
                // Rotation for depth
                rotateX: diff * -1,
              }}

              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 1
              }}
            >
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20" 
                />
              )}
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-8 text-center sm:text-left">
                  {item.icon && (
                    <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center bg-white/15 rounded-2xl border border-white/20 backdrop-blur-sm shadow-inner shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-4xl font-black text-white drop-shadow-md tracking-tight uppercase italic font-serif leading-none">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-white font-medium text-sm sm:text-lg leading-relaxed border-t border-white/20 pt-4 sm:pt-6 text-center sm:text-left">
                  {item.description}
                </p>
                
                <div className="mt-6 sm:mt-10 flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  <span className="px-3 sm:px-5 py-1 sm:py-2 bg-white/10 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/10 backdrop-blur-sm">
                    Premium Ritual
                  </span>
                  <span className="px-3 sm:px-5 py-1 sm:py-2 bg-white/10 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/10 backdrop-blur-sm">
                    Artisanal Care
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardStack;
