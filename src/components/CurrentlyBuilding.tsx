'use client'

import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const items = [
  {
    label: 'tinkering with the lab',
    note: 'adding new experiments',
  },
  {
    label: 'building random UI things',
    note: 'because why not',
  },
  {
    label: 'writing whatever comes to mind',
    note: 'notes, thoughts, etc',
  },
  {
    label: 'exploring new frameworks',
    note: 'always learning',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function CurrentlyBuilding() {
  const skip = useSkipAnimation()

  return (
    <section className="py-20 px-6 max-w-[var(--max-width-content)] mx-auto">
      <div className="border border-border p-6 bg-bg-raised">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-8">
          {'// currently'}
        </div>

        <motion.div
          className="flex flex-col"
          variants={skip ? undefined : container}
          initial={skip ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {items.map((entry, idx) => (
            <motion.div
              key={idx}
              className="
                flex items-start gap-4 py-4
                border-b border-border last:border-b-0 last:pb-0
              "
              variants={skip ? undefined : item}
            >
              <span
                className="text-accent font-mono font-bold mt-0.5"
                aria-hidden="true"
              >
                -
              </span>

              <div>
                <strong className="block text-text font-bold mb-0.5 font-sans">
                  {entry.label}
                </strong>
                <span className="text-text-muted text-sm font-sans">
                  {entry.note}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
