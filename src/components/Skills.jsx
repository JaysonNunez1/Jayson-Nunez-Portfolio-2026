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
    skills: ['Git', 'GitHub', 'Vite', 'Responsive Design', 'Microsoft Word', 'Microsoft Excel', 'Google Docs'],
  },
]

const certifications = [
  {
    name: 'Claude AI Certification',
    issuer: 'Anthropic · Skilljar',
    year: '2025',
    status: 'earned',
  },
  {
    name: 'Full-Stack Web Development Certificate',
    issuer: 'Columbia Engineering Bootcamps · GetSmarter',
    year: '2024',
    status: 'earned',
  },
  {
    name: 'Claude AI Certification',
    issuer: 'Anthropic',
    year: 'In Progress',
    status: 'inprogress',
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

        {/* Certifications */}
        <motion.p {...fadeUp(0.1)} style={{ ...s.label, marginTop: '5rem', marginBottom: '1.5rem' }}>
          Certifications
        </motion.p>

        <div style={s.certGrid}>
          {certifications.map((cert, i) => (
            <motion.div key={cert.name + cert.year} {...fadeUp(0.1 + i * 0.08)} style={cert.status === 'inprogress' ? { ...s.certCard, ...s.certCardInProgress } : s.certCard}>
              <div style={s.certTop}>
                <span style={s.certName}>{cert.name}</span>
                <span style={cert.status === 'inprogress' ? s.certBadgeInProgress : s.certBadge}>
                  {cert.status === 'inprogress' ? 'In Progress' : cert.year}
                </span>
              </div>
              <span style={s.certIssuer}>{cert.issuer}</span>
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
  certGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  certCard: {
    background: '#13111e',
    border: '1px solid #2a2538',
    borderRadius: '10px',
    padding: '1.25rem 1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  certCardInProgress: {
    borderStyle: 'dashed',
    opacity: 0.65,
  },
  certTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  certName: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#e8e3ef',
  },
  certBadge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#7eb8d4',
    border: '1px solid #7eb8d4',
    borderRadius: '3px',
    padding: '0.15rem 0.5rem',
    whiteSpace: 'nowrap',
  },
  certBadgeInProgress: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#c2a4ff',
    border: '1px dashed #c2a4ff',
    borderRadius: '3px',
    padding: '0.15rem 0.5rem',
    whiteSpace: 'nowrap',
  },
  certIssuer: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 300,
    color: '#8a8698',
  },
}
