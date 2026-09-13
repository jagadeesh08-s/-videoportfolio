import profileImage from '../assets/about/profile.jpg'

const facts = [
  { label: 'Location', value: 'East Godavari, AP' },
  { label: 'Education', value: 'B.Tech ECE' },
  { label: 'Focus', value: 'Quantum & VLSI' },
  { label: 'Languages', value: 'Telugu, English, Hindi' },
]

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-paper text-ink">
      <div className="absolute inset-0 atm-mesh opacity-80" />
      <div className="absolute inset-0 atm-noise" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
        <div className="reveal md:col-span-5">
          <div className="relative overflow-hidden">
            <img
              src={profileImage}
              alt="Jagadeesh Sappa — Electronics and Communication Engineer and Quantum Developer"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>
        </div>

        <div className="reveal md:col-span-7 md:pt-4" style={{ transitionDelay: '120ms' }}>
          <p className="section-label mb-4">About</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Hardware roots.
            <span className="block text-signal">Software reach.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              I&apos;m an Electronics &amp; Communication Engineering student at BVC College of
              Engineering, Rajahmundry — focused on quantum computing, embedded systems, and
              full-stack development.
            </p>
            <p>
              I won <strong className="font-semibold text-ink">1st Place</strong> at the Amaravathi
              Quantum Valley Hackathon 2025 (AQVH) among 120+ teams, building{' '}
              <strong className="font-semibold text-ink">Bloch Verse</strong> with Qiskit and OpenQASM
              2.0. I also authored a distributed research preprint:{' '}
              <a
                href="https://papers.ssrn.com/abstract=7200684"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-signal underline decoration-signal/30 underline-offset-4 transition-colors hover:decoration-signal"
              >
                Quantum State Visualizer (SSRN 7200684)
              </a>
              .
            </p>
            <p>
              My work sits between ECE fundamentals — VLSI, FPGA, power electronics — and modern
              software with Python, JavaScript, Node.js, and React.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono-meta text-[11px] uppercase tracking-[0.16em] text-ink/45">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink md:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
