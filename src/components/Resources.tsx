import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Brain, Target, BookMarked, TrendingUp, ExternalLink } from "lucide-react";

const resourceCategories = [
  {
    title: "Resume & Career Docs",
    icon: FileText,
    description: "Essential career documents and guides including consulting resume templates, cover letter guides for top firms, and common fit interview questions.",
    items: [
      "Consulting resume templates",
      "Cover letter guides (McKinsey, BCG, Bain)",
      "Fit interview question bank",
      "Career development resources"
    ]
  },
  {
    title: "BCG Material",
    icon: Brain,
    description: "Comprehensive preparation for Boston Consulting Group's recruitment process and assessments.",
    items: [
      "BCG Consulting Career Assessment (CCA)",
      "BCG Casey interactive chatbot",
      "BCG Quantitative Reasoning Test prep",
      "BCG Pymetrics Test guidance"
    ]
  },
  {
    title: "McKinsey Games & Guides",
    icon: Target,
    description: "Practice resources for McKinsey's digital assessment games and problem-solving evaluations.",
    items: [
      "McKinsey Solve games (Red Rock, Ecosystem)",
      "McKinsey Sea Wolf game prep",
      "Digital assessment strategies",
      "Problem-solving frameworks"
    ]
  },
  {
    title: "Bain & Company",
    icon: TrendingUp,
    description: "Preparation materials for Bain's recruitment assessments and analytical skill evaluations.",
    items: [
      "Bain TestGorilla prep",
      "Bain SOVA online tests",
      "Analytical skills development",
      "Assessment format guides"
    ]
  },
  {
    title: "Extra Materials",
    icon: BookMarked,
    description: "Additional consulting prep tools, case books, and comprehensive practice resources.",
    items: [
      "Free case interview books",
      "Business acumen primers",
      "Consulting Starter Pack",
      "2,000+ quantitative practice questions"
    ]
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">CaseBasix Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting preparation resources available to ECP members and the broader Penn community. 
            Our partnership with CaseBasix.com provides access to top-tier consulting prep materials.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Professional Development Commitment</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ECP requires all new members to undergo consulting training via CaseBasix, ensuring they develop 
              the necessary problem-solving and analytical toolkit. This dual approach allows us to serve 
              education nonprofits with quality consulting while preparing our student consultants for 
              future careers in consulting and social impact.
            </p>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Develop Your Consulting Skills?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join ECP to access these comprehensive resources and develop the analytical toolkit 
            needed to make a meaningful impact in education consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground"
            >
              Access Resources
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              asChild
              className="bg-accent hover:bg-accent-light text-accent-foreground"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScvLf761s-ILBRDRn_XbaKNYukQYZyfDy4mW04-8uOXAYdP_g/viewform?usp=sf_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;