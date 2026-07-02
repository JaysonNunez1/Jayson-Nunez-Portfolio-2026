import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Handlebars', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL', 'SQL', 'NoSQL'],
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'GitHub', 'Vite', 'Responsive Design', 'Microsoft Excel', 'Google Docs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={s.section}>
      <div className="section-container">

        <motion.p {...fadeUp(0)} style={s.label}>03 — Skills</motion.p>

        <motion.h2 {...fadeUp(0.1)} style={s.heading}>
          My tech stack
        </motion.h2>

        <div style={s.grid}>
          {skillGroups.map((group, i) => (
            <motion.div key={group.category} {...fadeUp(0.1 + i * 0.08)} style={s.group}>
              <h3 style={s.category}>{group.category}</h3>
              <div style={s.pills}>
                {group.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ borderColor: '#c2a4ff', color: '#c2a4ff' }}
                    style={s.pill}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
  },
  group: {
    background: '#13111e',
    border: '1px solid #2a2538',
    borderRadius: '10px',
    padding: '1.75rem',
  },
  category: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#7eb8d4',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  pill: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 400,
    color: '#8a8698',
    background: '#0a0a0f',
    border: '1px solid #2a2538',
    borderRadius: '4px',
    padding: '0.35rem 0.75rem',
    transition: 'border-color 0.2s, color 0.2s',
    display: 'inline-block',
  },
}
