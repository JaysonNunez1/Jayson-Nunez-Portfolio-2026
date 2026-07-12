import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { colors, fonts } from '../theme'
import { stats } from '../data/site'

// Counts from 0 up to a numeric target when scrolled into view;
// non-numeric targets (e.g. "NYC") render as-is.
function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(target)
  const isNum = !isNaN(num)
  const [display, setDisplay] = useState(isNum ? '0' : target)

  useEffect(() => {
    if (!inView) return
    if (!isNum) {
      setDisplay(target)
      return
    }
    let raf
    const start = performance.now()
    const duration = 1300
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(ease * num).toString())
      if (t < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [inView, isNum, num, target])

  return <span ref={ref}>{display}{isNum ? suffix : ''}</span>
}

const aboutFade = (delay = 0) => fadeUp(delay, { margin: '-80px' })

export default function About() {
  return (
    <section id="about" style={s.section}>
      <div className="section-container">

        {/* Section label */}
        <motion.p {...aboutFade(0)} style={s.label}>01 — About</motion.p>

        <div style={s.grid}>
          {/* Left: bio */}
          <div style={s.bio}>
            <motion.h2 {...aboutFade(0.1)} style={s.heading}>
              I build things for<br />
              <span style={{ color: colors.accent }}>the web.</span>
            </motion.h2>
            <motion.p {...aboutFade(0.2)} style={s.body}>
              I'm a Full-Stack developer based in Queens, NY — passionate about
              crafting fast, responsive, and user-first web applications. I combine
              strong technical skills with clear communication, having sharpened
              problem-solving instincts in high-pressure roles before bringing them
              into software.
            </motion.p>
            <motion.p {...aboutFade(0.3)} style={{ ...s.body, marginTop: '1rem' }}>
              I graduated from Columbia Engineering's Full-Stack Bootcamp (2023–2024)
              and currently work at NYC's Office of Technology & Innovation, where I
              apply the same analytical thinking to diagnosing and resolving real-time
              problems for millions of New Yorkers.
            </motion.p>
            <motion.p {...aboutFade(0.4)} style={{ ...s.body, marginTop: '1rem' }}>
              I'm always looking for new challenges and love collaborating with people
              who care deeply about their craft.
            </motion.p>
          </div>

          {/* Right: stats */}
          <motion.div {...aboutFade(0.2)} style={s.statsGrid}>
            {stats.map(({ value, suffix, label }) => (
              <div key={label} style={s.statCard}>
                <span style={s.statValue}>
                  <CountUp target={value} suffix={suffix} />
                </span>
                <span style={s.statLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    padding: '8rem 0',
    position: 'relative',
    zIndex: 1,
  },
  label: {
    fontFamily: fonts.mono,
    fontSize: '0.75rem',
    fontWeight: 400,
    color: colors.accent,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '2.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'start',
  },
  bio: {},
  heading: {
    fontFamily: fonts.sans,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    color: colors.text,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
  },
  body: {
    fontFamily: fonts.sans,
    fontSize: '1rem',
    fontWeight: 300,
    color: colors.muted,
    lineHeight: 1.8,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1px',
    background: colors.border,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    overflow: 'hidden',
  },
  statCard: {
    background: colors.card,
    padding: '1.75rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  statValue: {
    fontFamily: fonts.sans,
    fontSize: '2rem',
    fontWeight: 700,
    color: colors.text,
    letterSpacing: '-0.02em',
  },
  statLabel: {
    fontFamily: fonts.sans,
    fontSize: '0.8rem',
    fontWeight: 400,
    color: colors.muted,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
}
