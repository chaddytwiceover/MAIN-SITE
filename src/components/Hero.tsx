'use client'

import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

export default function Hero() {
  const skip = useSkipAnimation()

  const animation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: 'easeOut' },
  }

  return (
    <section className="mx-auto flex max-w-[var(--max-width-content)] flex-col justify-center px-6 pb-16 pt-32 md:pt-40">
      <motion.div
        className="w-full relative"
        initial={skip ? false : animation.initial}
        animate={skip ? undefined : animation.animate}
        transition={skip ? undefined : animation.transition}
      >
        <div className="section-num mb-4">01</div>
        <h1 className="font-heading text-[clamp(2.8rem,10vw,7rem)] font-bold leading-none tracking-[-0.04em] text-text">
          chaddytwiceover
        </h1>
        <div className="mt-2 font-mono text-2xl md:text-4xl text-accent-warm strikethrough uppercase tracking-widest">
          twice over
        </div>
        <hr className="mb-6 mt-8 w-full neo-border-accent" />
        <p className="font-mono text-base text-text-muted md:text-lg">
          see the world in my eyes / web development
        </p>
      </motion.div>
    </section>
  )
}
