import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/zentonsz.png";

const NAV_LINKS = [
  { name: "Home",    path: "/" },
  { name: "About",   path: "/about" },
  { name: "Services",path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close menu on route change ── */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary-container/30 py-2 md:py-3 shadow-lg shadow-primary/5 backface-hidden"
          : "bg-transparent py-4 md:py-6 backface-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* ── Logo ── */}
        <Link to="/" className="relative group shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <img
              src={logo}
              alt="Zentonsz"
              className={`h-8 sm:h-9 md:h-10 w-auto transition-all duration-300 ${
                isScrolled
                  ? "brightness-100"
                  : "brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              }`}
            />
          </motion.div>
        </Link>

        {/* ── Desktop Links (lg+) ── */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative group ${
                location.pathname === link.path ? "text-primary" : "text-secondary"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold text-[9px] xl:text-[10px] py-2.5 xl:py-3 px-5 xl:px-6"
            >
              Book Appointment
            </motion.button>
          </Link>
        </div>

        {/* ── Tablet nav (md–lg): compact links + CTA ── */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold text-[9px] py-2 px-4"
            >
              Book Now
            </motion.button>
          </Link>
          {/* Hamburger for remaining links on tablet */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-on-surface tap-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={22} className={isMobileMenuOpen ? "text-primary" : ""} />
          </motion.button>
        </div>

        {/* ── Mobile Toggle (< md) ── */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-on-surface tap-target"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen
            ? <X size={26} className="text-primary" />
            : (
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-0.5 bg-on-surface rounded-full" />
                <div className="w-6 h-0.5 bg-on-surface rounded-full" />
                <div className="w-4 h-0.5 bg-primary rounded-full" />
              </div>
            )
          }
        </motion.button>
      </div>

      {/* ── Mobile / Tablet Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-background z-50 flex flex-col shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-5 sm:p-6 border-b border-surface-dim">
                <img src={logo} alt="Zentonsz" className="h-8 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-on-surface tap-target"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col px-5 sm:px-6 py-6 gap-1 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 py-4 text-2xl sm:text-3xl font-black uppercase tracking-tight italic font-serif border-b border-surface-dim/50 transition-colors ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-on-surface hover:text-primary"
                      }`}
                    >
                      {location.pathname === link.path && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-5 sm:p-6 border-t border-surface-dim">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-premium-gold w-full py-4 text-sm"
                  >
                    <Sparkles size={14} className="inline mr-2" />
                    Book Your Appointment
                  </motion.button>
                </Link>
                <p className="text-center text-[10px] text-on-surface/40 mt-4 uppercase tracking-widest">
                  Mon–Sat · 10AM–8:30PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
