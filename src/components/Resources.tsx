const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfikpDPL_z-lMeGv-SbcDwmRic5_1W4mmOvFq67bfLzP2nbJA/viewform?usp=header";

const resourceCategories = [
  { title: "Career Docs", items: ["Consulting resume templates", "Cover letter guides (McKinsey, BCG, Bain)", "Fit-interview question bank"] },
  { title: "BCG", items: ["Casey chatbot", "Consulting Career Assessment", "Quantitative reasoning test prep", "Pymetrics guidance"] },
  { title: "McKinsey", items: ["Solve games (Red Rock, Ecosystem, Sea Wolf)", "Digital assessment strategies", "Problem-solving frameworks"] },
  { title: "Bain", items: ["TestGorilla and SOVA test prep", "Assessment format guides"] },
  { title: "Extras", items: ["2,000+ quantitative practice questions", "Case interview books", "Business primers", "Consulting Starter Pack"] },
];

const Resources = () => {
  return (
    <section id="resources" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">04 — Resources</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
              CaseBasix
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[65ch] text-lg leading-relaxed text-oxford-blue/85">
              Every ECP member completes consulting training through our partnership with
              CaseBasix. The library is also open to the wider Penn community.
            </p>
          </div>
        </div>

        <div className="mt-20">
          {resourceCategories.map((category, index) => (
            <div
              key={category.title}
              className={`grid gap-6 border-t border-silver/60 py-10 md:grid-cols-12 ${
                index === resourceCategories.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="md:col-span-4">
                <p className="font-display text-xs tracking-[0.22em] text-wine">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-penn-blue md:text-3xl">
                  {category.title}
                </h3>
              </div>
              <ul className="md:col-span-8 md:columns-2 md:gap-10">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="mb-3 break-inside-avoid text-oxford-blue/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[45ch] text-lg leading-relaxed text-oxford-blue/85">
            Join ECP to get access.
          </p>
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

export default Resources;
