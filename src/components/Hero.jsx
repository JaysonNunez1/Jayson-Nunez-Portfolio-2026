import { motion } from 'framer-motion'
import { EASE, fadeUpOnLoad, staggerContainer } from '../lib/motion'
import { colors, fonts } from '../theme'
import { NAME, social } from '../data/site'

const letterContainer = staggerContainer(0.06, 0.3)
const letter = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

// Slow-drifting radial glows behind the hero text.
const orbs = [
  {
    animate: { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] },
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
    style: { top: '30%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(194,164,255,0.1) 0%, transparent 70%)' },
  },
  {
    animate: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] },
    transition: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 },
    style: { top: '20%', right: '5%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(126,184,212,0.08) 0%, transparent 70%)' },
  },
  {
    animate: { scale: [1, 1.1, 1], x: [0, 18, 0], y: [0, -12, 0] },
    transition: { duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 },
    style: { bottom: '12%', right: '22%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(194,164,255,0.06) 0%, transparent 70%)' },
  },
]

export default function Hero() {
  return (
    <section id="hero" style={s.section}>
      <style>{`
        @keyframes nameShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={orb.animate}
          transition={orb.transition}
          style={{ ...s.orb, ...orb.style }}
        />
      ))}

      <div className="section-container" style={{ paddingTop: '8rem', paddingBottom: '6rem', width: '100%' }}>

        {/* Greeting */}
        <motion.p {...fadeUpOnLoad(0.1)} style={s.greeting}>
          Hello, I'm
        </motion.p>

        {/* Name — letter by letter */}
        <div style={s.nameWrap}>
          <motion.div
            variants={letterContainer}
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
        <motion.p {...fadeUpOnLoad(0.8)} style={s.subtitle}>
          {'Full-Stack Developer'}
        </motion.p>

        {/* Tagline */}
        <motion.p {...fadeUpOnLoad(1.0)} style={s.tagline}>
          Building fast, responsive, and customer-first web applications.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUpOnLoad(1.2)} style={s.ctas}>
          <a href="#projects" style={s.btnPrimary}>View My Work</a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={s.btnGhost}
          >
            GitHub ↗
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={s.btnGhost}
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div {...fadeUpOnLoad(1.6)} style={s.scrollHint}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={s.scrollDot}
          />
          <span style={s.scrollText}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}

const s = {
  section: {
    minHeight: '100svh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  greeting: {
    fontFamily: fonts.sans,
    fontSize: '1rem',
    fontWeight: 300,
    color: colors.accent,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  nameWrap: {
    overflow: 'hidden',
    marginBottom: '1.25rem',
  },
  nameInner: {
    fontFamily: fonts.sans,
    fontSize: 'clamp(3.5rem, 10vw, 9rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    textTransform: 'uppercase',
    background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.accent} 35%, ${colors.accent2} 65%, ${colors.text} 100%)`,
    backgroundSize: '250% 250%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'nameShimmer 6s ease infinite',
  },
  subtitle: {
    fontFamily: fonts.mono,
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    fontWeight: 300,
    color: colors.accent2,
    letterSpacing: '0.08em',
    marginBottom: '1.5rem',
  },
  tagline: {
    fontFamily: fonts.sans,
    fontSize: '1.05rem',
    fontWeight: 300,
    color: colors.muted,
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
    fontFamily: fonts.sans,
    fontSize: '0.875rem',
    fontWeight: 500,
    color: colors.bg,
    background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent2})`,
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1.75rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'opacity 0.2s',
  },
  btnGhost: {
    fontFamily: fonts.sans,
    fontSize: '0.875rem',
    fontWeight: 400,
    color: colors.text,
    background: 'transparent',
    border: `1px solid ${colors.border}`,
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
    background: `linear-gradient(to bottom, ${colors.accent}, transparent)`,
    borderRadius: '1px',
  },
  scrollText: {
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    color: colors.muted,
    textTransform: 'uppercase',
  },
}
