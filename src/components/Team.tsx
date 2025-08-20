import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ben Kassan",
    role: "President & Co-Founder",
    image: "/lovable-uploads/bd7d6a64-9f0b-4675-85ca-efc1d66d04d9.png",
    education: "Junior, Economics & Business Statistics",
    description: "Ben's passion for education began with high school tutoring and led him to found a tutoring company (Quaker Tutors), where he identified inefficiencies in the education system. This experience inspired him to start ECP, focusing on strategic, data-driven solutions to address educational challenges.",
    category: "Co-Founder"
  },
  {
    name: "Oscar Schwartz",
    role: "Vice President & Co-Founder", 
    image: "/lovable-uploads/546792c4-f498-43a4-814a-7ceb9e62c057.png",
    education: "Junior, PPE & Hispanic Studies, Minor in American Public Policy",
    description: "Oscar co-founded ECP and is deeply involved in education research and social impact consulting. He has worked on financial literacy initiatives, policy research, and nonprofit consulting projects. His Philadelphia background and advocacy work reflect a strong commitment to equitable education.",
    category: "Co-Founder"
  },
  {
    name: "Samantha Mirabal",
    role: "Analyst",
    image: "/lovable-uploads/98a94893-200e-4aa0-843a-880b57ea2f99.png", 
    education: "Sophomore, Wharton School - Finance Concentration",
    description: "From Miami, FL, Samantha is passionate about education and financial literacy. She has prior community service experience and is involved in several campus clubs including Wharton Undergraduate Finance Club, Common Cents, and Women in Consulting. Her broad involvement positions her to contribute fresh insights.",
    category: "Analyst"
  },
  {
    name: "Julian Williams",
    role: "Analyst",
    image: "/lovable-uploads/f7768aa3-d3f9-43b1-ba48-08d616d0f5f3.png",
    education: "Junior, College of Arts & Sciences - Philosophy & Creative Writing",
    description: "Julian brings a unique perspective to consulting, having worked as a preschool teacher which gave him firsthand insight into early childhood development and student engagement. His analytical and communication skills enable him to think critically about educational challenges and craft compelling solutions.",
    category: "Analyst"
  },
  {
    name: "Collin Wang",
    role: "Analyst", 
    image: "/lovable-uploads/cdab4171-57bb-41a6-91f5-f3b9d6b8fbdc.png",
    education: "Sophomore, Economics & Statistics",
    description: "Originally from Pittsburgh, PA, Collin has experience interning at a children's museum and founded his own college essay-editing service, showing entrepreneurial initiative and dedication to education. He is passionate about leveraging data-driven insights to help educational organizations grow and improve.",
    category: "Analyst"
  },
  {
    name: "Eric Li",
    role: "Analyst",
    image: "/lovable-uploads/01e5b235-cd09-4d97-9bb3-16d76a5fa114.png",
    education: "Sophomore, Huntsman Program - Business & International Studies, Spanish, Entrepreneurship & Innovation",
    description: "Eric is passionate about entrepreneurship and socially responsible investing. He serves as a product advisor and head of outreach for an education technology startup, where he's applied negotiation and product development skills. He brings an innovative, global perspective to consulting projects.",
    category: "Analyst"
  },
  {
    name: "Niko Mamula",
    role: "Analyst",
    image: "/lovable-uploads/2f6bc23d-463a-4c69-8fac-b11b9f521705.png",
    education: "Junior, College of Arts & Sciences - PPE & French & Francophone Studies",
    description: "As a Philadelphia native, Niko has witnessed the city's educational inequities firsthand and is passionate about empowering underprivileged students in his hometown. His interdisciplinary academic background and community involvement inform his approach to consulting and creating more equitable learning environments.",
    category: "Analyst"
  }
];

const Team = () => {
  const founders = teamMembers.filter(member => member.category === "Co-Founder");
  const analysts = teamMembers.filter(member => member.category === "Analyst");

  const TeamSection = ({ title, members, bgColor }: { title: string, members: typeof teamMembers, bgColor: string }) => (
    <div className={`${bgColor} rounded-2xl p-6 mb-12`}>
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-card">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <img 
                  src={member.image} 
                  alt={`${member.name}, ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-accent/20"
                />
                <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                <p className="text-sm text-muted-foreground font-medium">{member.education}</p>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ECP is led by a team of passionate University of Pennsylvania students and advisors, 
            each bringing unique academic backgrounds and experiences to drive educational impact.
          </p>
        </div>

        <TeamSection title="Co-Founders" members={founders} bgColor="bg-primary/5" />
        <TeamSection title="Analysts" members={analysts} bgColor="bg-secondary/50" />

        {/* Join Our Team CTA */}
        <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Join Our Team?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Become part of ECP and help us drive meaningful change in Philadelphia's education landscape. 
            We're looking for passionate Penn students who want to make an impact through data-driven consulting.
          </p>
          <Button 
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <a 
              href="https://pennclubs.com/club/penn-education-consulting/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;