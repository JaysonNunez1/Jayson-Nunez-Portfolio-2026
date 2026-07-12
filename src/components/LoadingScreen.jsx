import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts } from '../theme'

const TICKER_TEXT = 'FULL-STACK DEVELOPER  •  REACT  •  NODE.JS  •  JAVASCRIPT  •  '

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 300)
          return 100
        }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={s.wrapper}
        >
          {/* Monogram */}
          <motion.div
            style={s.monogram}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'<JN/>'}
          </motion.div>

          {/* Progress number */}
          <div style={s.progressNum}>
            {Math.min(Math.round(progress), 100)}
          </div>

          {/* Progress bar */}
          <div style={s.barTrack}>
            <motion.div
              style={s.barFill}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>

          {/* Scrolling ticker */}
          <div style={s.tickerWrap}>
            <motion.div
              style={s.tickerInner}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {(TICKER_TEXT + TICKER_TEXT).split('').map((ch, i) => (
                <span key={i}>{ch}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const s = {
  wrapper: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: colors.bg,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    overflow: 'hidden',
  },
  monogram: {
    fontFamily: fonts.mono,
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 500,
    color: colors.accent,
    letterSpacing: '0.05em',
  },
  progressNum: {
    fontFamily: fonts.mono,
    fontSize: '0.85rem',
    color: colors.muted,
    letterSpacing: '0.15em',
  },
  barTrack: {
    width: 'clamp(180px, 30vw, 320px)',
    height: '1px',
    background: colors.border,
    borderRadius: '1px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent2})`,
    borderRadius: '1px',
  },
  tickerWrap: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  tickerInner: {
    display: 'inline-block',
    fontFamily: fonts.sans,
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: 700,
    color: 'transparent',
    WebkitTextStroke: `1px ${colors.border}`,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
}
