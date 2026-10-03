const stats = [
  { figure: "71%", label: "of Philadelphia fourth graders are not reading at grade level" },
  { figure: "52%", label: "of Philadelphia adults are functionally illiterate" },
];

const About = () => {
  return (
    <>
      <section id="about" className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">01 — About</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
                Who We Are
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
                Education Consulting at Penn is a student-run consultancy helping education and
                youth organizations prepare young people for an AI-driven world. We build AI
                curricula and growth strategy (free of charge) for partners that have served over
                250,000 young people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="rule pt-10 md:pt-12">
            <p className="eyebrow">The Challenge</p>
            <div className="mt-7 grid max-w-4xl grid-cols-2 gap-3 md:mt-8 md:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.figure}
                  className={`min-w-0 md:px-8 lg:px-10 ${
                    i > 0 ? "border-l border-silver/60 pl-3 sm:pl-5" : "md:pl-0"
                  }`}
                >
                  <div className="shrink-0 font-serif text-3xl leading-none text-wine sm:text-5xl md:text-6xl">
                    {stat.figure}
                  </div>
                  <p className="mt-3 text-[0.68rem] leading-snug text-oxford-blue/75 sm:text-sm md:max-w-[18rem] md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
