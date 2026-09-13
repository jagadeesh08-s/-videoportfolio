const skillCategories = [
  {
    title: 'Quantum Computing',
    skills: [
      'Qiskit',
      'OpenQASM 2.0',
      'IBM Quantum',
      'Circuit Simulation',
      'Statevector Computation',
      'Bloch Sphere Visualization',
      'Hybrid Quantum-Classical',
      'Multi-Qubit Analysis',
      'Gate-Level Design',
    ],
  },
  {
    title: 'ECE / VLSI',
    skills: [
      'FPGA Architecture',
      'VLSI Design',
      'MOSFET / FinFET',
      'Digital Logic',
      'Embedded Architectures',
      'Power Electronics',
      'Signal Processing',
      'Analog Circuits',
      'Assembly (8086)',
    ],
  },
  {
    title: 'Software',
    skills: [
      'Python (NumPy, Matplotlib)',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'HTML5 / CSS3',
      'React',
      'Basic C',
      'Git / GitHub',
    ],
  },
]

const achievements = [
  {
    title: '1st Place — AQVH 2025',
    subtitle: 'National · 120+ teams',
    description:
      'Amaravathi Quantum Valley Hackathon — built Bloch Verse under competitive constraints.',
  },
  {
    title: '1st Prize — Web Saga',
    subtitle: 'GMR Institute of Technology',
    description: 'Full-stack web application development hackathon.',
  },
  {
    title: 'SSRN Research Preprint',
    subtitle: 'Abstract 7200684',
    description:
      'Interactive multi-qubit analysis using partial trace and Bloch sphere representation.',
    link: 'https://papers.ssrn.com/abstract=7200684',
    linkText: 'Read on SSRN',
  },
]

const education = [
  {
    degree: 'B.Tech — ECE',
    period: '2024 – 2027',
    school: 'BVC College of Engineering, Rajahmundry',
    detail: 'VLSI · Quantum Systems · Embedded Architectures',
  },
  {
    degree: 'Diploma — ECE',
    period: '2021 – 2023 · 88%',
    school: 'Sir C.R. Reddy Polytechnic College, Eluru',
    detail: 'Circuit Theory · Analog & Digital Systems',
  },
]

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-deep text-paper">
      <div className="absolute inset-0 atm-grid opacity-30" />
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-signal/10 blur-3xl animate-drift" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-teal-900/25 blur-3xl animate-drift" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="section-label mb-4 text-paper/55">Skills &amp; recognition</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Technical range across quantum, silicon, and software.
          </h2>
          <p className="mt-4 text-base text-paper/60 md:text-lg">
            One stack of tools spanning circuit design, quantum simulation, and product engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <h3 className="font-display text-xl font-bold text-signal">{category.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-white/10 py-2 text-sm font-medium text-paper/75"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-20">
          <h3 className="font-display text-2xl font-bold md:text-3xl">Achievements</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {achievements.map((item) => (
              <article key={item.title} className="border-t border-signal/50 pt-5">
                <h4 className="font-display text-lg font-bold">{item.title}</h4>
                <p className="mt-1 font-mono-meta text-[11px] uppercase tracking-[0.14em] text-paper/45">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal transition-opacity hover:opacity-80"
                  >
                    {item.linkText}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-20">
          <h3 className="font-display text-2xl font-bold md:text-3xl">Education</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.degree} className="border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-lg font-bold">{item.degree}</h4>
                  <span className="font-mono-meta shrink-0 text-[11px] text-paper/45">{item.period}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-signal">{item.school}</p>
                <p className="mt-2 text-sm text-paper/55">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
