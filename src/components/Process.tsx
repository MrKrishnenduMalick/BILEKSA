import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const steps = [['DISCOVER', 'Understand the product, audience and objective.'], ['CONCEPT', 'Develop the creative or system direction.'], ['BUILD', 'Create the video, creative or AI workflow.'],
  ['REFINE', 'Improve based on feedback.'], ['DELIVER', 'Ship the production-ready asset or system.']]
const dot = ['bg-blue', 'bg-violet', 'bg-pink', 'bg-orange', 'bg-cyan']

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const w = useSpring(scrollYProgress, { stiffness: 90, damping: 20 })
  return (
    <section id="process" className="bg-warm py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="h-display text-[clamp(2rem,7vw,5rem)]">IDEA → <span className="gtext">SYSTEM</span> → IMPACT</h2>
        <div ref={ref} className="relative mt-16">
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-ink/10 lg:left-0 lg:right-0 lg:top-5 lg:bottom-auto lg:h-[3px] lg:w-auto">
            <motion.div style={{ scaleX: w, scaleY: w }} className="h-full w-full origin-top bg-gradient-to-b from-blue via-pink to-cyan lg:origin-left lg:bg-gradient-to-r" />
          </div>
          <ol className="relative grid gap-10 lg:grid-cols-5">
            {steps.map(([t, d], i) => (
              <motion.li key={t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * 0.08 }} className="pl-14 lg:pl-0 lg:pt-14 relative">
                <span className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full ${dot[i]} font-display font-extrabold text-white shadow-lg`}>{i + 1}</span>
                <h3 className="font-display text-2xl font-extrabold">{t}</h3><p className="mt-2 text-ink/70">{d}</p>
              </motion.li>))}
          </ol>
        </div>
      </div>
    </section>
  )
}
