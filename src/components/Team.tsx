const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfikpDPL_z-lMeGv-SbcDwmRic5_1W4mmOvFq67bfLzP2nbJA/viewform?usp=header";

const teamMembers = [
  {
    name: "Samantha Mirabal",
    role: "Co-President",
    image: "/lovable-uploads/98a94893-200e-4aa0-843a-880b57ea2f99.png",
    education: "Junior, Wharton School — Finance & Marketing",
    description:
      "Samantha Mirabal is a junior in The Wharton School concentrating in Finance and Marketing. Originally from Miami, Florida, she is passionate about financial literacy, education, and giving back to the community. She first joined ECP in her freshman spring semester as an analyst and now serves as Co-President. Outside of ECP, Samantha is involved in Penn Women in Consulting, Wharton Women, Common Cents, Wharton Undergraduate Finance Club, Wharton Management Club, and the Successful Transition and Empowerment Program (STEP). In her free time, Samantha enjoys reading, playing piano, traveling, drinking coffee, and spending time with family and friends. Feel free to reach out to her at mirabal@wharton.upenn.edu",
  },
  {
    name: "Ronan Meltzer",
    role: "Co-President",
    image: "/lovable-uploads/ronan-meltzer.png",
    education: "Junior, College of Arts & Sciences — Mathematics & Economics",
    description:
      "Ronan Meltzer is a junior in the College studying Math and Economics. He's from Johannesburg, South Africa and cares deeply about making education more accessible—especially through tech and tutoring. Ronan joined ECP in his freshman fall and now serves as Co-President. Before Penn, he started a tutoring program that grew to 300+ volunteer tutors helping 3,000+ kids in hospitals across Africa, and built Dare2Solve, a math platform that hit 200K monthly users. When he's not thinking about education or math, you'll probably find him listening to afrobeats, having long conversations, or trying to solve a tricky problem. Reach him at ronanmel@sas.upenn.edu.",
  },
  {
    name: "Jeremiah Braimoh",
    role: "Vice President of Events",
    image: "/lovable-uploads/jeremiah-braimoh.jpeg",
    education: "Sophomore, College of Arts & Sciences — Psychology",
    description:
      "Jeremiah Braimoh is a sophomore in The College of Arts and Sciences planning to major in Psychology. He is from Columbia, Maryland and is passionate about educational policy reform and the global mental health crisis. He joined ECP in his freshman fall semester and now serves as Vice President of Events. Outside of ECP, Jeremiah is involved in Civic Scholars and the West Philadelphia Tutoring Project. In his free time, Jeremiah enjoys running, hanging out with friends, and playing/listening to music. Feel free to reach out to him at jbraimoh@sas.upenn.edu.",
  },
  {
    name: "Imanali Koksal",
    role: "Vice President of Finance",
    image: "/lovable-uploads/imanali-koksal.jpg",
    education: "Sophomore, Wharton School — Finance & Minor in Computer Science",
    description:
      "Imanali Koksal is from Almaty, Kazakhstan, and is studying Finance at the Wharton School with a minor in Computer Science. He joined ECP during his freshman fall and now serves as Vice President of Finance. Outside of academics, Imanali is involved in Penn Boxing and PennQVC. In his free time, he enjoys researching and testing new AI tools and exploring how emerging technologies can shape business and investing. Feel free to reach out to him at imash771@wharton.upenn.edu",
  },
];

const founders = [
  {
    name: "Ben Kassan",
    role: "Co-Founder",
    image: "/lovable-uploads/bd7d6a64-9f0b-4675-85ca-efc1d66d04d9.png",
    education: "Senior, Economics & Business Statistics",
    description:
      "Ben's passion for education began with high school tutoring and led him to found a tutoring company (Quaker Tutors), where he identified inefficiencies in the education system. This experience inspired him to start ECP, focusing on strategic, data-driven solutions to address educational challenges.",
  },
  {
    name: "Oscar Schwartz",
    role: "Co-Founder",
    image: "/lovable-uploads/546792c4-f498-43a4-814a-7ceb9e62c057.png",
    education: "Senior, PPE & Hispanic Studies, Minor in American Public Policy",
    description:
      "Oscar has a passion for blending consulting with social impact to drive meaningful change. This past summer at Hudson Ferris, a nonprofit-focused consulting firm, he deepened his expertise in social impact consulting. As an incoming McKinsey Summer Business Analyst, he brings strategic consulting experience to ECP. As co-founder, he leverages this expertise in education research, financial literacy initiatives, and policy research. His Philadelphia background and advocacy work fuel his commitment to creating equitable educational opportunities through strategic, data-driven solutions.",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">03 — Leadership</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
              Our Team
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
              ECP is led by University of Pennsylvania students who bring together backgrounds
              in economics, finance, policy, psychology, and mathematics — and a shared
              commitment to educational impact in Philadelphia.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="group">
              <div className="overflow-hidden bg-ivory">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-penn-blue">{member.name}</h3>
              <p className="mt-1 font-display text-[0.7rem] uppercase tracking-[0.18em] text-wine">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{member.education}</p>
              <p className="mt-4 border-t border-silver/60 pt-4 text-sm leading-relaxed text-oxford-blue/80">
                {member.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-silver/60 pt-16">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-wine">
            Founders
          </p>
          <p className="mt-4 max-w-[60ch] leading-relaxed text-oxford-blue/80">
            Ben and Oscar founded Education Consulting at Penn. They are no longer involved in
            day-to-day operations, but ECP exists because of the groundwork they laid.
          </p>

          <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {founders.map((member) => (
              <article key={member.name} className="group flex gap-6">
                <div className="w-28 shrink-0 overflow-hidden bg-ivory sm:w-32">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-penn-blue">{member.name}</h3>
                  <p className="mt-1 font-display text-[0.7rem] uppercase tracking-[0.18em] text-wine">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.education}</p>
                  <p className="mt-4 border-t border-silver/60 pt-4 text-sm leading-relaxed text-oxford-blue/80">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start gap-6 border-t border-silver/60 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-3xl text-penn-blue">Join our team</h3>
            <p className="mt-3 max-w-[50ch] leading-relaxed text-oxford-blue/80">
              We are looking for Penn students who want to make an impact on Philadelphia
              education through data-driven consulting.
            </p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-penn-blue px-8 py-3 font-display text-xs uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-wine"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;