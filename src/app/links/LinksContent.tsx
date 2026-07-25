'use client'

import PageTransition from '@/components/PageTransition'
import SocialLinkButton from '@/components/SocialLinkButton'
import { socialLinks } from '@/lib/social-links'

export default function LinksContent() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-lg px-6 py-20 flex flex-col items-center">
        {/* Profile Header */}
        <div className="mb-10 text-center flex flex-col items-center w-full">
          <div className="w-28 h-28 neo-border bg-accent text-bg font-heading text-5xl font-bold flex items-center justify-center neo-shadow mb-6">
            CT
          </div>
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-text mb-2">chaddytwiceover</h1>
          <p className="font-mono text-sm font-bold tracking-widest text-text-muted uppercase">home base & links</p>
        </div>

        <div className="w-full space-y-4">
          {socialLinks.map((link, i) => (
            <SocialLinkButton key={link.name} link={link} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
