'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion']

export default function Hero() {
  const skip = useSkipAnimation()

  return (
    <section id="hero">
      <motion.div
        className="hero-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.8, ease: 'easeOut' }}
      >
        <Image
          src="/favicon.png"
          alt="CHADDYTWICEOVER — tree of code logo"
          width={180}
          height={180}
          className="hero-logo"
          priority
        />
        <p className="hero-label">Design &amp; Development</p>
        <h1>
          Building modern<br />web interfaces.
        </h1>
        <p className="hero-subcopy">
          Front-end developer and web dev student — building with Next.js, React, and TypeScript. Sharing experiments and projects as I learn in public.
        </p>
        <div className="hero-ctas">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/projects" className="cta-button">
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/lab" className="cta-button cta-secondary">
              Explore the Lab
            </Link>
          </motion.div>
        </div>
        <div className="hero-stack">
          {techStack.map((tech) => (
            <span key={tech} className="hero-stack-badge">{tech}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
