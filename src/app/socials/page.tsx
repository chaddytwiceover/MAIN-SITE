import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Socials',
  description: 'Find chaddytwiceover around the internet.',
}

const socials = [
  { label: 'Twitter / X', handle: '@chaddytwiceover', href: 'https://x.com/chaddytwiceover' },
  { label: 'TikTok', handle: '@chaddytwiceover', href: 'https://www.tiktok.com/@chaddytwiceover' },
  { label: 'Instagram', handle: '@chaddytwiceover', href: 'https://www.instagram.com/chaddytwiceover/' },
  { label: 'GitHub', handle: 'chaddytwiceover', href: 'https://github.com/chaddytwiceover' },
  { label: 'Twitch', handle: 'chaddytwiceover', href: 'https://twitch.tv/chaddytwiceover' },
  { label: 'AllMyLinks', handle: 'chaddytwiceover', href: 'https://allmylinks.com/chaddytwiceover' },
]

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
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 items-center justify-between gap-6 rounded-2xl border border-border bg-bgSoft/35 px-5 py-4 transition hover:border-textDim hover:bg-bgSoft hover:shadow-[0_0_24px_rgba(237,235,230,0.06)]"
          >
            <span>
              <span className="block text-base text-text">{social.label}</span>
              <span className="mt-1 block font-mono text-[11px] text-textFaint">{social.handle}</span>
            </span>
            <span aria-hidden="true" className="font-mono text-sm text-textFaint transition-transform group-hover:translate-x-1">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
