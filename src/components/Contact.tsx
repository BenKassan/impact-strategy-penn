import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, Heart, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to partner with us or learn more about our educational consulting services? 
              We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Prospective Partners</h3>
                <p className="text-muted-foreground text-sm">
                  Educational organizations looking for strategic consulting and data-driven solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Students</h3>
                <p className="text-muted-foreground text-sm">
                  Penn students interested in joining our team and making an impact in education
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Supporters</h3>
                <p className="text-muted-foreground text-sm">
                  Anyone who shares our interest in educational equity and wants to get involved
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Let's Work Together
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Whether you're an educational organization seeking consulting services, 
                a student passionate about making a difference, or someone who shares our 
                commitment to educational equity, we're eager to connect.
              </p>
            </div>

            <div className="bg-background/80 rounded-xl p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg font-semibold text-primary">Contact Us</span>
              </div>
              <a 
                href="mailto:educationconsultingatpenn@gmail.com"
                className="text-lg text-accent hover:text-accent-light transition-colors font-medium"
              >
                educationconsultingatpenn@gmail.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground"
              >
                <a href="mailto:educationconsultingatpenn@gmail.com">
                  Send Us an Email
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                asChild
                className="bg-accent hover:bg-accent-light text-accent-foreground"
              >
                <a 
                  href="https://pennclubs.com/club/penn-education-consulting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              We typically respond to inquiries within 24-48 hours. 
              Thank you for your interest in Education Consulting at Penn!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;