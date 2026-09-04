const links = [
  { label: "Who We Are", id: "about" },
  { label: "What We Do", id: "initiatives" },
  { label: "Leadership", id: "team" },
  { label: "Resources", id: "resources" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-penn-blue py-16 text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/b94021bb-e352-4352-9c74-5cea26fd63c3.png"
                alt="Education Consulting at Penn logo"
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
              <span className="font-display text-sm uppercase tracking-[0.18em]">
                Education Consulting at Penn
              </span>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/70">
              Partnering with Philadelphia education initiatives to provide strategic,
              data-informed solutions that drive meaningful student outcomes.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-ivory/50">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-ivory/50">
              Contact
            </h2>
            <a
              href="mailto:educationconsultingatpenn@gmail.com"
              className="mt-5 block break-words text-ivory/80 transition-colors hover:text-ivory"
            >
              educationconsultingatpenn@gmail.com
            </a>
            <p className="mt-4 text-sm text-ivory/50">
              University of Pennsylvania
              <br />
              Philadelphia, PA
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-6">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Education Consulting at Penn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
