import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        ...navStyles.nav,
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #2a2538' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div style={navStyles.inner}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={navStyles.logo}>
          {'<JN/>'}
        </button>

        {/* Links */}
        <div style={navStyles.links}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={navStyles.link}>
              {l}
            </button>
          ))}
          <a
            href="/Jayson_Nunez_Resume.pdf"
            download
            style={navStyles.resumeBtn}
          >
            Resume ↓
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

const navStyles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
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
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1rem',
    fontWeight: 500,
    color: '#c2a4ff',
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
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#8a8698',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    background: 'none',
    border: 'none',
    padding: 0,
    transition: 'color 0.2s',
  },
  resumeBtn: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#c2a4ff',
    border: '1px solid #2a2538',
    borderRadius: '4px',
    padding: '0.4rem 0.9rem',
    letterSpacing: '0.08em',
    transition: 'border-color 0.2s, color 0.2s',
  },
}
