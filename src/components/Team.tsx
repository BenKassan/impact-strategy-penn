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
    description: "Oscar has a passion for blending consulting with social impact to drive meaningful change. This past summer at Hudson Ferris, a nonprofit-focused consulting firm, he deepened his expertise in social impact consulting. As an incoming McKinsey Summer Business Analyst, he brings strategic consulting experience to ECP. As co-founder, he leverages this expertise in education research, financial literacy initiatives, and policy research. His Philadelphia background and advocacy work fuel his commitment to creating equitable educational opportunities through strategic, data-driven solutions.",
    category: "Co-Founder"
  },
  {
    name: "Samantha Mirabal",
    role: "President",
    image: "/lovable-uploads/98a94893-200e-4aa0-843a-880b57ea2f99.png", 
    education: "Sophomore, Wharton School - Finance & Marketing",
    description: "Samantha Mirabal is a sophomore in The Wharton School concentrating in Finance and Marketing. Originally from Miami, Florida, she is passionate about financial literacy, education, and giving back to the community. She first joined ECP in her freshman spring semester as an analyst and now serves as President. Outside of ECP, Samantha is involved in Penn Women in Consulting, Wharton Women, Common Cents, Wharton Undergraduate Finance Club, Wharton Management Club, and the Successful Transition and Empowerment Program (STEP). In her free time, Samantha enjoys reading, playing piano, traveling, drinking coffee, and spending time with family and friends. Feel free to reach out to her at mirabal@wharton.upenn.edu",
    category: "Project Leader"
  },
  {
    name: "Eric Li",
    role: "Project Leader",
    image: "/lovable-uploads/01e5b235-cd09-4d97-9bb3-16d76a5fa114.png",
    education: "Sophomore, Huntsman Program - Business & International Studies, Spanish, Entrepreneurship & Innovation",
    description: "Eric is passionate about entrepreneurship and socially responsible investing. He serves as a product advisor and head of outreach for an education technology startup, where he's applied negotiation and product development skills. He brings an innovative, global perspective to consulting projects.",
    category: "Project Leader"
  },
  {
    name: "Niko Mamula",
    role: "Project Leader",
    image: "/lovable-uploads/2f6bc23d-463a-4c69-8fac-b11b9f521705.png",
    education: "Junior, College of Arts & Sciences - PPE & French & Francophone Studies",
    description: "As a Philadelphia native, Niko has witnessed the city's educational inequities firsthand and is passionate about empowering underprivileged students in his hometown. His interdisciplinary academic background and community involvement inform his approach to consulting and creating more equitable learning environments.",
    category: "Project Leader"
  },
  {
    name: "Sarah Wang",
    role: "Project Leader",
    image: "/lovable-uploads/a77b28b7-0d67-4f27-9dd8-9faa19bfef2e.png",
    education: "Sophomore, Economics & Real Estate",
    description: "Originally from Chicago, Sarah has experience in financial literacy mentorship, coordinating housing assistance for underprivileged families, and international volunteer service. She has a strong background in serving her local community and is excited to bring that passion to addressing educational disparities and promoting economic empowerment in the Philadelphia community. She is looking forward to contributing to ECP's data-driven consulting projects.",
    category: "Project Leader"
  },
  {
    name: "Sebastian Cordulack",
    role: "Project Leader",
    image: "/lovable-uploads/sebastian-cordulack.jpeg",
    education: "Junior, PPE (Philosophy, Politics, and Economics)",
    description: "Sebastian brings valuable financial and consulting experience to ECP, having worked as an investment banking intern at Architect Partners, a crypto-focused M&A advisory firm. His background includes experience in venture capital and at an early-stage startup, providing him with a unique perspective on strategic business solutions. In his free time, he enjoys rock climbing, sailing, playing soccer with friends, and snowboarding.",
    category: "Project Leader"
  }
];

const Team = () => {

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

        <TeamSection title="Our Team" members={teamMembers} bgColor="bg-primary/5" />

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
              href="https://docs.google.com/forms/d/e/1FAIpQLSfikpDPL_z-lMeGv-SbcDwmRic5_1W4mmOvFq67bfLzP2nbJA/viewform?usp=header" 
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