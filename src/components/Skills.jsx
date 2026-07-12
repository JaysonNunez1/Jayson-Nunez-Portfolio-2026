import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'
import { colors, fonts } from '../theme'
import { skillGroups, certifications } from '../data/skills'
import SectionHeader from './SectionHeader'

const pillContainer = staggerContainer()

export default function Skills() {
  return (
    <section id="skills" style={s.section}>
      <div className="section-container">
        <SectionHeader label="03 — Skills" title="My tech stack" />

        <div style={s.grid}>
          {skillGroups.map((group, i) => (
            <motion.div key={group.category} {...fadeUp(0.1 + i * 0.08)} style={s.group}>
              <h3 style={s.category}>{group.category}</h3>
              <motion.div
                variants={pillContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                style={s.pills}
              >
                {group.skills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={staggerItem}
                    whileHover={{ borderColor: colors.accent, color: colors.accent }}
                    style={s.pill}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <SectionHeader
          label="Certifications"
          labelStyle={{ marginTop: '5rem', marginBottom: '1.5rem' }}
        />

        <div style={s.certGrid}>
          {certifications.map((cert, i) => (
            <motion.div key={cert.name + cert.year} {...fadeUp(0.1 + i * 0.08)} style={cert.status === 'inprogress' ? { ...s.certCard, ...s.certCardInProgress } : s.certCard}>
              <div style={s.certTop}>
                <span style={s.certName}>{cert.name}</span>
                <span style={cert.status === 'inprogress' ? s.certBadgeInProgress : s.certBadge}>
                  {cert.status === 'inprogress' ? 'In Progress' : cert.year}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={s.certIssuer}>{cert.issuer}</span>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" style={s.certVerify}>
                    Verify ↗
                  </a>
                )}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
  },
  group: {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '10px',
    padding: '1.75rem',
  },
  category: {
    fontFamily: fonts.sans,
    fontSize: '0.7rem',
    fontWeight: 600,
    color: colors.accent2,
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
    fontFamily: fonts.sans,
    fontSize: '0.85rem',
    fontWeight: 400,
    color: colors.muted,
    background: colors.bg,
    border: `1px solid ${colors.border}`,
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
    background: colors.card,
    border: `1px solid ${colors.border}`,
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
    fontFamily: fonts.sans,
    fontSize: '0.95rem',
    fontWeight: 500,
    color: colors.text,
  },
  certBadge: {
    fontFamily: fonts.mono,
    fontSize: '0.65rem',
    color: colors.accent2,
    border: `1px solid ${colors.accent2}`,
    borderRadius: '3px',
    padding: '0.15rem 0.5rem',
    whiteSpace: 'nowrap',
  },
  certBadgeInProgress: {
    fontFamily: fonts.mono,
    fontSize: '0.65rem',
    color: colors.accent,
    border: `1px dashed ${colors.accent}`,
    borderRadius: '3px',
    padding: '0.15rem 0.5rem',
    whiteSpace: 'nowrap',
  },
  certIssuer: {
    fontFamily: fonts.sans,
    fontSize: '0.8rem',
    fontWeight: 300,
    color: colors.muted,
  },
  certVerify: {
    fontSize: '11px',
    color: colors.accent,
    textDecoration: 'none',
    letterSpacing: '0.5px',
  },
}
