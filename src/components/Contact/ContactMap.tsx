import React from "react";
import { MapPin } from "lucide-react";

const ContactMap: React.FC = () => {
  return (
    <section className="h-[250px] tb:h-[400px] dt:h-[500px] mt-10 tb:mt-24 bg-white relative flex items-center justify-center overflow-hidden border-t border-on-surface/5">
      <div className="relative z-10 text-center px-4">
        <MapPin className="text-primary w-10 h-10 tb:w-16 tb:h-16 mx-auto mb-4 tb:mb-6" />
        <h3 className="text-2xl tb:text-3xl font-black uppercase font-serif tracking-tight">
          Thillai Nagar, Trichy
        </h3>
        <p className="text-on-surface/30 uppercase tracking-[0.4em] text-[9px] tb:text-[10px] mt-3 tb:mt-4 font-black">
          The Heart of Luxury
        </p>
      </div>
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-on-surface) 1px, transparent 1px), linear-gradient(to bottom, var(--color-on-surface) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-radial-to-c from-transparent to-white" />
    </section>
  );
};

export default ContactMap;
