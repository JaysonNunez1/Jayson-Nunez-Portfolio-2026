import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'
import { colors, fonts } from '../theme'
import { navLinks } from '../data/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      setProgress(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
      style={{
        ...s.nav,
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        borderBottom: scrolled ? `1px solid ${colors.border}` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      {/* Scroll progress bar */}
      <div style={s.progressTrack}>
        <motion.div style={{ ...s.progressFill, width: `${progress}%` }} />
      </div>
      <div style={s.inner}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={s.logo}>
          {'<JN/>'}
        </button>

        {/* Links */}
        <div style={s.links}>
          {navLinks.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={s.link}>
              {l}
            </button>
          ))}
          <a
            href="/Jayson_Nunez_Resume.pdf"
            download
            style={s.resumeBtn}
          >
            Resume ↓
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

const s = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
  },
  progressTrack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    background: 'rgba(42,37,56,0.5)',
  },
  progressFill: {
    height: '100%',
    background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent2})`,
    transition: 'width 0.12s linear',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 2rem',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: fonts.mono,
    fontSize: '1rem',
    fontWeight: 500,
    color: colors.accent,
    letterSpacing: '0.05em',
    background: 'none',
    border: 'none',
    padding: 0,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    fontFamily: fonts.sans,
    fontSize: '0.875rem',
    fontWeight: 400,
    color: colors.muted,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    background: 'none',
    border: 'none',
    padding: 0,
    transition: 'color 0.2s',
  },
  resumeBtn: {
    fontFamily: fonts.sans,
    fontSize: '0.8rem',
    fontWeight: 500,
    color: colors.accent,
    border: `1px solid ${colors.border}`,
    borderRadius: '4px',
    padding: '0.4rem 0.9rem',
    letterSpacing: '0.08em',
    transition: 'border-color 0.2s, color 0.2s',
  },
}
