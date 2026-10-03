const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfikpDPL_z-lMeGv-SbcDwmRic5_1W4mmOvFq67bfLzP2nbJA/viewform?usp=header";

const audiences = [
  { title: "Organizations", copy: "Looking for strategy or AI curriculum support? Tell us about your next challenge." },
  { title: "Penn Students", copy: "Want to consult for organizations that reach thousands of young people? Apply to join." },
  { title: "Supporters", copy: "Share our commitment to educational opportunity? Get involved." },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-oxford-blue py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-ivory/50">
              05 — Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Get in Touch
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[60ch] text-lg leading-relaxed text-ivory/80">
              Tell us what you're working on. We'd like to hear from you.
            </p>
            <a
              href="mailto:educationconsultingatpenn@gmail.com"
              className="mt-6 block break-words text-lg font-bold text-ivory underline decoration-wine decoration-2 underline-offset-4 transition-colors hover:text-silver"
            >
              educationconsultingatpenn@gmail.com
            </a>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full bg-ivory px-8 py-3 font-display text-xs uppercase tracking-[0.18em] text-penn-blue transition-colors hover:bg-silver"
              >
                Apply Now
              </a>
              <a
                href="mailto:educationconsultingatpenn@gmail.com"
                className="w-fit rounded-full border border-ivory/50 px-8 py-3 font-display text-xs uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory/10"
              >
                Send Us an Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px border-t border-ivory/15 md:grid-cols-3">
          {audiences.map((item, i) => (
            <div
              key={item.title}
              className={`py-8 md:px-10 ${i > 0 ? "md:border-l md:border-ivory/15" : "md:pl-0"}`}
            >
              <h3 className="font-serif text-lg text-ivory">{item.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">{item.copy}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
