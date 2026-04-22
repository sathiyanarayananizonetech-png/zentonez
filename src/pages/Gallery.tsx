import GalleryBookHero from "../components/Gallery/GalleryBookHero";
import InteractiveSelector from "../components/ui/interactive-selector";
import GalleryFooter from "../components/Gallery/GalleryFooter";
import { SocialSidebar } from "../components/ui/SocialSidebar";

const Gallery: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-background text-slate-900 font-sans relative min-h-screen">
      {/* Dust overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay z-9999"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/white-dust-scratches-black-background_279525-2.jpg?w=640")',
          backgroundRepeat: "repeat",
        }}
      />

      <GalleryBookHero />
      <InteractiveSelector />
      <GalleryFooter />
      <SocialSidebar />
    </div>
  );
};

export default Gallery;
