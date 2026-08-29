const stats = [
  {
    figure: "71%",
    label: "of Philadelphia's 4th graders are not reading at grade level",
  },
  {
    figure: "52%",
    label: "of adults in Philadelphia are functionally illiterate",
  },
  {
    figure: "4",
    label: "affordable after-school programs offer high-impact tutoring citywide",
  },
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
                Education Consulting at Penn is a student-run consultancy that partners with
                Philadelphia education initiatives to enhance their effectiveness. We bring
                rigorous research, financial analysis, and strategic planning to nonprofits,
                schools, and after-school programs that are working to close the city's
                opportunity gap.
              </p>
              <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
                Our members are trained consultants first and advocates always. Every project
                pairs a small team of Penn undergraduates with a partner organization to
                deliver work that is practical, evidence-based, and built to outlast the
                semester — from tutoring and mentorship models to college readiness pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="rule pt-16">
            <p className="eyebrow">The Challenge</p>
            <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.figure}
                  className={`md:px-10 ${i > 0 ? "md:border-l md:border-silver/60" : "md:pl-0"}`}
                >
                  <div className="font-serif text-6xl leading-none text-wine md:text-7xl">
                    {stat.figure}
                  </div>
                  <p className="mt-5 max-w-xs text-base leading-relaxed text-oxford-blue/75">
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
