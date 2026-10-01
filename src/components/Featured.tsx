import { motion } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import { Media, Magnetic } from './ui'

/** Featured creative project — first `featured: true` creative item in projects.ts. */
export default function Featured({ onOpen }: { onOpen: (p: Project) => void }) {
  const p = projects.find((x) => x.type === 'creative' && x.featured) ?? projects[0]
  const info = [['FORMAT', '9:16', '-right-3 top-[14%] md:-right-12'], ['STYLE', 'CINEMATIC', '-left-3 top-[48%] md:-left-12'], ['TYPE', p.category, '-right-3 bottom-[10%] md:-right-10']]
  return (
    <div className="relative mt-14 grid items-center gap-12 overflow-visible lg:grid-cols-2">
      <div className="blob left-10 top-0 h-80 w-80 bg-violet/60" /><div className="blob bottom-0 right-10 h-72 w-72 bg-cyan/60" style={{ animationDelay: '-6s' }} />
      <button onClick={() => onOpen(p)} aria-label={`Watch ${p.title}`} className="relative mx-auto w-full max-w-[340px] text-left lg:max-w-[380px]">
        <div className="aspect-[9/16] overflow-hidden rounded-[2rem] border-4 border-white bg-ink shadow-2xl shadow-violet/30"><Media p={p} /></div>
        {info.map(([k, v, pos], i) => (
          <motion.div key={k} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 + i, ease: 'easeInOut' }} className={`glass absolute ${pos} rounded-2xl px-4 py-3`}>
            <div className="text-[10px] font-bold tracking-widest text-ink/50">{k}</div><div className="font-display font-extrabold">{v}</div></motion.div>))}
      </button>
      <div className="relative">
        <div className="text-xs font-bold tracking-widest text-violet">FEATURED PROJECT · {p.badge}</div>
        <h3 className="h-display mt-3 text-[clamp(2.2rem,5vw,4rem)]">{p.title}</h3>
        <p className="mt-4 max-w-md text-lg text-ink/70">{p.description}</p>
        <ul className="mt-5 space-y-2">{p.points.map((t) => <li key={t} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-blue to-pink" />{t}</li>)}</ul>
        <div className="mt-8"><Magnetic><button onClick={() => onOpen(p)} className="btn-main">WATCH PROJECT →</button></Magnetic></div>
      </div>
    </div>
  )
}
