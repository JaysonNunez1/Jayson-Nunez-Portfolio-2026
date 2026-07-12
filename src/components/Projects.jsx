import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { colors, fonts } from '../theme'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

function TiltCard({ p, i }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7])
  const springRotX = useSpring(rotateX, { stiffness: 280, damping: 24 })
  const springRotY = useSpring(rotateY, { stiffness: 280, damping: 24 })

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (p.placeholder) {
    return (
      <motion.div {...fadeUp(0.1 * i)} style={{ ...s.card, ...s.placeholderCard }}>
        <div style={s.placeholderInner}>
          <span style={s.placeholderNum}>{p.number}</span>
          <h3 style={s.placeholderTitle}>{p.name}</h3>
          <p style={s.placeholderDesc}>{p.description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      {...fadeUp(0.1 * i)}
      whileHover={{ boxShadow: '0 0 0 1px rgba(194,164,255,0.35), 0 24px 60px rgba(194,164,255,0.12)' }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        ...s.card,
        rotateX: springRotX,
        rotateY: springRotY,
        transformPerspective: 900,
      }}
    >
      <div style={s.cardTop}>
        <div style={s.cardTopLeft}>
          <span style={s.num}>{p.number}</span>
        </div>
        <div style={s.links}>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={s.demoLink}
              title="Live Demo"
            >
              ↗ Demo
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={s.ghLink}
              title="GitHub"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>

      <h3 style={s.name}>{p.name}</h3>
      <p style={s.desc}>{p.description}</p>

      <div style={s.meta}>
        <span style={s.role}>Role: {p.role}</span>
      </div>

      <div style={s.tags}>
        {p.tags.map(t => (
          <span key={t} style={s.tag}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={s.section}>
      <div className="section-container">
        <SectionHeader label="02 — Projects" title="Things I've built" />

        <div style={s.grid}>
          {projects.map((p, i) => (
            <TiltCard key={p.name} p={p} i={i} />
          ))}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '10px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    transition: 'border-color 0.3s',
    cursor: 'default',
  },
  placeholderCard: {
    borderStyle: 'dashed',
    opacity: 0.45,
  },
  placeholderInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2.5rem 1rem',
    textAlign: 'center',
    gap: '0.6rem',
  },
  placeholderNum: {
    fontFamily: fonts.mono,
    fontSize: '0.7rem',
    color: colors.border,
    letterSpacing: '0.1em',
  },
  placeholderTitle: {
    fontFamily: fonts.sans,
    fontSize: '1rem',
    fontWeight: 500,
    color: colors.border,
    letterSpacing: '-0.01em',
  },
  placeholderDesc: {
    fontFamily: fonts.sans,
    fontSize: '0.8rem',
    fontWeight: 300,
    color: colors.border,
    lineHeight: 1.6,
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTopLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  num: {
    fontFamily: fonts.mono,
    fontSize: '0.75rem',
    color: colors.border,
    letterSpacing: '0.1em',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  demoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    color: colors.accent,
    fontSize: '0.8rem',
    fontFamily: fonts.mono,
    letterSpacing: '0.04em',
    transition: 'opacity 0.2s',
    textDecoration: 'none',
  },
  ghLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: colors.muted,
    fontSize: '0.875rem',
    transition: 'color 0.2s',
  },
  name: {
    fontFamily: fonts.sans,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: colors.text,
    letterSpacing: '-0.01em',
  },
  desc: {
    fontFamily: fonts.sans,
    fontSize: '0.9rem',
    fontWeight: 300,
    color: colors.muted,
    lineHeight: 1.75,
    flex: 1,
  },
  meta: {
    borderTop: `1px solid ${colors.border}`,
    paddingTop: '0.85rem',
  },
  role: {
    fontFamily: fonts.mono,
    fontSize: '0.7rem',
    color: colors.accent2,
    letterSpacing: '0.08em',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    fontFamily: fonts.mono,
    fontSize: '0.65rem',
    color: colors.muted,
    background: colors.bg,
    border: `1px solid ${colors.border}`,
    borderRadius: '3px',
    padding: '0.25rem 0.6rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
}
