import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'Bloch Verse',
    text: 'Quantum state visualizer built with Qiskit — circuits up to 9,000+ gates, real-time statevector extraction, and interactive Bloch sphere visualization. Validated on IBM Quantum Composer.',
    tech: ['Qiskit', 'OpenQASM 2.0', 'IBM Quantum', 'Python'],
  },
  {
    number: '02',
    title: 'E-RISHWA',
    text: 'Solar-powered electric auto rickshaw with MPPT charging, DC-DC converter design, and energy management. Improved vehicle range by about 30% through optimized power electronics.',
    tech: ['Power Electronics', 'Embedded Systems', 'MPPT', 'Energy Mgmt'],
  },
  {
    number: '03',
    title: 'SSRN Research Preprint',
    text: 'Quantum State Visualizer: An Interactive Tool for Multi-Qubit System Analysis Using Partial Trace and Bloch Sphere Representation. Distributed SSRN preprint (Abstract ID: 7200684).',
    tech: ['Partial Trace', 'Bloch Sphere', 'Multi-Qubit'],
    link: 'https://papers.ssrn.com/abstract=7200684',
    linkText: 'View SSRN paper',
  },
  {
    number: '04',
    title: 'Circuit Design',
    text: 'Academic portfolio of analog and digital circuit designs — regulated DC supplies, op-amp signal conditioning, digital counters, and RC filter frequency analysis.',
    tech: ['Analog / Digital', 'Signal Processing', 'Op-Amp', 'Filters'],
  },
]

const Services = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 75%'],
  })
  const pathLength = useSpring(scrollYProgress, { stiffness: 70, damping: 22 })

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative overflow-hidden bg-mist text-ink"
    >
      <div className="absolute inset-0 atm-grid opacity-50" />
      <div className="absolute inset-0 atm-noise" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="reveal max-w-3xl">
          <p className="section-label mb-4">Featured projects</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            From quantum circuits to full-stack applications.
          </h2>
          <p className="mt-5 max-w-xl text-base text-ink-soft md:text-lg">
            Selected work at the intersection of quantum computing, embedded systems, and modern
            web technologies.
          </p>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-[1.15rem] top-3 hidden w-px bg-line md:block" aria-hidden="true">
            <motion.div
              className="origin-top bg-signal"
              style={{ scaleY: pathLength, height: '100%', width: '100%' }}
            />
          </div>

          <ol className="space-y-0">
            {projects.map((project, index) => (
              <li
                key={project.title}
                className="reveal group relative grid gap-4 border-t border-line py-10 md:grid-cols-[5.5rem_1fr] md:gap-10 md:py-12"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="mt-1 hidden h-2.5 w-2.5 shrink-0 rounded-sm bg-signal md:absolute md:left-[0.85rem] md:mt-2 md:block" />
                  <span className="font-mono-meta text-sm text-ink/40">{project.number}</span>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight transition-colors group-hover:text-signal md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                      {project.text}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal underline decoration-signal/30 underline-offset-4 transition-colors hover:decoration-signal"
                      >
                        {project.linkText}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>

                  <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:justify-end">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-ink/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Services
