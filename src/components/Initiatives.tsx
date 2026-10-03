import tcbmeLogo from "@/assets/partners/tcbme.png";
import pynLogo from "@/assets/partners/pyn.png";
import brilliantLogo from "@/assets/partners/brilliant-cities.svg";

const initiatives = [
  {
    number: "01",
    title: "AI in Education",
    intro: "We help education organizations put AI to work for young people, and do it responsibly.",
    points: [
      "Design AI curricula that prepare youth for an AI-driven workplace",
      "Evaluate AI tutoring and assessment tools for real classroom fit",
      "Write guidance for educators on responsible AI use",
    ],
  },
  {
    number: "02",
    title: "Strategy for Educational Opportunity",
    intro: "We build strategies that help education organizations grow and reach more students.",
    points: [
      "Build partnership, funding and growth strategies for partner nonprofits",
      "Map access gaps across schools and after-school programs",
      "Turn research into recommendations partners can act on",
    ],
  },
];

const partners = [
  {
    name: "Brilliant Cities",
    position: "One of the country's most proven early-childhood models.",
    metrics: [
      { figure: "24,000", label: "people served across 24 Detroit hubs" },
      { figure: "3", label: "reading levels gained per child" },
      { figure: "31", label: "cities on its expansion waitlist" },
    ],
    work: "Built the case for embedding Brilliant in Philadelphia Housing Authority family housing.",
    logo: brilliantLogo,
  },
  {
    name: "Philadelphia Youth Network",
    position: "Philadelphia's lead youth workforce organization, and a national model.",
    metrics: [
      { figure: "250,000+", label: "young people put to work" },
      { figure: "$51M+", label: "paid to youth in wages" },
      { figure: "140+", label: "organizations coordinated" },
    ],
    work: "Built AI curricula preparing PYN's youth for an AI-driven workplace.",
    logo: pynLogo,
  },
  {
    name: "TCBMe",
    position: "A pioneer at the intersection of AI skills and youth well-being.",
    metrics: [
      { figure: "85%", label: "of participants showed significant gains in La Salle University research" },
      { figure: "$50K", label: "Well City Challenge grand prize" },
      { figure: "Top 1%", label: "of US nonprofits for transparency (five-time Candid Platinum Seal)" },
    ],
    work: "Designed a gamified AI curriculum for TCBMe's workforce program.",
    logo: tcbmeLogo,
  },
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 lg:px-10 md:pt-32">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">02 — What We Do</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
              What We Do
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
              Our work runs through two practices. Each pairs a student team with a partner and
              a defined deliverable.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 pb-20 lg:px-10 md:pb-28">
        {initiatives.map((item, index) => (
          <div
            key={item.number}
            className={`py-12 md:py-14 ${index > 0 ? "rule" : "mt-10 md:mt-12"}`}
          >
            <div className="max-w-3xl">
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

      {/* Featured Partnerships */}
      <div className="overflow-hidden bg-oxford-blue py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-ivory/50">
                Featured Partnerships
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ivory md:text-4xl">
                Who We Work With
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[60ch] text-lg leading-relaxed text-ivory/80">
                We partner with organizations at the top of their fields.
              </p>
            </div>
          </div>
        </div>

        <div className="partner-marquee mt-12" aria-label="Featured partner organizations">
          <div className="partner-marquee-track">
            {[...partners, ...partners].map((partner, index) => (
              <article
                key={`${partner.name}-${index}`}
                className="flex w-[min(84vw,27rem)] shrink-0 flex-col bg-ivory p-6 md:w-[27rem] md:p-8"
                aria-hidden={index >= partners.length}
              >
                <div className="flex h-24 items-center justify-start border-b border-silver/60 pb-6">
                  <img
                    src={partner.logo}
                    alt={index < partners.length ? `${partner.name} logo` : ""}
                    loading="lazy"
                    className="max-h-full w-auto max-w-[75%] object-contain object-left"
                  />
                </div>
                <h4 className="mt-6 font-serif text-2xl text-penn-blue">{partner.name}</h4>
                <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-oxford-blue/75">
                  {partner.position}
                </p>
                <ul className="mt-5 space-y-3 border-t border-silver/60 pt-5">
                  {partner.metrics.map((metric) => {
                    return (
                      <li key={metric.label} className="flex items-baseline gap-2 text-oxford-blue">
                        <strong className="shrink-0 font-serif text-xl font-normal text-wine">
                          {metric.figure}
                        </strong>
                        <span className="text-sm leading-snug">{metric.label}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-auto border-t border-silver/60 pt-5 text-sm leading-relaxed text-oxford-blue/85">
                  <span className="font-display text-xs uppercase tracking-[0.14em] text-wine">
                    ECP's work
                  </span>
                  <span className="mt-2 block">{partner.work}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;