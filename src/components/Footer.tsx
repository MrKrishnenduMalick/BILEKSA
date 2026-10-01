import { site } from '../config'

export default function Footer() {
  const l = [['Email', `mailto:${site.email}`], ['WhatsApp', site.whatsapp], ['LinkedIn', site.linkedin], ['Instagram', site.instagram]]
  return (
    <footer className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div><img src="/logo-full.png" alt="BILEKSA — AI Creative & Automation Studio" loading="lazy" className="h-24 w-auto" />
          <div className="mt-4 flex flex-wrap gap-x-4 text-xs font-bold tracking-widest text-ink/40">{['AI ADS', 'PRODUCT VIDEO', 'UGC', 'AI AGENTS', 'AUTOMATION'].map((t) => <span key={t}>{t}</span>)}</div></div>
        <nav className="flex flex-wrap gap-6 text-sm font-medium">{l.map(([n, h]) => <a key={n} href={h} className="hover:text-violet" target={n === 'Email' ? undefined : '_blank'} rel="noreferrer">{n}</a>)}</nav>
      </div>
      <div className="mt-10 text-xs text-ink/40">© {new Date().getFullYear()} BILEKSA — AI Creative & Automation Studio</div>
    </footer>
  )
}
