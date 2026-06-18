'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const trustItems = ['Simple process', 'Clear communication', 'Beginner-friendly rates']

export default function HomeCTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="home-cta-section">
      <motion.div
        className="section-content"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
      >
        <h2>Ready to start something?</h2>
        <p>
          I&apos;m available for small web projects — simple, modern sites for small businesses and creators.
        </p>
        <div className="home-cta-buttons">
          <Link href="/pricing" className="cta-button">
            View Pricing
          </Link>
          <Link href="/contact" className="cta-button cta-secondary">
            Get in Touch
          </Link>
        </div>
        <div className="home-cta-trust">
          {trustItems.map((trust) => (
            <span key={trust} className="home-cta-trust-item">{trust}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
