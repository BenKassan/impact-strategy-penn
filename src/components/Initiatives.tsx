import equityImage from "@/assets/initiative-equity.jpg";
import aiImage from "@/assets/initiative-ai.jpg";
import tcbmeLogo from "@/assets/partners/tcbme.png";
import pynLogo from "@/assets/partners/pyn.png";
import brilliantLogo from "@/assets/partners/brilliant-cities.svg";

const initiatives = [
  {
    number: "01",
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
    number: "02",
    title: "Strategy on Educational Equal Opportunity",
    image: equityImage,
    alt: "Elementary school students working at their desks in a bright classroom",
    intro:
      "We build practical strategies that help education organizations expand opportunity across Philadelphia.",
    points: [
      "Map access gaps across schools and after-school programs",
      "Build funding, growth, and resource strategies for partner nonprofits",
      "Translate research into practical recommendations",
    ],
  },
];

const partners = [
  {
    name: "Brilliant Cities",
    position: "One of the country's most proven early-childhood models.",
    metrics: ["24,000 people served across 24 hubs"],
    work: "Built the strategy for its expansion into Philadelphia and a blueprint for 31 cities.",
    logo: brilliantLogo,
  },
  {
    name: "Philadelphia Youth Network",
    position: "Philadelphia's lead youth workforce organisation, and a national model.",
    metrics: [
      "250,000+ young people put to work",
      "$51M+ paid to youth in wages",
      "140+ organisations coordinated",
    ],
    work: "Built AI curricula preparing PYN's youth for an AI-driven workplace.",
    logo: pynLogo,
  },
  {
    name: "TCBMe",
    position: "A pioneer at the intersection of AI skills and youth well-being.",
    metrics: [
      "Top 1% of US nonprofits — five-time Candid Transparency Seal",
      "Backed by IRB-funded research",
    ],
    work: "Designed a gamified AI curriculum for TCBMe's workforce programme.",
    logo: tcbmeLogo,
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
              Our work is organized around two focus areas. Each one pairs a student
              consulting team with a partner organization and a defined deliverable.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 pb-20 lg:px-10 md:pb-28">
        {initiatives.map((item, index) => (
          <div
            key={item.number}
            className={`grid items-center gap-7 py-12 sm:grid-cols-12 md:gap-10 md:py-14 ${
              index > 0 ? "rule" : "mt-10 md:mt-12"
            }`}
          >
            <div className={`sm:col-span-5 ${index % 2 === 1 ? "sm:order-2" : ""}`}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover sm:max-h-[300px]"
              />
            </div>
            <div className={`sm:col-span-7 ${index % 2 === 1 ? "sm:order-1" : ""}`}>
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
                The figures lead each story, while every engagement pairs research with a
                practical strategy built for the organisation's next stage.
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
                    const [figure, ...rest] = metric.split(" ");
                    return (
                      <li key={metric} className="flex items-baseline gap-2 text-oxford-blue">
                        <strong className="shrink-0 font-serif text-xl font-normal text-wine">
                          {figure}
                        </strong>
                        <span className="text-sm leading-snug">{rest.join(" ")}</span>
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