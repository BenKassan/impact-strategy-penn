import heroImage from "@/assets/hero-philadelphia.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="The Philadelphia skyline at golden hour"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-oxford-blue/70" />

      <div className="relative mx-auto max-w-4xl px-6 pb-12 pt-28 text-center">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-ivory/70">
          University of Pennsylvania
        </p>
        <h1 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight text-ivory md:text-6xl lg:text-7xl">
          Education Consulting
          <br />
          at Penn
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
          Strategy and AI-driven solutions that reach thousands of young people
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection("team")}
            className="rounded-full bg-ivory px-8 py-3 font-display text-xs uppercase tracking-[0.18em] text-penn-blue transition-colors hover:bg-silver"
          >
            Meet the Team
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="rounded-full border border-ivory/60 px-8 py-3 font-display text-xs uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory/10"
          >
            Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
