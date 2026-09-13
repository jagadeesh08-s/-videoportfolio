const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-deep text-paper/70">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-3">
          <div className="space-y-1 text-sm">
            <p>ECE &amp; Quantum Computing</p>
            <p>Full-Stack Development</p>
            <p>Embedded Systems &amp; VLSI</p>
          </div>
          <div className="space-y-1 text-sm md:text-center">
            <p>B.Tech — BVC College, Rajahmundry</p>
            <a href="#services" className="inline-block underline underline-offset-4 transition-colors hover:text-paper">
              View Projects
            </a>
          </div>
          <div className="space-y-1 text-sm md:text-right">
            <p>East Godavari, Andhra Pradesh</p>
            <p>{year}</p>
          </div>
        </div>

        <div className="overflow-hidden py-14 md:py-16">
          <p className="font-display text-center text-[16vw] font-extrabold leading-none tracking-tighter text-paper/90 lowercase select-none md:text-[14vw]">
            jagadeesh
          </p>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-10 text-sm md:grid-cols-3 md:items-end">
          <div>
            <a href="#contact" className="font-semibold text-paper underline underline-offset-4">
              Contact
            </a>
            <p className="mt-3 font-mono-meta text-[10px] tracking-wider text-paper/40">
              © {year} Jagadeesh Sappa
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            <a
              href="mailto:sappsjagadeesh@gmail.com"
              className="underline underline-offset-4 transition-colors hover:text-paper"
            >
              sappsjagadeesh@gmail.com
            </a>
            <div className="flex gap-5">
              <a
                href="https://github.com/jagadeesh08-s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="underline underline-offset-4 transition-colors hover:text-paper"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jagadeesh-sappa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="underline underline-offset-4 transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <a href="tel:+919912493997" className="font-mono-meta text-xs text-paper/45 transition-colors hover:text-paper">
              +91-9912493997
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
