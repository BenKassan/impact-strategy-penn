import equityImage from "@/assets/initiative-equity.jpg";
import aiImage from "@/assets/initiative-ai.jpg";
import mentorshipImage from "@/assets/initiative-mentorship.jpg";

const initiatives = [
  {
    number: "01",
    title: "Educational Equal Opportunity",
    image: equityImage,
    alt: "Elementary school students working at their desks in a bright classroom",
    intro:
      "We work to identify and remove the barriers that keep students from an equal shot at a quality education.",
    points: [
      "Map access gaps across Philadelphia schools and after-school programs",
      "Build funding and resource strategies for partner nonprofits",
      "Translate policy research into practical recommendations",
    ],
  },
  {
    number: "02",
    title: "AI's Impact on Education",
    image: aiImage,
    alt: "A high school student studying on a laptop in a modern study space",
    intro:
      "We study how artificial intelligence is reshaping classrooms, and help partners adopt it responsibly.",
    points: [
      "Evaluate AI tutoring and assessment tools for real classroom fit",
      "Design guidance for educators on responsible AI use",
      "Research personalization and its effect on student outcomes",
    ],
  },
  {
    number: "03",
    title: "Mentorship",
    image: mentorshipImage,
    alt: "A college-age mentor helping a younger student with schoolwork",
    intro:
      "We connect students with mentors who provide guidance, structure, and a path forward.",
    points: [
      "Build and refine mentorship program models for partners",
      "Support tutoring and college readiness pipelines",
      "Measure engagement and long-term student impact",
    ],
  },
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 lg:px-10 md:pt-32">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">02 — Initiatives</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
              What We Do
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
              Our work is organized around three focus areas. Each one pairs a student
              consulting team with a partner organization and a defined deliverable.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {initiatives.map((item, index) => (
          <div
            key={item.number}
            className={`grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 ${
              index > 0 ? "rule" : "mt-16"
            }`}
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <p className="font-display text-xs uppercase tracking-[0.22em] text-wine">
                {item.number}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-penn-blue md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-oxford-blue/85">
                {item.intro}
              </p>
              <ul className="mt-8 space-y-4">
                {item.points.map((point, i) => (
                  <li
                    key={point}
                    className="flex gap-5 border-t border-silver/60 pt-4 text-oxford-blue/80"
                  >
                    <span className="font-display text-xs tracking-widest text-silver">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Featured partnership */}
      <div className="bg-oxford-blue py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-ivory/50">
                Featured Partnership
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ivory md:text-4xl">
                Philly Book Bank
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[60ch] text-lg leading-relaxed text-ivory/80">
                We partner with the Philly Book Bank, a Philadelphia nonprofit dedicated to
                fostering literacy by providing free, high-quality, culturally relevant books
                to children from birth through high school. Based at Martin Luther King High
                School, it distributes books through community events, sidewalk libraries, and
                strategic partnerships across the city.
              </p>
              <div className="mt-12 grid gap-px border-t border-ivory/15 sm:grid-cols-2">
                <div className="border-b border-ivory/15 py-6 sm:border-r sm:pr-8">
                  <div className="font-serif text-4xl text-ivory">250,000+</div>
                  <p className="mt-2 text-sm text-ivory/60">
                    books distributed over the past five years
                  </p>
                </div>
                <div className="border-b border-ivory/15 py-6 sm:pl-8">
                  <div className="font-serif text-4xl text-ivory">"Raising a city of readers"</div>
                  <p className="mt-2 text-sm text-ivory/60">
                    community events, pop-up libraries, and local partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
