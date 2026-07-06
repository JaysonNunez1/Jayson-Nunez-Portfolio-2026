import { motion } from 'framer-motion'

const NAME = 'JAYSON NUNEZ'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
}
const letter = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeUp = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow — animated */}
      <style>{`
        @keyframes nameShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '30%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(194,164,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ position: 'absolute', top: '20%', right: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(126,184,212,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        style={{ position: 'absolute', bottom: '12%', right: '22%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(194,164,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }}
      />

      <div className="section-container" style={{ paddingTop: '8rem', paddingBottom: '6rem', width: '100%' }}>

        {/* Greeting */}
        <motion.p {...fadeUp(0.1)} style={s.greeting}>
          Hello, I'm
        </motion.p>

        {/* Name — letter by letter */}
        <div style={s.nameWrap}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={s.nameInner}
          >
            {NAME.split('').map((ch, i) => (
              <motion.span
                key={i}
                variants={letter}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.8)} style={s.subtitle}>
          {'Full-Stack Developer'}
        </motion.p>

        {/* Tagline */}
        <motion.p {...fadeUp(1.0)} style={s.tagline}>
          Building fast, responsive, and customer-first web applications.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1.2)} style={s.ctas}>
          <a href="#projects" style={s.btnPrimary}>View My Work</a>
          <a
            href="https://github.com/JaysonNunez1"
            target="_blank"
            rel="noopener noreferrer"
            style={s.btnGhost}
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jayson-nunez-838623304/"
            target="_blank"
            rel="noopener noreferrer"
            style={s.btnGhost}
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          {...fadeUp(1.6)}
          style={s.scrollHint}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={s.scrollDot}
          />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#8a8698', textTransform: 'uppercase' }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}

const s = {
  greeting: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1rem',
    fontWeight: 300,
    color: '#c2a4ff',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  nameWrap: {
    overflow: 'hidden',
    marginBottom: '1.25rem',
  },
  nameInner: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 'clamp(3.5rem, 10vw, 9rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    textTransform: 'uppercase',
    background: 'linear-gradient(135deg, #e8e3ef 0%, #c2a4ff 35%, #7eb8d4 65%, #e8e3ef 100%)',
    backgroundSize: '250% 250%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'nameShimmer 6s ease infinite',
  },
  subtitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    fontWeight: 300,
    color: '#7eb8d4',
    letterSpacing: '0.08em',
    marginBottom: '1.5rem',
  },
  tagline: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1.05rem',
    fontWeight: 300,
    color: '#8a8698',
    maxWidth: 500,
    lineHeight: 1.7,
    marginBottom: '2.5rem',
  },
  ctas: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  btnPrimary: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#0a0a0f',
    background: 'linear-gradient(135deg, #c2a4ff, #7eb8d4)',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1.75rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'opacity 0.2s',
  },
  btnGhost: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#e8e3ef',
    background: 'transparent',
    border: '1px solid #2a2538',
    borderRadius: '4px',
    padding: '0.75rem 1.5rem',
    letterSpacing: '0.06em',
    transition: 'border-color 0.2s, color 0.2s',
  },
  scrollHint: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  scrollDot: {
    width: 1,
    height: 40,
    background: 'linear-gradient(to bottom, #c2a4ff, transparent)',
    borderRadius: '1px',
  },
}
