import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Extend Window interface for Lenis global access
declare global {
  interface Window {
    lenisInstance?: Lenis | null;
  }
}

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = () => {
  useEffect(() => {
    // Advanced Lenis optimization for premium feel
    const lenis = new Lenis({
      lerp: 0.08, // Faster, more responsive feel
      smoothWheel: true,
      wheelMultiplier: 1.2, // Stronger response to scroll
      touchMultiplier: 1.5,
      syncTouch: false, // Prevents occasional lag on touch devices
    });

    // Synchronize ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for the RAF loop
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    // Remove lagSmoothing or set to a standard value to prevent stutter
    gsap.ticker.lagSmoothing(500, 33);

    // Store lenis on window for global access
    window.lenisInstance = lenis;

    // Handle anchor links smoothly with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element instanceof HTMLElement) {
          lenis.scrollTo(element, { offset: -80 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      window.lenisInstance = null;
    };
  }, []);

  return null;
};
