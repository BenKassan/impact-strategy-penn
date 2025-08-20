import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b94021bb-e352-4352-9c74-5cea26fd63c3.png" 
                alt="Education Consulting at Penn Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-xl font-bold">Education Consulting at Penn</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Partnering with Philadelphia education initiatives to provide strategic, 
              data-informed solutions that drive meaningful student outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('team');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('initiatives');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Initiatives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('resources');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:educationconsultingatpenn@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  educationconsultingatpenn@gmail.com
                </a>
              </div>
              <p className="text-primary-foreground/60 text-sm">
                University of Pennsylvania<br />
                Philadelphia, PA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Education Consulting at Penn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;