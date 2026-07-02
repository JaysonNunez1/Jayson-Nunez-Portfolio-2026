import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

const stats = [
  { value: '3+', label: 'Years Building' },
  { value: '10+', label: 'Projects Shipped' },
  { value: 'Columbia', label: 'Bootcamp Certified' },
  { value: 'NYC', label: 'Based In' },
]

export default function About() {
  return (
    <section id="about" style={s.section}>
      <div className="section-container">

        {/* Section label */}
        <motion.p {...fadeUp(0)} style={s.label}>01 — About</motion.p>

        <div style={s.grid}>
          {/* Left: bio */}
          <div style={s.bio}>
            <motion.h2 {...fadeUp(0.1)} style={s.heading}>
              I build things for<br />
              <span style={{ color: '#c2a4ff' }}>the web.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} style={s.body}>
              I'm a Full-Stack developer based in Queens, NY — passionate about
              crafting fast, responsive, and user-first web applications. I combine
              strong technical skills with clear communication, having sharpened
              problem-solving instincts in high-pressure roles before bringing them
              into software.
            </motion.p>
            <motion.p {...fadeUp(0.3)} style={{ ...s.body, marginTop: '1rem' }}>
              I graduated from Columbia Engineering's Full-Stack Bootcamp (2023–2024)
              and currently work at NYC's Office of Technology & Innovation, where I
              apply the same analytical thinking to diagnosing and resolving real-time
              problems for millions of New Yorkers.
            </motion.p>
            <motion.p {...fadeUp(0.4)} style={{ ...s.body, marginTop: '1rem' }}>
              I'm always looking for new challenges and love collaborating with people
              who care deeply about their craft.
            </motion.p>
          </div>

          {/* Right: stats */}
          <motion.div {...fadeUp(0.2)} style={s.statsGrid}>
            {stats.map(({ value, label }) => (
              <div key={label} style={s.statCard}>
                <span style={s.statValue}>{value}</span>
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
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    fontWeight: 400,
    color: '#c2a4ff',
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
    fontFamily: "'Geist', sans-serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    color: '#e8e3ef',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
  },
  body: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1rem',
    fontWeight: 300,
    color: '#8a8698',
    lineHeight: 1.8,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1px',
    background: '#2a2538',
    border: '1px solid #2a2538',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  statCard: {
    background: '#13111e',
    padding: '1.75rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  statValue: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '2rem',
    fontWeight: 700,
    color: '#e8e3ef',
    letterSpacing: '-0.02em',
  },
  statLabel: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 400,
    color: '#8a8698',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
}
