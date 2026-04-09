import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../../assets/zentonsz.png";

export function FloatingLogo() {
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity and vertical translation
  // It starts fading immediately and is fully gone by 120px scroll
  const opacity = useTransform(scrollY, [0, 120], [1, 0]);
  const y = useTransform(scrollY, [0, 120], [0, -20]);
  const scale = useTransform(scrollY, [0, 120], [1, 0.8]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="fixed top-6 right-6 z-[60] lg:hidden pointer-events-none"
    >
      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-luxury-deep bg-white/10 backdrop-blur-md p-1 shadow-2xl">
        <img
          alt="Zen Tonez Floating Logo"
          src={logo}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </motion.div>
  );
}
