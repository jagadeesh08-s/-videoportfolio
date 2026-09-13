import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-deep text-paper'
          : isScrolled
            ? 'border-b border-ink/10 bg-mist/90 text-ink backdrop-blur-md'
            : 'bg-transparent text-paper'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href="#hero"
          className={`font-display text-xl font-extrabold tracking-tight md:text-2xl ${
            isOpen || !isScrolled ? 'text-paper' : 'text-ink'
          }`}
        >
          Jagadeesh<span className="text-signal">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm font-semibold tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'text-ink/70 hover:text-ink' : 'text-paper/80 hover:text-paper'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className={`md:hidden ${isOpen || !isScrolled ? 'text-paper' : 'text-ink'}`}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-white/10 bg-deep transition-all duration-300 ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-3 font-display text-lg font-semibold text-paper"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-4 text-center">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
