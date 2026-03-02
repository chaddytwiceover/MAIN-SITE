'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

export default function Hero() {
  const skip = useSkipAnimation()

  return (
    <section id="hero">
      <motion.div
        className="hero-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.6, ease: 'easeOut' }}
      >
        <p className="hero-label">Design &amp; Development</p>
        <h1 className="glitch" data-text="A space to build, test, and learn.">
          A space to build,<br />test, and learn.
        </h1>
        <p className="hero-subcopy">
          I&apos;m a web dev student sharing experiments, concepts, and projects
          as I keep improving my craft.
        </p>
        <div className="hero-ctas">
          {([
            { href: '/projects', label: 'View Work', className: 'cta-button' },
            { href: '/contact', label: 'Contact', className: 'cta-button cta-secondary' },
          ] as const).map(({ href, label, className }) => (
            <motion.div key={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
              <Link href={href} className={className}>
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
