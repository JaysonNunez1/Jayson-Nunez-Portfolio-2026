import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          style={styles.wrapper}
        >
          {/* Monogram */}
          <motion.div
            style={styles.monogram}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'<JN/>'}
          </motion.div>

          {/* Progress number */}
          <div style={styles.progressNum}>
            {Math.min(Math.round(progress), 100)}
          </div>

          {/* Progress bar */}
          <div style={styles.barTrack}>
            <motion.div
              style={styles.barFill}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>

          {/* Scrolling ticker */}
          <div style={styles.tickerWrap}>
            <motion.div
              style={styles.tickerInner}
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

const styles = {
  wrapper: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: '#0a0a0f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    overflow: 'hidden',
  },
  monogram: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 500,
    color: '#c2a4ff',
    letterSpacing: '0.05em',
  },
  progressNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    color: '#8a8698',
    letterSpacing: '0.15em',
  },
  barTrack: {
    width: 'clamp(180px, 30vw, 320px)',
    height: '1px',
    background: '#2a2538',
    borderRadius: '1px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #c2a4ff, #7eb8d4)',
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
    fontFamily: "'Geist', sans-serif",
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: 700,
    color: 'transparent',
    WebkitTextStroke: '1px #2a2538',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
}
