import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { colors, fonts } from '../theme'

// Animated "01 — About" label plus optional section heading.
export default function SectionHeader({ label, title, labelStyle, titleStyle }) {
  return (
    <>
      <motion.p {...fadeUp(0)} style={{ ...s.label, ...labelStyle }}>{label}</motion.p>
      {title && (
        <motion.h2 {...fadeUp(0.1)} style={{ ...s.heading, ...titleStyle }}>
          {title}
        </motion.h2>
      )}
    </>
  )
}

const s = {
  label: {
    fontFamily: fonts.mono,
    fontSize: '0.75rem',
    color: colors.accent,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heading: {
    fontFamily: fonts.sans,
    fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
    fontWeight: 700,
    color: colors.text,
    letterSpacing: '-0.02em',
    marginBottom: '3.5rem',
  },
}
