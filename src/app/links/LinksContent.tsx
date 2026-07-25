'use client'

import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'
import SocialLinkButton from '@/components/SocialLinkButton'
import { socialLinks } from '@/lib/social-links'

export default function LinksContent() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[var(--max-width-narrow)] px-6 py-20">
        <SectionHeader
          number="03"
          title="Find me elsewhere"
          description="A cleaner personal link hub: socials, sound, code, and whatever platforms get added next."
        />

        <div className="space-y-3">
          {socialLinks.map((link, i) => (
            <SocialLinkButton key={link.name} link={link} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
