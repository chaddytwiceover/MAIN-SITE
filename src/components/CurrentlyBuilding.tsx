'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * CurrentlyBuilding — "What I'm working on" section
 *
 * Displays a staggered list of current projects/tasks
 * with accent dot indicators and glass panel styling.
 */

const items = [
  {
    label: 'Improving the Lab',
    note: 'Adding more experiments and polishing existing ones',
  },
  {
    label: 'Building new UI experiments',
    note: 'Exploring animation patterns and interactive components',
  },
  {
    label: 'Writing dev notes',
    note: 'Documenting builds and lessons learned along the way',
  },
  {
    label: 'Exploring new frameworks',
    note: 'Getting deeper into React, Next.js, and TypeScript',
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
    transition: { type: 'spring', bounce: 0.3, duration: 0.6 },
  },
}

export default function CurrentlyBuilding() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="py-20 px-5">
      <div className="max-w-[var(--max-width-content)] mx-auto">
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-3">
          Now
        </span>
        <h2 className="text-text text-2xl sm:text-3xl font-bold mb-8">
          Currently Building
        </h2>

        <motion.div
          className="grid gap-3"
          variants={container}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {items.map((entry) => (
            <motion.div
              key={entry.label}
              className="
                flex items-start gap-4 p-4
                bg-surface backdrop-blur-md border border-border rounded-xl
                transition-colors duration-200 hover:bg-surface-hover
              "
              variants={prefersReduced ? undefined : item}
            >
              {/* Accent dot */}
              <span
                className="flex-shrink-0 w-2.5 h-2.5 mt-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />

              <div>
                <strong className="block text-text text-sm font-semibold mb-0.5">
                  {entry.label}
                </strong>
                <span className="text-text-muted text-sm">
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
