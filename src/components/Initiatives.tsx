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

const Initiatives = () => {
  return (
    <section id="initiatives" className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="eyebrow">03 — What We Do</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-penn-blue md:text-5xl">
          What We Do
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-14">
          {initiatives.map((item) => (
            <div key={item.number} className="border-t border-silver/60 pt-8">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-wine">
                {item.number}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-penn-blue">
                {item.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-oxford-blue/85">{item.intro}</p>
              <ul className="mt-6 space-y-4">
                {item.points.map((point, i) => (
                  <li key={point} className="flex gap-5 border-t border-silver/60 pt-4 text-oxford-blue/80">
                    <span className="font-display text-xs tracking-widest text-silver">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
