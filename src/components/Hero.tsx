import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary-light to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Hero Content */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforming Education Through
              <span className="text-accent block mt-2">Data-Driven Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We partner with Philadelphia education initiatives to provide strategic, 
              data-informed solutions that enhance effectiveness and drive meaningful student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection('initiatives')}
                className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Our Impact <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('team')}
                className="bg-background/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-background/30 hover:border-primary-foreground/50 text-lg px-8 py-6 rounded-xl transition-all"
              >
                Meet the Team
              </Button>
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScvLf761s-ILBRDRn_XbaKNYukQYZyfDy4mW04-8uOXAYdP_g/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          </div>

          {/* Problem Statistics */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary-foreground">
              The Challenge We're Addressing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">71%</div>
                <p className="text-primary-foreground/90">
                  of Philadelphia's 4th graders are not reading at grade level
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">52%</div>
                <p className="text-primary-foreground/90">
                  of adults in Philadelphia are functionally illiterate
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4</div>
                <p className="text-primary-foreground/90">
                  affordable after-school programs providing high-impact tutoring citywide
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tutoring</h3>
              <p className="text-primary-foreground/80">
                Providing vital academic support to help students excel in their studies
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-primary-foreground/80">
                Offering guidance and personal support for academic and personal growth
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">College Readiness</h3>
              <p className="text-primary-foreground/80">
                Preparing high school students for successful transition to higher education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;