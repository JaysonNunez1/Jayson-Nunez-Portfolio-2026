import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const projects = [
  {
    number: '01',
    name: 'Active Eats!',
    description:
      'A calorie-tracking and workout companion app. Users can log their meals, track calories per serving, and discover exercises to burn off what they consumed — all in one seamless UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/JaysonNunez1/active-eats',
    demo: 'https://jaysonnunez1.github.io/active-eats/',
    role: 'Frontend & Styling',
  },
  {
    number: '02',
    name: 'Weather Dashboard',
    description:
      'A clean weather app powered by the OpenWeather API. Search any city and instantly see current conditions plus a 5-day forecast with weather icons — all updated dynamically on the page.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'OpenWeather API'],
    github: 'https://github.com/JaysonNunez1/Jaysons-Weather-Dashboard-1',
    demo: 'https://jaysonnunez1.github.io/Jaysons-Weather-Dashboard-1/',
    role: 'Sole Author',
  },
  {
    number: '03',
    name: 'Password Generator',
    description:
      'A simple but complete password generator. Users choose their desired length and character types; the app instantly generates a secure random password and displays it in the input field.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/JaysonNunez1/Jaysons-Password-Generator',
    demo: 'https://jaysonnunez1.github.io/Jaysons-Password-Generator/',
    role: 'Sole Author',
  },
  {
    number: '04',
    name: 'Heavy Hive Studios',
    description:
      'A recording studio web app where users can book studio sessions and subscribe to beats and studio time packages — built for Heavy Hive Studios.',
    tags: ['React', 'JavaScript', 'CSS', 'Vercel'],
    demo: 'https://heavy-hive-studios.vercel.app/',
    role: 'Sole Author',
  },
  {
    number: '05',
    name: 'Lucy Rainbow Daycare',
    description:
      'A warm, full-featured website for a licensed family daycare in Richmond Hill, Queens — 20+ years of trusted neighborhood care. Features program details, a photo gallery, and contact info.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    demo: 'https://lucy-rainbow-daycare.vercel.app/',
    role: 'Sole Author',
  },
  {
    number: '06',
    name: 'More Projects Coming Soon',
    description: 'Always building something new — check back soon.',
    tags: [],
    placeholder: true,
    role: '',
  },
]

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
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ ...s.card, ...s.placeholderCard }}
      >
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
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={s.label}
        >
          02 — Projects
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={s.heading}
        >
          Things I've built
        </motion.h2>

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
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#c2a4ff',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heading: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
    fontWeight: 700,
    color: '#e8e3ef',
    letterSpacing: '-0.02em',
    marginBottom: '3.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#13111e',
    border: '1px solid #2a2538',
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
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#2a2538',
    letterSpacing: '0.1em',
  },
  placeholderTitle: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1rem',
    fontWeight: 500,
    color: '#2a2538',
    letterSpacing: '-0.01em',
  },
  placeholderDesc: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 300,
    color: '#2a2538',
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
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#2a2538',
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
    color: '#c2a4ff',
    fontSize: '0.8rem',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.04em',
    transition: 'opacity 0.2s',
    textDecoration: 'none',
  },
  ghLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#8a8698',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
  },
  name: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#e8e3ef',
    letterSpacing: '-0.01em',
  },
  desc: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 300,
    color: '#8a8698',
    lineHeight: 1.75,
    flex: 1,
  },
  meta: {
    borderTop: '1px solid #2a2538',
    paddingTop: '0.85rem',
  },
  role: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#7eb8d4',
    letterSpacing: '0.08em',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#8a8698',
    background: '#0a0a0f',
    border: '1px solid #2a2538',
    borderRadius: '3px',
    padding: '0.25rem 0.6rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
}
