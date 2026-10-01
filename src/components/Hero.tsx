import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Magnetic, Media } from './ui'
import { projects } from '../data/projects'

const Hero3D = lazy(() => import('./Hero3D'))
const chips = [['AI ADS', 'top-[6%] left-[0%] lg:left-[2%]', 'from-blue to-violet'], ['PRODUCT VIDEO', 'top-[20%] right-[0%]', 'from-cyan to-blue'],
  ['UGC', 'top-[52%] left-[0%] lg:left-[-2%]', 'from-pink to-orange'], ['AI AGENTS', 'bottom-[18%] right-[0%] lg:right-[2%]', 'from-violet to-pink'],
  ['AUTOMATION', 'bottom-[4%] left-[4%]', 'from-orange to-pink']]

export default function Hero() {
  const hero = projects.find((x) => x.id === 'watch') ?? projects[0]
  const [use3D, setUse3D] = useState(false)
  useEffect(() => { setUse3D(matchMedia('(min-width:1024px)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) }, [])
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="blob -top-20 -left-20 h-96 w-96 bg-cyan" /><div className="blob top-40 right-0 h-[28rem] w-[28rem] bg-pink/80" style={{ animationDelay: '-5s' }} />
      <div className="blob bottom-0 left-1/3 h-80 w-80 bg-orange/70" style={{ animationDelay: '-9s' }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="h-display text-[clamp(2.2rem,9.5vw,3.4rem)] sm:text-[clamp(2.6rem,6vw,5rem)]">WE MAKE BRANDS<br /><span className="gtext">IMPOSSIBLE<br />TO IGNORE.</span></motion.h1>
          <p className="mt-6 max-w-lg text-lg text-ink/70">AI-powered creative, content &amp; automation for modern businesses.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic><a href="#work" className="btn-main">EXPLORE OUR WORK →</a></Magnetic>
            <Magnetic><a href="#contact" className="btn-ghost">START A PROJECT →</a></Magnetic>
          </div>
        </div>
        <div className="relative h-[420px] lg:h-[620px]">
          <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-70 blur-sm" aria-hidden style={{ display: use3D ? 'none' : 'block' }} />
          {use3D && <Suspense fallback={null}><Hero3D /></Suspense>}
          <div className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 sm:w-52 lg:w-60">
            <motion.div animate={{ y: [0, -10, 0], rotate: -4 }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} className="aspect-[9/16] overflow-hidden rounded-[1.75rem] border-4 border-white bg-ink shadow-2xl shadow-violet/40"><Media p={hero} /></motion.div>
          </div>
          {chips.map(([t, pos, g], i) => (
            <motion.div key={t} animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5 + i, ease: 'easeInOut', delay: i * 0.4 }}
              className={`glass absolute ${pos} flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold tracking-widest`}>
              <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${g}`} />{t}</motion.div>))}
        </div>
      </div>
    </section>
  )
}
