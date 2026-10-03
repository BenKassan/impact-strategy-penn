import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfikpDPL_z-lMeGv-SbcDwmRic5_1W4mmOvFq67bfLzP2nbJA/viewform?usp=header";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Who We Are", id: "about" },
  { label: "Partners", id: "partners" },
  { label: "What We Do", id: "initiatives" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const solid = scrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-penn-blue shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <img
              src="/lovable-uploads/b94021bb-e352-4352-9c74-5cea26fd63c3.png"
              alt="Education Consulting at Penn logo"
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-ivory">
              <span className="hidden lg:inline">Education Consulting at Penn</span>
              <span className="lg:hidden">ECP</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-[0.7rem] uppercase tracking-[0.16em] text-ivory/80 transition-colors hover:text-ivory"
              >
                {item.label}
              </button>
            ))}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ivory/60 px-6 py-2 font-display text-[0.7rem] uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory hover:text-penn-blue"
            >
              Apply Now
            </a>
          </nav>

          <button
            className="text-ivory md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-5 border-t border-ivory/20 py-6 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left font-display text-xs uppercase tracking-[0.16em] text-ivory/85"
              >
                {item.label}
              </button>
            ))}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border border-ivory/60 px-6 py-2 font-display text-xs uppercase tracking-[0.16em] text-ivory"
            >
              Apply Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
