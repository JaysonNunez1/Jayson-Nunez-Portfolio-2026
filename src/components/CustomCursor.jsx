import { useEffect, useRef, useState } from 'react'
import { colors } from '../theme'

const HOVER_TARGETS = 'a, button, [role=button]'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const hoverRef = useRef(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Hover state is detected via delegation on mousemove, so links and
    // buttons mounted after the loading screen are picked up too.
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      const isHover = !!e.target.closest?.(HOVER_TARGETS)
      hoverRef.current = isHover
      setHovering(isHover)
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const lerp = (a, b, t) => a + (b - a) * t
    let animId

    const animate = () => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`

        ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
        ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)
        const scale = hoverRef.current ? 2.2 : 1
        ringRef.current.style.transform =
          `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px) scale(${scale})`
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: colors.accent,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          transition: 'opacity 0.2s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? colors.accent : colors.accent2}`,
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          transition: 'border-color 0.3s, transform 0.1s',
        }}
      />
    </>
  )
}
