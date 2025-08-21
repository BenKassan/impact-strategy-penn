import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Bot, Users, Heart, ExternalLink } from "lucide-react";

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Our Initiatives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We focus on three key areas to drive educational transformation and create 
            meaningful impact for students and educators alike.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">Education Equal Opportunity</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                Advocating for equitable access to quality education for all students, 
                regardless of their background or circumstances. We work to identify and 
                eliminate barriers that prevent equal educational opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">AI's Impact on Education</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                Exploring and harnessing the transformative potential of artificial intelligence 
                in education. We research and implement AI-driven solutions to personalize 
                learning and enhance educational outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">Mentorship</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                Connecting students with experienced mentors to provide guidance, support, 
                and inspiration. Our mentorship programs foster personal and academic growth 
                through meaningful relationships and strategic advice.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Partnership */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-accent mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Featured Partnership</h3>
            </div>
            
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                Philly Book Bank Collaboration
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're proud to partner with the Philly Book Bank, a Philadelphia nonprofit 
                dedicated to fostering literacy by providing free, high-quality, culturally 
                relevant books to children from birth through high school.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background/80 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-primary mb-3">Our Impact Together</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Over 250,000 books distributed in the past 5 years</li>
                  <li>• Community events and pop-up libraries</li>
                  <li>• Partnerships with local organizations</li>
                  <li>• Data-driven strategy to maximize reach</li>
                </ul>
              </div>
              <div className="bg-background/80 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-primary mb-3">Located At</h5>
                <p className="text-muted-foreground mb-4">
                  Martin Luther King High School, distributing books through 
                  community events, sidewalk libraries, and strategic partnerships 
                  to create literacy-rich environments across Philadelphia.
                </p>
                <div className="text-lg font-medium text-accent">
                  "Raising a city of readers"
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More About Our Partnerships
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;