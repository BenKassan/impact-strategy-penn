const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfikpDPL_z-lMeGv-SbcDwmRic5_1W4mmOvFq67bfLzP2nbJA/viewform?usp=header";

const teamMembers = [
  {
    name: "Samantha Mirabal",
    role: "Co-President",
    image: "/lovable-uploads/98a94893-200e-4aa0-843a-880b57ea2f99.png",
    education: "Junior, Wharton School — Finance & Marketing",
    description:
      "Samantha is from Miami and cares most about financial literacy and education access. She joined ECP as an analyst in her freshman spring and now co-leads it. She is also active in Penn Women in Consulting, Wharton Women and Common Cents. mirabal@wharton.upenn.edu",
  },
  {
    name: "Ronan Meltzer",
    role: "Co-President",
    image: "/lovable-uploads/ronan-meltzer.png",
    education: "Sophomore, College of Arts & Sciences — Mathematics & Economics",
    description:
      "Ronan is from Johannesburg and works on making education accessible through technology and tutoring. Before Penn, he founded a tutoring program that grew to 300+ volunteers teaching 3,000+ hospitalized children across Africa, and built Dare2Solve, a math platform with 200K monthly users. He joined ECP in his freshman fall. ronanmel@sas.upenn.edu",
  },
  {
    name: "Jeremiah Braimoh",
    role: "Vice President of Events",
    image: "/lovable-uploads/jeremiah-braimoh.jpeg",
    education: "Sophomore, College of Arts & Sciences — Psychology",
    description:
      "Jeremiah is from Columbia, Maryland, and focuses on education policy reform and youth mental health. He joined ECP in his freshman fall. He also tutors with the West Philadelphia Tutoring Project and is a Civic Scholar. jbraimoh@sas.upenn.edu",
  },
  {
    name: "Imanali Koksal",
    role: "Vice President of Finance",
    image: "/lovable-uploads/imanali-koksal.jpg",
    education: "Sophomore, Wharton School — Finance & Minor in Computer Science",
    description:
      "Imanali is from Almaty, Kazakhstan, and spends his spare time testing new AI tools and how they change business and investing. He joined ECP in his freshman fall. He is also part of PennQVC and Penn Boxing. imash771@wharton.upenn.edu",
  },
];

const founders = [
  {
    name: "Ben Kassan",
    role: "Co-Founder",
    image: "/lovable-uploads/bd7d6a64-9f0b-4675-85ca-efc1d66d04d9.png",
    education: "Senior, Economics & Business Statistics",
  },
  {
    name: "Oscar Schwartz",
    role: "Co-Founder",
    image: "/lovable-uploads/546792c4-f498-43a4-814a-7ceb9e62c057.png",
    education: "Senior, PPE & Hispanic Studies, minor in American Public Policy",
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
              ECP is led by Penn students in economics, finance, psychology and mathematics,
              united by a commitment to Philadelphia's students.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
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
            Ben Kassan and Oscar Schwartz founded ECP. They no longer run day-to-day operations,
            but the organization is built on their groundwork.
          </p>

          <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {founders.map((member) => (
              <article key={member.name} className="group flex items-start gap-6">
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
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start gap-6 border-t border-silver/60 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-3xl text-penn-blue">Join Our Team</h3>
            <p className="mt-3 max-w-[50ch] leading-relaxed text-oxford-blue/80">
              We recruit Penn students who want to do real consulting work for organizations
              shaping Philadelphia's education. No consulting experience needed; we train you.
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