import { motion } from 'framer-motion'
import { Tilt } from './ui'

const items = [
  ['AI AD CREATIVES', 'Product ads, campaign visuals and attention-first creative.', 'from-blue to-violet', 'M5 4l14 8-14 8z'],
  ['PRODUCT VIDEOS', 'Cinematic product storytelling for websites, ads and social.', 'from-cyan to-blue', 'M3 7h13v10H3zM16 10l5-3v10l-5-3'],
  ['UGC CREATIVES', 'Creator-style videos designed for modern social feeds.', 'from-pink to-orange', 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0'],
  ['SOCIAL CONTENT', 'Short-form content, reels and visual campaigns.', 'from-violet to-pink', 'M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z'],
  ['AI AGENTS', 'AI systems that handle repetitive business workflows.', 'from-blue to-cyan', 'M12 3a4 4 0 014 4v1h1a3 3 0 013 3v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5a3 3 0 013-3h1V7a4 4 0 014-4z'],
  ['AUTOMATION', 'Connected workflows that save time and reduce manual operations.', 'from-violet to-cyan', 'M4 12h6m4 0h6M10 7v10m4-10v10'],
]
export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-bold tracking-widest text-violet">SERVICES</div>
        <h2 className="h-display mt-3 text-[clamp(2.4rem,8.5vw,5.5rem)]">WHAT WE <span className="gtext">BUILD.</span></h2>
        <p className="mt-4 text-sm font-bold tracking-widest text-ink/60">FROM CREATIVE PRODUCTION TO AI SYSTEMS.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {items.map(([t, d, g, path], i) => (
            <Tilt key={t} className="lg:col-span-2">
              <div className={`group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${g} p-8 text-white shadow-xl transition-shadow hover:shadow-2xl`}>
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/25 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                <motion.svg animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
                  viewBox="0 0 24 24" className="relative h-12 w-12 fill-none stroke-white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={path} /></motion.svg>
                <span className="absolute right-6 top-6 rounded-full border border-white/50 bg-white/15 px-3 py-1 text-[10px] font-bold tracking-widest">{i < 4 ? 'CREATIVE' : 'AI SYSTEMS'}</span>
                <h3 className="relative mt-10 font-display text-2xl font-extrabold">{t}</h3>
                <p className="relative mt-2 max-w-sm text-white/85">{d}</p>
              </div>
            </Tilt>))}
        </div>
      </div>
    </section>
  )
}
