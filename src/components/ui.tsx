import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../data/projects'

/** Button that gently follows the cursor. */
export function Magnetic({ children, className = '' }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 })
  return (
    <motion.div className={`inline-block ${className}`} style={{ x: sx, y: sy }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.25) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div>
  )
}

/** 3D tilt on hover. */
export function Tilt({ children, className = '', max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 })
  return (
    <motion.div className={className} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div>
  )
}

/* ---- Video manager: ONE page video plays at a time (the most visible one). ---- */
const ratios = new Map<HTMLVideoElement, number>()
let io: IntersectionObserver | undefined
const locked = () => document.body.style.overflow === 'hidden' // modal open
export function repick() {
  if (locked()) return
  let best: HTMLVideoElement | undefined, br = 0.4
  for (const [v, r] of ratios) if (r > br) { br = r; best = v }
  for (const v of ratios.keys()) if (v !== best) v.pause()
  best?.play().catch(() => {})
}
export const pauseAll = () => ratios.forEach((_, v) => v.pause())
export function hoverPlay(el: HTMLElement) { const v = el.querySelector('video'); if (v) { pauseAll(); v.play().catch(() => {}) } }
const observer = () => (io ??= new IntersectionObserver((es) => { es.forEach((e) => ratios.set(e.target as HTMLVideoElement, e.isIntersecting ? e.intersectionRatio : 0)); repick() }, { threshold: [0, 0.25, 0.4, 0.6, 0.8, 1] }))

/** 9:16 video (lazy, poster first) → poster image → gradient. `controls` = modal player. */
export function Media({ p, controls = false }: { p: Project; controls?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [vErr, setV] = useState(false), [iErr, setI] = useState(false)
  useEffect(() => {
    const v = ref.current; if (!v || controls) return
    const o = observer(); o.observe(v)
    return () => { o.unobserve(v); ratios.delete(v) }
  }, [vErr, controls])
  const cls = 'h-full w-full object-cover'
  if (!vErr) return <video ref={ref} src={p.video} poster={p.poster} muted={!controls} loop playsInline preload={controls ? 'auto' : 'none'} controls={controls} autoPlay={controls} aria-label={`${p.title} — ${p.category} (${p.badge.toLowerCase()}) by BILEKSA`} onError={() => setV(true)} className={cls} />
  if (!iErr) return <img src={p.poster} alt={`${p.title} — ${p.category} (${p.badge.toLowerCase()}) by BILEKSA`} loading="lazy" onError={() => setI(true)} className={cls} />
  return <div className={`${cls} bg-gradient-to-br from-blue to-violet`} />
}
