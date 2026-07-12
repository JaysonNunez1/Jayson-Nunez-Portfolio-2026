// Shared Framer Motion presets used across all sections.
export const EASE = [0.22, 1, 0.36, 1]

// Fade-up that triggers when the element scrolls into view.
export const fadeUp = (delay = 0, { y = 40, margin = '-60px' } = {}) => ({
  initial: { y, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin },
  transition: { delay, duration: 0.7, ease: EASE },
})

// Fade-up that plays immediately on mount (used in the hero).
export const fadeUpOnLoad = (delay = 0, y = 30) => ({
  initial: { y, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.7, ease: EASE },
})

// Parent/child variants for staggered "pop in" lists (skill pills, hero letters).
export const staggerContainer = (staggerChildren = 0.055, delayChildren = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const staggerItem = {
  hidden: { opacity: 0, y: 12, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
}
