'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

export default function ContactContent() {
  const skip = useSkipAnimation()

  return (
    <section className="page-section" id="contact">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        <Link className="cta-button cta-secondary page-back" href="/">
          ← Back
        </Link>
        <span className="section-label">Contact</span>
        <h1>Say hi.</h1>
        <p>
          If you want to talk web dev, share feedback, or trade resources, feel
          free to reach out.
        </p>

        <ContactForm />

        <nav aria-label="Social links">
          <div className="social-links">
            <a
              href="https://github.com/chaddytwiceover"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <a
              href="mailto:contact@chaddytwiceover.com"
              className="social-link"
            >
              Email
            </a>
            <a
              href="https://lab.chaddytwiceover.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Lab
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </nav>
      </motion.div>
    </section>
  )
}
