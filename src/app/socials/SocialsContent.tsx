'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const TwitterXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.86L1.254 2.25H8.08l4.266 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.54V6.78a4.85 4.85 0 0 1-1.07-.09z" />
  </svg>
)

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/chaddytwiceover',
    description: 'Code repositories and open source contributions',
    icon: <GitHubIcon />,
  },
  {
    name: 'Email',
    url: 'mailto:contact@chaddytwiceover.com',
    description: 'Direct email contact',
    icon: <EmailIcon />,
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com/chaddytwiceover',
    description: 'Quick updates and web dev thoughts',
    icon: <TwitterXIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/chaddytwiceover',
    description: 'Photos, reels, and behind-the-scenes',
    icon: <InstagramIcon />,
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@chaddytwiceover',
    description: 'Short-form videos and creative content',
    icon: <TikTokIcon />,
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
        <Link className="cta-button cta-secondary page-back" href="/">
          ← Back
        </Link>
        <span className="section-label">Socials</span>
        <h1>{"Let's connect."}</h1>
        <p>
          Find me across the web — code repos, experiments, and ways to get in
          touch.
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
              <span className="social-icon">
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
            {'// All links open in new tabs except email. Feel free to reach out anytime.'}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
