import { motion } from 'framer-motion'
import heroVideo from '../assets/hero video/WhatsApp Video 2026-06-10 at 10.47.25 AM.mp4'
import profileImage from '../assets/about/profile.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-hidden bg-deep text-paper">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster={profileImage}
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/78 to-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/45" />
        <div className="absolute inset-0 atm-noise opacity-[0.07]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-36">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display max-w-5xl text-[clamp(2.75rem,9vw,6.75rem)] font-extrabold leading-[0.92] tracking-tight"
        >
          Jagadeesh Sappa
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl font-display text-2xl font-semibold tracking-tight text-paper md:text-3xl"
        >
          ECE engineer &amp; quantum computing developer
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-xl text-base font-medium leading-relaxed text-paper/75 md:text-lg"
        >
          I build quantum state visualizers, power electronics, and precise full-stack systems.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#services" className="btn-primary" aria-label="View featured projects">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost text-paper" aria-label="Contact Jagadeesh Sappa">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download="Jagadeesh_Sappa_Resume.pdf"
            className="btn-ghost text-paper"
            aria-label="Download resume PDF"
          >
            Resume
          </a>
        </motion.div>

        <motion.a
          href="#about"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-14 hidden items-center gap-3 text-paper/55 transition-colors hover:text-paper md:inline-flex"
          aria-label="Scroll to about section"
        >
          <span className="font-mono-meta text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-px w-10 bg-paper/40" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
