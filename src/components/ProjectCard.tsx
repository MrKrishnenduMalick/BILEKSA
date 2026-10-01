import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Media, Tilt, hoverPlay, repick } from './ui'

/** Card widths: lg / md on desktop; 2-up on tablet; 1-up on mobile. All stay 9:16. */
export const widths = { lg: 'lg:w-[380px]', md: 'lg:w-[270px]' }

/** Semantic card: <article> + real <h3>; a full-size transparent <button> on top opens the modal. */
export default function ProjectCard({ p, onOpen, ai = false, className = '' }: { p: Project; onOpen: (p: Project) => void; ai?: boolean; className?: string }) {
  return (
    <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
      className={`w-full max-w-[360px] sm:w-[calc(50%-12px)] sm:max-w-none ${widths[p.size ?? 'md']} ${className}`}>
      <Tilt max={4}>
        <div onMouseEnter={(e) => hoverPlay(e.currentTarget)} onMouseLeave={repick}
          className={`group relative block aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br p-[2px] shadow-xl ${ai ? 'from-cyan via-blue to-violet shadow-blue/30' : 'from-blue via-violet to-pink shadow-violet/20'}`}>
          <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-ink">
            <div className="h-full transition-transform duration-700 group-hover:scale-[1.04]"><Media p={p} /></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
            <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest">{p.badge}</span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <div className="text-[10px] font-bold tracking-widest text-white/70">{p.category}</div>
              <h3 className="font-display text-2xl font-extrabold leading-tight">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-white/75">{p.description}</p>
              <div className="mt-3 text-xs font-bold tracking-widest transition-transform group-hover:translate-x-1">WATCH PROJECT →</div>
            </div>
          </div>
          <button onClick={() => onOpen(p)} aria-label={`Watch project: ${p.title}`}
            className="absolute inset-0 z-10 rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet" />
        </div>
      </Tilt>
    </motion.article>
  )
}
