/**
 * ✏️ PORTFOLIO DATA — the ONLY file you edit to add work.
 * 1. Drop name.mp4 (+ name.jpg poster) into /public/portfolio/
 * 2. Add one object below. 3. Build & deploy.
 * type: 'creative' → "Work" gallery.  type: 'ai' → "AI Systems" section.
 * featured: true → large card at the top of its section (first one per type wins).
 * size: 'lg' | 'md' → card width in the gallery. All media is 9:16.
 */
export type Badge = 'CONCEPT' | 'DEMO' | 'EXPERIMENT'
export type Project = {
  id: string
  title: string
  category: string
  badge: Badge
  description: string
  video: string
  poster: string
  type: 'creative' | 'ai'
  featured?: boolean
  size?: 'lg' | 'md'
  points: string[]   // modal: "What we built"
  link?: string
}
const v = (n: string) => ({ video: `/portfolio/${n}.mp4`, poster: `/portfolio/${n}.jpg` })

export const projects: Project[] = [
  // ───── CREATIVE WORK ─────
  { id: 'luxury-product-ad', title: 'Luxury Product Ad', category: 'AI AD', badge: 'CONCEPT', type: 'creative', featured: true, ...v('luxury-product-ad'),
    description: 'Cinematic AI-generated product advertising designed to turn a product into a premium visual experience.',
    points: ['AI video generation', 'Cinematic product storytelling', 'Premium visual direction', 'Short-form advertising'] },
  { id: 'sneaker', title: 'Float Above Ordinary', category: 'PRODUCT AD', badge: 'CONCEPT', type: 'creative', size: 'md', ...v('sneaker'),
    description: 'A cinematic sneaker concept built for attention-first product storytelling.',
    points: ['AI-generated product visuals', 'Attention-first motion', 'Vertical ad format'] },
  { id: 'skincare', title: 'Night Reset', category: 'PRODUCT VIDEO', badge: 'CONCEPT', type: 'creative', size: 'lg', ...v('skincare'),
    description: 'A premium skincare visual focused on product detail, lifestyle and atmosphere.',
    points: ['Product film', 'Lifestyle storytelling', 'Premium visual direction'] },
  { id: 'beverage', title: 'Strawberry Lime', category: 'PRODUCT VIDEO', badge: 'CONCEPT', type: 'creative', size: 'lg', ...v('beverage'),
    description: 'A cinematic product film built around color, motion and appetite appeal.',
    points: ['Product storytelling', 'Motion-led visuals', 'Social-first format'] },
  { id: 'watch', title: 'Time Defines You', category: 'CINEMATIC AD', badge: 'CONCEPT', type: 'creative', size: 'md', ...v('watch'),
    description: 'A cinematic luxury watch campaign built around atmosphere, detail and aspiration.',
    points: ['Macro product detail', 'Cinematic lighting', 'Premium storytelling'] },
  { id: 'food-reel', title: "One Bite. You'll Know.", category: 'SOCIAL REEL', badge: 'CONCEPT', type: 'creative', size: 'md', ...v('food-reel'),
    description: 'Short-form food storytelling designed to stop the scroll and create appetite.',
    points: ['Scroll-stopping hook', 'Short-form storytelling', 'Reels-ready format'] },
  { id: 'ugc-bags', title: 'Carry Your Story', category: 'UGC CREATIVE', badge: 'DEMO', type: 'creative', size: 'md', ...v('ugc-bags'),
    description: 'Lifestyle-first UGC designed to make a product feel natural, desirable and social.',
    points: ['Creator-style storytelling', 'Lifestyle framing', 'Social-first creative'] },
  { id: 'ugc-skincare', title: 'Skincare UGC', category: 'UGC CREATIVE', badge: 'DEMO', type: 'creative', size: 'md', ...v('ugc-skincare'),
    description: 'Authentic creator-style content designed to feel native to modern social feeds.',
    points: ['Creator-style content', 'Product demonstration', 'Feed-native storytelling'] },

  // ───── AI SYSTEMS ─────
  { id: 'ai-agency', title: 'Your AI Growth Team', category: 'AI AGENCY', badge: 'CONCEPT', type: 'ai', featured: true, size: 'lg', ...v('ai-agency'),
    description: 'A concept for an AI-powered digital agency where specialized AI systems work together across creative, content, SEO, automation and analytics.',
    points: ['AI creative production', 'Content workflows', 'SEO systems', 'Automation', 'Analytics'] },
  { id: 'ai-agent', title: 'AI That Does the Work', category: 'AI AGENT', badge: 'DEMO', type: 'ai', size: 'md', ...v('ai-agent'),
    description: 'An AI agent concept designed to automate repetitive business operations across connected systems.',
    points: ['AI task handling', 'Connected business systems', 'Automated workflows', 'Business operations'] },
  { id: 'ai-workflow', title: 'AI Business Workflow', category: 'AI AUTOMATION', badge: 'DEMO', type: 'ai', size: 'md', ...v('ai-workflow'),
    description: 'Connected AI workflows for lead qualification, follow-ups, CRM updates and repetitive business operations.',
    points: ['Lead qualification', 'Automated follow-ups', 'CRM updates', 'Workflow automation'] },
]
