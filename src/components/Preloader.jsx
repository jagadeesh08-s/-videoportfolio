import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] flex items-center justify-center overflow-hidden bg-deep"
          aria-hidden={!isLoading}
        >
          <div className="absolute inset-0 atm-grid opacity-40" />
          <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-signal/25 blur-3xl animate-drift" />
          <div className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-emerald-900/30 blur-3xl animate-drift" />

          <motion.div
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="relative font-display text-5xl font-extrabold tracking-tight text-paper md:text-7xl"
          >
            <span className="text-white/20">Jagadeesh</span>
            <motion.span
              className="absolute inset-0 overflow-hidden whitespace-nowrap text-paper"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.25, ease: 'easeInOut', delay: 0.15 }}
            >
              Jagadeesh<span className="text-signal">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
