import logo from "../../assets/zentonsz.png";

export function MobileTopBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/5 backdrop-blur-xl shadow-sm flex items-center px-6 lg:hidden border-b border-primary/20 h-12">
      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-luxury-deep transition-transform active:scale-95 bg-white shrink-0 translate-y-2">
        <img
          alt="Zen Tonez Logo"
          src={logo}
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
}
