import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Socials',
  description: 'Find chaddytwiceover around the internet.',
}

type SocialIconName = 'tiktok' | 'instagram' | 'x' | 'github' | 'email'

const socials: { label: string; handle: string; href: string; icon: SocialIconName }[] = [
  { label: 'TikTok', handle: '@chaddytwiceover', href: 'https://www.tiktok.com/@chaddytwiceover', icon: 'tiktok' },
  { label: 'Instagram', handle: '@chaddytwiceover', href: 'https://www.instagram.com/chaddytwiceover/', icon: 'instagram' },
  { label: 'Twitter / X', handle: '@chaddytwiceover', href: 'https://x.com/chaddytwiceover', icon: 'x' },
  { label: 'GitHub', handle: 'chaddytwiceover', href: 'https://github.com/chaddytwiceover', icon: 'github' },
  { label: 'Email', handle: 'contact@chaddytwiceover.com', href: 'mailto:contact@chaddytwiceover.com', icon: 'email' },
]

function SocialIcon({ name }: { name: SocialIconName }) {
  const base = 'h-6 w-6 text-textDim transition-colors duration-200 group-hover:text-neon'
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.7" cy="6.4" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === 'email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    )
  }
  const paths: Record<Exclude<SocialIconName, 'instagram' | 'email'>, string> = {
    tiktok: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.59 3.17-5.91 3.21-1.42.08-2.84-.31-4.05-1.03-2-1.19-3.42-3.35-3.63-5.68-.02-.5-.03-1-.01-1.49.18-1.89 1.11-3.7 2.55-4.93 1.64-1.43 3.94-2.11 6.09-1.81.02 1.49-.04 2.98-.04 4.47-.98-.32-2.13-.23-2.99.37-.62.42-1.09 1.06-1.33 1.77-.2.5-.14 1.07-.13 1.6.24 1.63 1.81 3 3.47 2.85 1.1-.01 2.16-.65 2.73-1.59.19-.33.4-.67.41-1.06.1-1.79.06-3.58.07-5.37.01-4.03-.01-8.05.02-12.07z',
    x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.93zm-1.29 19.49h2.039L6.486 3.24H4.298z',
    github: 'M12 .297a12 12 0 0 0-3.793 23.386c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.624-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297z',
  }
  return <svg viewBox="0 0 24 24" fill="currentColor" className={base} aria-hidden="true"><path d={paths[name]} /></svg>
}

export default function SocialsPage() {
  return (
    <div className="mx-auto w-full max-w-[900px] px-6 py-16 md:px-12 md:py-24">
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">around the internet</p>
        <h1 className="mt-3 font-serif text-5xl lowercase tracking-[-0.02em] text-text md:text-7xl">socials</h1>
        <p className="mt-4 max-w-[52ch] text-textDim">Different corners, same chaddytwiceover.</p>
      </header>

      <div className="mt-10 grid gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.icon === 'email' ? undefined : '_blank'}
            rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
            className="group flex min-h-[88px] items-center justify-between gap-4 rounded-2xl border border-border/80 bg-bgSoft/60 px-4 py-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/40 hover:bg-bgSoft hover:shadow-[0_0_24px_rgba(122,255,210,0.08)] sm:gap-6 sm:px-5"
          >
            <span className="flex min-w-0 items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] transition-colors duration-200 group-hover:border-neon/30 group-hover:bg-neon/[0.07]">
                <SocialIcon name={social.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-base text-text transition-colors group-hover:text-neon">{social.label}</span>
                <span className="mt-1 block break-all font-mono text-[11px] text-textFaint sm:break-normal">{social.handle}</span>
              </span>
            </span>
            <span aria-hidden="true" className="shrink-0 font-mono text-sm text-textFaint transition-transform group-hover:translate-x-1 group-hover:text-neon">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
