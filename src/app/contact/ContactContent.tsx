'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const EMAIL = 'contact@chaddytwiceover.com'

export default function ContactContent() {
  const skip = useSkipAnimation()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      // Fallback: select text via a temporary input element
      const input = document.createElement('input')
      input.value = EMAIL
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [])

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

        <div className="contact-email-block">
          <a
            href={`mailto:${EMAIL}`}
            className="contact-email-address"
            aria-label={`Send email to ${EMAIL}`}
          >
            {EMAIL}
          </a>
          <div className="contact-email-actions">
            <a href={`mailto:${EMAIL}`} className="cta-button" aria-label="Open in mail app">
              Open Mail
            </a>
            <button
              type="button"
              className="cta-button cta-secondary"
              onClick={handleCopy}
              aria-label="Copy email address"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

