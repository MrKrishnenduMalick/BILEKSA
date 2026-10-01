import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [['Work', '#work'], ['Services', '#services'], ['AI Systems', '#ai-systems'], ['About', '#about'], ['Contact', '#contact']]

export default function Nav() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/70 px-5 py-3 backdrop-blur-xl transition-all ${solid ? 'bg-white/85 shadow-lg' : 'bg-white/40'}`}>
        <a href="#top" aria-label="BILEKSA home" className="flex items-center gap-2"><img src="/logo-mark.png" alt="" className="h-9 w-auto" /><img src="/logo-letters.png" alt="BILEKSA" className="h-5 w-auto" /></a>
        <div className="hidden gap-4 text-xs font-bold uppercase tracking-widest lg:gap-7 md:flex">{links.map(([n, h]) => <a key={n} href={h} className="hover:text-violet">{n}</a>)}</div>
        <a href="#contact" className="btn-main !px-5 !py-2.5 hidden md:inline-flex">START A PROJECT →</a>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden p-2">
          <span className="block h-0.5 w-6 bg-ink mb-1.5" /><span className="block h-0.5 w-6 bg-ink" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass absolute top-16 w-[calc(100%-2rem)] rounded-3xl p-6 md:hidden">
            {links.map(([n, h], i) => (
              <motion.a key={n} href={h} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                className="block py-2.5 font-display text-3xl font-extrabold uppercase">{n}</motion.a>))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-main mt-4 w-full">START A PROJECT →</a>
          </motion.div>)}
      </AnimatePresence>
    </header>
  )
}
