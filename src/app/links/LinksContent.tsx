'use client'

import PageTransition from '@/components/PageTransition'
import SocialLinkButton from '@/components/SocialLinkButton'
import { socialLinks } from '@/lib/social-links'

export default function LinksContent() {
  const activeLinks = socialLinks.filter((link) => link.url !== '#')
  const placeholders = socialLinks.filter((link) => link.url === '#')

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="font-mono text-xs text-text-dim tracking-[0.14em] uppercase mb-4">{'// social hub'}</p>
          <h1 className="font-heading text-4xl font-bold text-text tracking-tight mb-4">
            links, handles, and places i lurk
          </h1>
          <p className="text-text-muted text-base">
            this is the intentional link dump. not linktree. just my own corner.
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {activeLinks.map((link, i) => (
            <SocialLinkButton key={link.name} link={link} index={i} />
          ))}
        </div>

        <div className="border border-border bg-bg-raised p-6">
          <p className="font-mono text-xs text-text-dim tracking-[0.12em] uppercase mb-4">room for more</p>
          <ul className="space-y-2 m-0 p-0 list-none">
            {placeholders.map((placeholder) => (
              <li key={placeholder.name} className="flex items-center justify-between border-b border-border pb-2 last:border-b-0 last:pb-0">
                <span className="text-text">{placeholder.name}</span>
                <span className="font-mono text-xs text-text-dim uppercase">coming soon</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageTransition>
  )
}
