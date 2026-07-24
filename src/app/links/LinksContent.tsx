'use client'

import PageTransition from '@/components/PageTransition'
import SocialLinkButton from '@/components/SocialLinkButton'
import { socialLinks } from '@/lib/social-links'

export default function LinksContent() {
  return (
    <PageTransition>
      <div className="max-w-md mx-auto px-6 py-20">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-text tracking-tight">
            chaddytwiceover
          </h1>
          <div className="border-t border-border mt-4 mb-8 w-16" />
          <p className="font-mono text-xs text-text-dim tracking-widest uppercase">
            {'// links'}
          </p>
        </div>

        <div className="space-y-3">
          {socialLinks.map((link, i) => (
            <SocialLinkButton key={link.name} link={link} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
