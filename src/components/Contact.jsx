import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

const links = [
  {
    label: 'Email',
    value: 'jaysonnunez3@gmail.com',
    href: 'mailto:jaysonnunez3@gmail.com',
    mono: true,
  },
  {
    label: 'LinkedIn',
    value: 'jayson-nunez-838623304',
    href: 'https://www.linkedin.com/in/jayson-nunez-838623304/',
  },
  {
    label: 'GitHub',
    value: 'JaysonNunez1',
    href: 'https://github.com/JaysonNunez1',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={s.section}>
      <div className="section-container">

        <motion.p {...fadeUp(0)} style={s.label}>04 — Contact</motion.p>

        <motion.h2 {...fadeUp(0.1)} style={s.heading}>
          Let's work<br />
          <span style={{ color: '#c2a4ff' }}>together.</span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} style={s.body}>
          I'm currently open to new opportunities. Whether it's a full-time role,
          a freelance project, or just a good conversation about tech — my inbox is always open.
        </motion.p>

        <motion.div {...fadeUp(0.3)} style={s.linksWrap}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={s.linkRow}
            >
              <span style={s.linkLabel}>{l.label}</span>
              <span style={l.mono ? { ...s.linkValue, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' } : s.linkValue}>
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
    fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
    fontWeight: 800,
    color: '#e8e3ef',
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  body: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1rem',
    fontWeight: 300,
    color: '#8a8698',
    maxWidth: 520,
    lineHeight: 1.8,
    marginBottom: '3rem',
  },
  linksWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    borderTop: '1px solid #2a2538',
    marginBottom: '4rem',
  },
  linkRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 0',
    borderBottom: '1px solid #2a2538',
    transition: 'color 0.2s',
    color: '#e8e3ef',
    textDecoration: 'none',
  },
  linkLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#8a8698',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    width: 80,
    flexShrink: 0,
  },
  linkValue: {
    fontFamily: "'Geist', sans-serif",
    fontSize: '1rem',
    color: '#e8e3ef',
    flex: 1,
  },
  arrow: {
    color: '#c2a4ff',
    fontSize: '1rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  footerText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#8a8698',
    letterSpacing: '0.06em',
  },
}
