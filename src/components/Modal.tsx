import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Media, pauseAll, repick } from './ui'

const note = {
  CONCEPT: 'Self-initiated concept — not client work.',
  DEMO: 'Demo built to show what BILEKSA can do — not client work.',
  EXPERIMENT: 'Experiment — not client work.',
}

export default function Modal({ p, close }: { p: Project | null; close: () => void }) {
  useEffect(() => {
    if (!p) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && close()
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'; pauseAll()
    return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; repick() }
  }, [p, close])
  return (
    <AnimatePresence>
      {p && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} role="dialog" aria-modal="true" aria-label={p.title}
          className="fixed inset-0 z-[60] overflow-y-auto bg-ink/85 p-3 backdrop-blur-md md:p-8">
          <motion.div initial={{ y: 40, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.96 }} onClick={(e) => e.stopPropagation()}
            className="relative mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] bg-paper shadow-2xl shadow-violet/30 lg:min-h-[60vh] lg:grid-cols-[auto_1fr]">
            <button onClick={close} aria-label="Close" className="glass absolute right-3 top-3 z-10 rounded-full px-4 py-2 text-xs font-bold tracking-widest">CLOSE ✕</button>
            <div className="mx-auto aspect-[9/16] w-full max-w-[min(340px,calc((100svh-1.5rem)*9/16))] bg-ink lg:max-h-[88vh] lg:w-[min(420px,calc(88vh*9/16))] lg:max-w-none"><Media p={p} controls /></div>
            <div className="relative flex flex-col gap-4 overflow-hidden p-6 pt-8 md:p-10">
              <div className="blob -right-16 -top-16 h-56 w-56 bg-violet/40" aria-hidden />
              <div className="relative flex flex-wrap items-center gap-2 pr-24 text-xs font-bold tracking-widest text-violet">{p.category}
                <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] text-white">{p.badge}</span></div>
              <h3 className="h-display relative text-[clamp(2rem,5vw,3rem)]">{p.title}</h3>
              <p className="relative text-ink/75">{p.description}</p>
              <div className="relative mt-2 text-xs font-bold tracking-widest text-ink/50">WHAT WE BUILT</div>
              <ul className="relative space-y-2.5">{p.points.map((t) => <li key={t} className="flex items-center gap-3"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue to-pink text-[10px] text-white" aria-hidden>✓</span>{t}</li>)}</ul>
              <p className="relative text-xs text-ink/50">{note[p.badge]}</p>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="btn-ghost self-start">Watch Full Demo</a>}
              <a href="#contact" onClick={close} className="btn-main relative mt-auto self-start">START A PROJECT →</a>
            </div>
          </motion.div>
        </motion.div>)}
    </AnimatePresence>
  )
}
