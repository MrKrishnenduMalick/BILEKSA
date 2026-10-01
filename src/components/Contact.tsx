import { site } from '../config'
import { Magnetic } from './ui'

export default function Contact() {
  const b = [['START A PROJECT →', `mailto:${site.email}?subject=New%20project%20with%20BILEKSA`, 'bg-white text-ink'], ['WHATSAPP', site.whatsapp, 'bg-white/20 text-white border border-white/50'], ['LINKEDIN', site.linkedin, 'bg-white/20 text-white border border-white/50']]
  return (
    <section id="contact" className="px-4 pb-6 pt-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue via-violet to-pink px-6 py-24 text-center text-white md:py-32">
        <div className="blob -left-10 -top-10 h-80 w-80 bg-cyan" /><div className="blob -bottom-10 right-0 h-80 w-80 bg-orange" style={{ animationDelay: '-7s' }} />
        <h2 className="h-display relative text-[clamp(1.9rem,7vw,5.2rem)]">HAVE A PRODUCT?<br />AN IDEA?<br />A BUSINESS TO AUTOMATE?</h2>
        <p className="relative mx-auto mt-6 max-w-md text-lg text-white/90">Tell us what you're trying to build.<br />We'll figure out where AI can help.</p>
        <div className="relative mx-auto mt-10 flex max-w-xs flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row">
          {b.map(([t, h, c]) => <Magnetic key={t} className="w-full sm:w-auto"><a href={h} target={h.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className={`btn w-full sm:w-auto ${c}`}>{t}</a></Magnetic>)}
        </div>
      </div>
    </section>
  )
}
