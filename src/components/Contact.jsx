import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { colors, fonts } from '../theme'
import { contactLinks } from '../data/site'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" style={s.section}>
      <div className="section-container">
        <SectionHeader
          label="04 — Contact"
          title={<>Let's work<br /><span style={{ color: colors.accent }}>together.</span></>}
          titleStyle={s.heading}
        />

        <motion.p {...fadeUp(0.2)} style={s.body}>
          I'm currently open to new opportunities. Whether it's a full-time role,
          a freelance project, or just a good conversation about tech — my inbox is always open.
        </motion.p>

        <motion.div {...fadeUp(0.3)} style={s.linksWrap}>
          {contactLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={s.linkRow}
            >
              <span style={s.linkLabel}>{l.label}</span>
              <span style={l.mono ? { ...s.linkValue, fontFamily: fonts.mono, fontSize: '0.85rem' } : s.linkValue}>
                {l.value}
              </span>
              <span style={s.arrow}>↗</span>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(0.4)} style={s.footer}>
          <span style={s.footerText}>
            Designed & built by Jayson Nunez · Queens, NY
          </span>
          <span style={s.footerText}>
            © {new Date().getFullYear()}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

const s = {
  section: {
    padding: '8rem 0 6rem',
    position: 'relative',
    zIndex: 1,
  },
  heading: {
    fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  body: {
    fontFamily: fonts.sans,
    fontSize: '1rem',
    fontWeight: 300,
    color: colors.muted,
    maxWidth: 520,
    lineHeight: 1.8,
    marginBottom: '3rem',
  },
  linksWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    borderTop: `1px solid ${colors.border}`,
    marginBottom: '4rem',
  },
  linkRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 0',
    borderBottom: `1px solid ${colors.border}`,
    transition: 'color 0.2s',
    color: colors.text,
    textDecoration: 'none',
  },
  linkLabel: {
    fontFamily: fonts.mono,
    fontSize: '0.7rem',
    color: colors.muted,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    width: 80,
    flexShrink: 0,
  },
  linkValue: {
    fontFamily: fonts.sans,
    fontSize: '1rem',
    color: colors.text,
    flex: 1,
  },
  arrow: {
    color: colors.accent,
    fontSize: '1rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  footerText: {
    fontFamily: fonts.mono,
    fontSize: '0.7rem',
    color: colors.muted,
    letterSpacing: '0.06em',
  },
}
