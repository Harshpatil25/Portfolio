import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '../hooks/useLoading'
import { useEffect, useRef, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { navItems, socialLinks } from '../data/siteData'
import Lenis from 'lenis'

export function Layout({ children }) {
  const isLoading = useLoading()
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 0.8, lerp: 0.1 })
    let rafId = 0

    const animate = () => {
      lenis.raf(rafId)
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    let ticking = false
    const handleScroll = () => {
      if (ticking) return

      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const current = window.scrollY
        const delta = current - lastScrollYRef.current

        setScrollY(current)

        if (current < 80) {
          setIsVisible(true)
        } else if (delta > 40) {
          setIsVisible(false)
        } else if (delta < -80) {
          setIsVisible(true)
        }

        lastScrollYRef.current = current
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const progress = Math.min(100, (scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100)

  const handleNavClick = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-120 flex items-center justify-center bg-[#09090B]"
          >
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-full border border-violet-400/30" />
              <motion.div
                className="absolute inset-2 rounded-full border border-violet-300/60"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
              />
              <motion.div
                initial={{ scale: 0.7, opacity: 0.5 }}
                animate={{ scale: [0.7, 1, 0.7], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
                className="text-3xl font-semibold tracking-[0.35em] text-white"
              >
                HP
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed inset-x-0 top-0 z-100 h-0.5 bg-transparent">
        <div className="h-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400" style={{ width: `${progress}%` }} />
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -90, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-90 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <button onClick={() => handleNavClick('Home')} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
          Harsh<span className="text-violet-300">.dev</span>
        </button>

        <nav className="hidden items-center gap-6 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleNavClick(item)} className="transition hover:text-white">
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/Harshpatil25" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet-400/50">
            <FaGithub />
          </a>
          <a href="/HarshPatilResume.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5">
            Resume
          </a>
        </div>

        <button onClick={() => setMenuOpen((prev) => !prev)} className="rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl md:hidden">
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-80 bg-[#09090B]/90 backdrop-blur-xl md:hidden">
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="mx-auto mt-24 flex w-[90%] max-w-sm flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6">
              {navItems.map((item) => (
                <button key={item} onClick={() => handleNavClick(item)} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left text-lg text-white">
                  {item}
                </button>
              ))}
              <div className="mt-3 flex gap-3">
                {socialLinks.slice(0, 2).map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-white">
                    {link.icon === 'github' ? <FaGithub /> : <FaLinkedin />}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>{children}</main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet-400/50"
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-center text-sm text-zinc-400 md:flex-row md:text-left">
          <div>
            <p className="text-white">Designed and built by Harsh Patil</p>
            <p>© 2026 — Crafted for modern web experiences.</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2.5 text-white transition hover:-translate-y-0.5">
                {link.icon === 'github' ? <FaGithub /> : link.icon === 'linkedin' ? <FaLinkedin /> : <FaEnvelope />}
              </a>
            ))}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 p-3 text-white">
              <FiArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
