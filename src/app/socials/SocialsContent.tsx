'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { socialLinks } from '@/lib/social-links'
import SocialLinkButton from '@/components/SocialLinkButton'
import PageTransition from '@/components/PageTransition'

/**
 * SocialsContent — Linktree-style social links page
 *
 * Centered profile card with stacked link buttons.
 * Designed to look especially good on mobile.
 */

export default function SocialsContent() {
  const prefersReduced = useReducedMotion()

  return (
    <PageTransition className="min-h-screen flex items-center justify-center pt-24 pb-16 px-5">
      <div className="w-full max-w-md mx-auto">
        {/* Profile card */}
        <motion.div
          className="text-center mb-10"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.5 }}
        >
          {/* Avatar placeholder — initials circle */}
          <div
            className="
              w-20 h-20 mx-auto mb-5 rounded-full
              bg-accent/10 border border-accent/20
              flex items-center justify-center
              text-accent text-2xl font-bold
            "
            aria-hidden="true"
          >
            C
          </div>

          <h1 className="text-text text-2xl font-bold mb-2">
            chaddytwiceover
          </h1>
          <p className="text-text-muted text-base m-0 max-w-none">
            Web experiments, hobby projects, and moody internet stuff.
          </p>
        </motion.div>

        {/* Social link buttons */}
        <div className="flex flex-col gap-3">
          {socialLinks.map((link, index) => (
            <SocialLinkButton key={link.name} link={link} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-text-dim text-xs mt-10"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReduced ? 0 : 0.5,
            delay: prefersReduced ? 0 : 0.6,
          }}
        >
          All external links open in new tabs.
        </motion.p>
      </div>
    </PageTransition>
  )
}
