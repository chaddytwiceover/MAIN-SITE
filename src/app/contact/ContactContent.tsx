'use client'

import { socialLinks } from '@/lib/social-links'
import SocialLinkButton from '@/components/SocialLinkButton'
import SectionHeader from '@/components/SectionHeader'
import PageTransition from '@/components/PageTransition'

/**
 * ContactContent — Simple contact page
 *
 * Friendly message with email and social links.
 * No heavy form — just easy ways to reach out.
 */

export default function ContactContent() {
  return (
    <PageTransition className="min-h-screen pt-28 pb-16 px-5">
      <div className="max-w-md mx-auto">
        <SectionHeader
          label="Contact"
          title="Say hi."
          description="Want to say hi, share feedback, or check out what I'm making? You can find me around the internet below."
        />

        {/* Social links */}
        <div className="flex flex-col gap-3">
          {socialLinks
            .filter((link) => ['GitHub', 'X / Twitter', 'Instagram', 'TikTok', 'Email'].includes(link.name))
            .map((link, index) => (
              <SocialLinkButton key={link.name} link={link} index={index} />
            ))}
        </div>

        {/* Friendly note */}
        <p className="text-center text-text-dim text-sm mt-10 leading-relaxed">
          I&apos;m always happy to hear from people — whether it&apos;s feedback,
          questions, resources, or just a friendly hello. No need to be formal.
        </p>
      </div>
    </PageTransition>
  )
}
