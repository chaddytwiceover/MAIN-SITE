'use client'

import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'
import Button from '@/components/Button'

export default function Hero() {
  const skip = useSkipAnimation()

  const animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55 },
  }

  return (
    <section className="mx-auto flex max-w-[var(--max-width-content)] flex-col justify-center px-6 pb-16 pt-32 md:pt-40">
      <motion.div
        className="w-full"
        initial={skip ? false : animation.initial}
        animate={skip ? undefined : animation.animate}
        transition={skip ? undefined : animation.transition}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">// personal playground</p>
        <h1 className="font-heading text-[clamp(2.8rem,10vw,7rem)] font-bold leading-none tracking-[-0.04em] text-text">
          chaddytwiceover
        </h1>
        <hr className="mb-6 mt-6 w-full border-t border-border" />
        <p className="mb-10 max-w-2xl text-base text-text-muted md:text-lg">
          front-end experiments, digital doodads, and whatever else ends up here.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button href="/lab" variant="primary">
            enter lab
          </Button>
          <Button href="/links" variant="secondary">
            social links
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
