import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ben Kassan",
    role: "Co-Founder",
    image: "/lovable-uploads/bd7d6a64-9f0b-4675-85ca-efc1d66d04d9.png",
    education: "Junior, Economics & Business Statistics",
    description: "Ben's passion for education began with high school tutoring and led him to found a tutoring company (Quaker Tutors), where he identified inefficiencies in the education system. This experience inspired him to start ECP, focusing on strategic, data-driven solutions to address educational challenges.",
    category: "Co-Founder"
  },
  {
    name: "Oscar Schwartz",
    role: "Co-Founder", 
    image: "/lovable-uploads/546792c4-f498-43a4-814a-7ceb9e62c057.png",
    education: "Junior, PPE & Hispanic Studies, Minor in American Public Policy",
    description: "Oscar has a passion for blending consulting with social impact to drive meaningful change. This past summer at Hudson Ferris, a nonprofit-focused consulting firm, he deepened his expertise in social impact consulting. As an incoming McKinsey Summer Business Analyst, he brings strategic consulting experience to ECP. As co-founder, he leverages this expertise in education research, financial literacy initiatives, and policy research. His Philadelphia background and advocacy work fuel his commitment to creating equitable educational opportunities through strategic, data-driven solutions.",
    category: "Co-Founder"
  },
  {
    name: "Samantha Mirabal",
    role: "Co-President",
    image: "/lovable-uploads/98a94893-200e-4aa0-843a-880b57ea2f99.png", 
    education: "Sophomore, Wharton School - Finance & Marketing",
    description: "Samantha Mirabal is a sophomore in The Wharton School concentrating in Finance and Marketing. Originally from Miami, Florida, she is passionate about financial literacy, education, and giving back to the community. She first joined ECP in her freshman spring semester as an analyst and now serves as President. Outside of ECP, Samantha is involved in Penn Women in Consulting, Wharton Women, Common Cents, Wharton Undergraduate Finance Club, Wharton Management Club, and the Successful Transition and Empowerment Program (STEP). In her free time, Samantha enjoys reading, playing piano, traveling, drinking coffee, and spending time with family and friends. Feel free to reach out to her at mirabal@wharton.upenn.edu",
    category: "Leadership"
  },
  {
    name: "Sarah Wang",
    role: "Co-President",
    image: "/lovable-uploads/a77b28b7-0d67-4f27-9dd8-9faa19bfef2e.png",
    education: "Sophomore, Economics & Real Estate",
    description: "Originally from Chicago, Sarah has experience in financial literacy mentorship, coordinating housing assistance for underprivileged families, and international volunteer service. She has a strong background in serving her local community and is excited to bring that passion to addressing educational disparities and promoting economic empowerment in the Philadelphia community. She is looking forward to contributing to ECP's data-driven consulting projects.",
    category: "Leadership"
  },
  {
    name: "Jeremiah Braimoh",
    role: "Vice President of Events",
    image: "/lovable-uploads/jeremiah-braimoh.jpeg",
    education: "Freshman, College of Arts & Sciences - Psychology",
    description: "Jeremiah Braimoh is a freshman in The College of Arts and Sciences planning to major in Psychology. He is from Columbia, Maryland and is passionate about educational policy reform and the global mental health crisis. He joined ECP in his freshman fall semester and now serves as Vice President of Events. Outside of ECP, Jeremiah is involved in Civic Scholars and the West Philadelphia Tutoring Project. In his free time, Jeremiah enjoys running, hanging out with friends, and playing/listening to music. Feel free to reach out to him at jbraimoh@sas.upenn.edu.",
    category: "Leadership"
  },
  {
    name: "Ronan Meltzer",
    role: "Vice President of Consulting",
    image: "/lovable-uploads/ronan-meltzer.png",
    education: "Freshman, College of Arts & Sciences - Mathematics & Economics",
    description: "Ronan Meltzer is a freshman in the College studying Math and Economics. He's from Johannesburg, South Africa and cares deeply about making education more accessible—especially through tech and tutoring. Ronan joined ECP in his freshman fall and now serves as Vice President of Consulting. Before Penn, he started a tutoring program that grew to 300+ volunteer tutors helping 3,000+ kids in hospitals across Africa, and built Dare2Solve, a math platform that hit 200K monthly users. When he's not thinking about education or math, you'll probably find him listening to afrobeats, having long conversations, or trying to solve a tricky problem. Reach him at ronanmel@sas.upenn.edu.",
    category: "Leadership"
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