'use client'

import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'
import Button from '@/components/Button'

export default function Hero() {
  const skip = useSkipAnimation()

  const animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="flex flex-col items-center justify-center max-w-[var(--max-width-content)] mx-auto px-6 py-32 md:py-40">
      <motion.div 
        className="w-full text-center"
        initial={skip ? false : animation.initial}
        animate={skip ? undefined : animation.animate}
        transition={skip ? undefined : animation.transition}
      >
        <h1 className="font-heading text-text text-[clamp(3rem,10vw,7rem)] font-bold tracking-[-0.04em] leading-none">
          chaddytwiceover
        </h1>
        
        <hr className="border-t border-border w-full mt-6 mb-8" />
        
        <p className="font-mono text-text-dim text-xs tracking-widest uppercase mb-12">
          {'// personal lab'}
        </p>
        
        <div className="flex flex-row items-center justify-center gap-4">
          <Button href="/lab" variant="primary">
            Lab
          </Button>
          <Button href="/links" variant="secondary">
            Links
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
