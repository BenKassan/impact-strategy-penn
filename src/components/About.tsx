const stats = [
  { figure: "71%", label: "of Philadelphia fourth graders are not reading at grade level" },
  { figure: "52%", label: "of Philadelphia adults are functionally illiterate" },
];

const About = () => {
  return (
    <section id="about" className="bg-ivory py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="eyebrow">01 — About</p>
        <div className="mt-4 grid gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
              Who We Are
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
              Education Consulting at Penn is a student-run consultancy helping education and
              youth organizations prepare young people for an AI-driven world. We build AI
              curricula and growth strategy (free of charge) for partners that have served over
              250,000 young people.
            </p>
          </div>
          <div className="space-y-6 md:border-l md:border-silver/60 md:pl-10">
            {stats.map((stat, i) => (
              <div key={stat.figure} className={i > 0 ? "border-t border-silver/60 pt-6" : ""}>
                <div className="font-serif text-5xl leading-none text-wine md:text-6xl">
                  {stat.figure}
                </div>
                <p className="mt-2 text-sm leading-snug text-oxford-blue/75 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
