import tcbmeLogo from "@/assets/partners/tcbme.png";
import pynLogo from "@/assets/partners/pyn.png";
import brilliantLogo from "@/assets/partners/brilliant-cities.svg";

const partners = [
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
    name: "Brilliant Cities",
    position: "One of the country's most proven early-childhood models.",
    metrics: [
      { figure: "24,000", label: "people served across 24 Detroit hubs" },
      { figure: "3", label: "reading levels gained per child" },
      { figure: "31", label: "cities on its expansion waitlist" },
    ],
    work: "Built strategy for expanding Brilliant Cities into Philadelphia",
    logo: brilliantLogo,
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

const Partners = () => {
  return (
    <section id="partners" className="bg-oxford-blue py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-ivory/50">
          02 — Featured Partnerships
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
          Who We Work With
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-[2%]">
          {partners.map((partner) => (
            <article key={partner.name} className="flex min-w-0 flex-col bg-ivory p-6 lg:p-8">
              <div className="flex h-20 items-center border-b border-silver/60 pb-5">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className="max-h-full w-auto max-w-[75%] object-contain object-left"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-penn-blue">{partner.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-oxford-blue/75">{partner.position}</p>
              <ul className="mt-5 space-y-4 border-t border-silver/60 pt-5">
                {partner.metrics.map((metric) => (
                  <li key={metric.label} className="text-oxford-blue">
                    <strong className="block font-serif text-4xl font-normal leading-none text-wine lg:text-5xl">
                      {metric.figure}
                    </strong>
                    <span className="mt-1 block text-sm leading-snug">{metric.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-silver/60 pt-5 text-sm leading-relaxed text-oxford-blue/85">
                <span className="font-display text-xs uppercase tracking-[0.14em] text-wine">
                  ECP's work
                </span>
                <span className="mt-2 block">{partner.work}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
