import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b94021bb-e352-4352-9c74-5cea26fd63c3.png" 
              alt="Education Consulting at Penn Logo" 
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Education Consulting at Penn</h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-primary">ECP</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('initiatives')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Initiatives
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Resources
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-primary-light"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('initiatives')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Initiatives
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Resources
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-primary-light w-fit"
              >
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;