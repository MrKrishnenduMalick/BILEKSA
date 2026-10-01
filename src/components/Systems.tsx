import { motion } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'

const nodes = [['IDEA', 'A product or a problem'], ['AI', 'Models + agents'], ['CREATE', 'Ads, video, content'], ['AUTOMATE', 'Workflows that run'], ['ANALYZE', 'See what works'], ['OPTIMIZE', 'Improve, repeat']]
const dot = ['bg-cyan', 'bg-blue', 'bg-violet', 'bg-pink', 'bg-orange', 'bg-lime']

export default function Systems({ onOpen }: { onOpen: (p: Project) => void }) {
  const list = projects.filter((x) => x.type === 'ai').sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  return (
    <section id="ai-systems" className="relative overflow-hidden py-28" style={{ backgroundImage: 'linear-gradient(rgba(59,91,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(59,91,255,.06) 1px,transparent 1px)', backgroundSize: '48px 48px' }}>
      <div className="blob right-0 top-10 h-96 w-96 bg-blue/50" /><div className="blob -left-10 bottom-20 h-80 w-80 bg-cyan/50" style={{ animationDelay: '-6s' }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-xs font-bold tracking-widest text-blue">AI SYSTEMS</div>
        <h2 className="h-display mt-3 text-[clamp(2.1rem,8vw,4.6rem)]">BEYOND CONTENT.<br /><span className="gtext">AI THAT DOES<br className="sm:hidden" /> THE WORK.</span></h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">From creative production to business operations, we design AI systems that connect tools, automate repetitive work and help teams move faster.</p>
        <div className="mt-14 flex flex-wrap items-start justify-center gap-6">
          {list.map((p, i) => <ProjectCard key={p.id} p={p} ai onOpen={onOpen} className={i === 1 ? 'lg:mt-10' : ''} />)}
        </div>
        <div className="mt-24 text-center text-xs font-bold tracking-widest text-ink/50">HOW BILEKSA THINKS</div>
        <div className="relative mt-10">
          <div className="flowline absolute left-6 top-0 bottom-0 w-[3px] lg:left-0 lg:right-0 lg:top-1/2 lg:bottom-auto lg:h-[3px] lg:w-auto" />
          <ol className="relative flex flex-col gap-5 pl-14 lg:flex-row lg:gap-3 lg:pl-0">
            {nodes.map(([n, sub], i) => (
              <motion.li key={n} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass relative flex items-center gap-3 rounded-2xl px-4 py-4 lg:flex-1 lg:flex-col lg:gap-2 lg:py-6 lg:text-center">
                <span className={`absolute -left-[2.35rem] h-4 w-4 rounded-full ${dot[i]} lg:hidden`} />
                <span className={`hidden h-4 w-4 rounded-full ${dot[i]} lg:block`} />
                <span><span className="block text-xs font-bold tracking-widest">{n}</span><span className="mt-0.5 block text-xs text-ink/55">{sub}</span></span>
              </motion.li>))}
          </ol>
        </div>
      </div>
    </section>
  )
}
