export default function About() {
  return (
    <section id="about" className="bg-warm py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <h2 className="h-display text-[clamp(2.4rem,8.5vw,5.5rem)]">SMALL STUDIO.<br /><span className="gtext">BIG SYSTEMS.</span></h2>
        <div>
          <p className="text-xl text-ink/80">Bileksa is an independent AI creative and automation studio building high-quality creative assets and practical AI systems for modern businesses.</p>
          <div className="glass mt-6 rounded-2xl p-5 text-xs font-bold leading-relaxed tracking-widest text-ink/70">
            PORTFOLIO WORK IS LABELLED AS <span className="text-violet">CONCEPT</span> / <span className="text-blue">DEMO</span> / <span className="text-pink">EXPERIMENT</span> UNLESS OTHERWISE STATED.
          </div>
        </div>
      </div>
    </section>
  )
}
