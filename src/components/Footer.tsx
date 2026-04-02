import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "../assets/zentonsz.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface text-surface pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Grid: 1-col → 2-col → 4-col ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand Info */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img
                src={logo}
                alt="Zentonsz Beauty"
                className="h-10 sm:h-12 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-surface-dim leading-relaxed font-light text-sm sm:text-base max-w-xs">
              Elevating your beauty experience with premium services and expert
              care. Your transformation is our passion.
            </p>
            <div className="flex space-x-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={["Instagram", "Facebook", "Twitter"][i]}
                  className="p-2.5 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 tap-target"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-5 border-b border-primary/30 pb-2">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home",       path: "/" },
                { label: "Our Story",  path: "/about" },
                { label: "Our Work",   path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-surface-dim hover:text-primary transition-colors block text-sm sm:text-base py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-5 border-b border-primary/30 pb-2">
              Services
            </h3>
            <ul className="space-y-3">
              {["Bridal Makeup", "Hair Styling", "Skin Care", "Spa & Facial"].map((s) => (
                <li
                  key={s}
                  className="text-surface-dim text-sm sm:text-base cursor-default"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-5 border-b border-primary/30 pb-2">
              Visit Us
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" />
                <span className="text-surface-dim leading-relaxed text-sm sm:text-base">
                  Thillai Nagar, Trichy
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <a
                  href="tel:+919876543210"
                  className="text-surface-dim text-sm sm:text-base hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <a
                  href="mailto:info@zentonszbeauty.com"
                  className="text-surface-dim text-sm sm:text-base hover:text-primary transition-colors break-all"
                >
                  info@zentonszbeauty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 text-center text-gray-500 text-xs sm:text-sm italic">
          <p>© {currentYear} Zentonsz Beauty Parlour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
