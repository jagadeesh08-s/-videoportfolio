import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '18%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (result.success) {
        setSubmitStatus('success')
        e.target.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const fieldClass =
    'w-full border-0 border-b border-ink/25 bg-transparent pb-3 text-base text-ink placeholder:text-ink/40 focus:border-signal focus:outline-none'

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden border-t border-line bg-paper text-ink"
    >
      <motion.div
        style={{ y }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 select-none text-center font-display text-[18vw] font-extrabold leading-none tracking-tighter text-ink/[0.04]"
      >
        CONTACT
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
        <div className="reveal md:col-span-5">
          <p className="section-label mb-4">Get in touch</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Let&apos;s build something precise.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Open to quantum computing, embedded systems, and full-stack collaborations. Prefer email?
            Write directly to{' '}
            <a
              href="mailto:sappsjagadeesh@gmail.com"
              className="font-semibold text-signal underline decoration-signal/30 underline-offset-4 hover:decoration-signal"
            >
              sappsjagadeesh@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="reveal md:col-span-7" style={{ transitionDelay: '100ms' }}>
          {submitStatus === 'success' && (
            <div
              role="status"
              className="mb-6 border border-emerald-700/30 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900"
            >
              Message sent successfully. I&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div
              role="alert"
              className="mb-6 border border-signal/30 bg-signal/5 px-4 py-3 text-sm font-medium text-signal-deep"
            >
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8" noValidate={false}>
            <input type="hidden" name="access_key" value="02fcb325-40c2-4448-856b-1f2950033c88" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="subject" value="New message from your Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="contactName" className="section-label mb-3 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contactName"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="section-label mb-3 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contactEmail"
                  autoComplete="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contactPhone" className="section-label mb-3 block">
                Phone <span className="normal-case tracking-normal text-ink/40">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="contactPhone"
                autoComplete="tel"
                placeholder="+91 ..."
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="contactMessage" className="section-label mb-3 block">
                Message
              </label>
              <textarea
                name="message"
                id="contactMessage"
                required
                rows={4}
                placeholder="What should we talk about?"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <label className="flex max-w-sm cursor-pointer items-start gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  id="permission"
                  required
                  className="mt-1 h-4 w-4 accent-[var(--color-signal)]"
                />
                <span>I give permission to be contacted at this email address.</span>
              </label>

              <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
