'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Hero — Landing page hero section
 *
 * Introduces the site with a staggered text/button animation.
 * Atmospheric gradient orbs animate slowly in the background.
 */

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[85vh] px-5 pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/[0.04] blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-lavender/[0.04] blur-[100px] animate-float-delayed" />
      </div>

      <motion.div
        className="relative text-center max-w-2xl mx-auto"
        variants={prefersReduced ? undefined : stagger}
        initial={prefersReduced ? false : 'hidden'}
        animate="show"
      >
        {/* Brand name */}
        <motion.p
          className="text-accent text-sm font-medium tracking-widest uppercase mb-6"
          variants={prefersReduced ? undefined : fadeUp}
        >
          chaddytwiceover
        </motion.p>

        {/* Tagline */}
        <motion.h1
          className="text-text text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          variants={prefersReduced ? undefined : fadeUp}
        >
          A moody little corner
          <br />
          <span className="text-text-muted">of the web.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          className="text-text-muted text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          variants={prefersReduced ? undefined : fadeUp}
        >
          Front-end experiments, small projects, links, notes, and digital odds &amp; ends.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={prefersReduced ? undefined : fadeUp}
        >
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.03 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
          >
            <Link
              href="/projects"
              className="
                inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                bg-accent text-bg font-medium text-sm
                hover:bg-accent-hover transition-colors duration-200
                no-underline
              "
            >
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </motion.div>
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.03 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
          >
            <Link
              href="/socials"
              className="
                inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                bg-surface border border-border text-text-muted font-medium text-sm
                hover:bg-surface-hover hover:border-border-hover hover:text-text
                transition-all duration-200 no-underline
              "
            >
              Find Me Online
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
