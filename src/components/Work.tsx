import { projects, type Project } from '../data/projects'
import Featured from './Featured'
import ProjectCard from './ProjectCard'

export default function Work({ onOpen }: { onOpen: (p: Project) => void }) {
  const feat = projects.find((x) => x.type === 'creative' && x.featured)
  const rest = projects.filter((x) => x.type === 'creative' && x !== feat)
  return (
    <section id="work" className="relative overflow-hidden bg-warm py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-bold tracking-widest text-violet">CREATIVE WORK</div>
        <h2 className="h-display mt-3 text-[clamp(2.2rem,8.5vw,5.5rem)]">WE TURN IDEAS<br />INTO <span className="gtext">ATTENTION.</span></h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">AI-powered creative built for products, brands and modern businesses.</p>
        <Featured onOpen={onOpen} />
        {/* Editorial grid: mixed sizes (set `size` in projects.ts), staggered for rhythm */}
        <div className="mt-20 flex flex-wrap items-start justify-center gap-6 lg:gap-8">
          {rest.map((p, i) => <ProjectCard key={p.id} p={p} onOpen={onOpen} className={i % 2 === 1 ? 'lg:mt-16' : ''} />)}
        </div>
      </div>
    </section>
  )
}
