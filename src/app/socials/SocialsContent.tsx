'use client'

import { motion } from 'framer-motion'
import BackButton from '@/components/BackButton'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/chaddytwiceover',
    description: 'Code repositories and open source contributions',
    icon: '◈',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/chaddytwiceover',
    description: 'Quick updates and web dev thoughts',
    icon: '◇',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@chaddytwiceover',
    description: 'Short-form content and project clips',
    icon: '◆',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chaddytwiceover/',
    description: 'Visual updates and behind-the-scenes posts',
    icon: '◉',
  },
  {
    name: 'Email',
    url: 'mailto:contact@chaddytwiceover.com',
    description: 'Direct email contact',
    icon: '◈',
  },
]

export default function SocialsContent() {
  const skip = useSkipAnimation()

  return (
    <section className="page-section" id="socials">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        <BackButton />
        <span className="section-label">Socials</span>
        <h1>{"Let's connect."}</h1>
        <p>
          Find me across the web — all handles are <strong>chaddytwiceover</strong>.
        </p>

        <div className="socials-grid">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="social-card"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={
                link.url.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              initial={skip ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: skip ? 0 : 0.4,
                delay: skip ? 0 : index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={skip ? {} : { scale: 1.02, y: -4 }}
              whileTap={skip ? {} : { scale: 0.98 }}
            >
              <span className="social-icon" aria-hidden="true">
                {link.icon}
              </span>
              <h2 className="social-name">{link.name}</h2>
              <p className="social-description">{link.description}</p>
              {link.url.startsWith('http') && (
                <span className="sr-only">(opens in new tab)</span>
              )}
            </motion.a>
          ))}
        </div>

        <div className="socials-note">
          <p>
            {'// All links open in new tabs. Feel free to reach out anytime.'}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
