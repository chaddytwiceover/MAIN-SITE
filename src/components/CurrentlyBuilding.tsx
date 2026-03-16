'use client'

import { motion, useReducedMotion } from 'framer-motion'

const items = [
  { label: 'Improving the Lab', note: 'Adding more experiments and polishing existing ones' },
  { label: 'Building new UI experiments', note: 'Exploring animation patterns and interactive components' },
  { label: 'Writing dev notes', note: 'Documenting builds and lessons learned along the way' },
  { label: 'Exploring 3D portfolio ideas', note: 'Early research into Three.js and interactive scenes' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } },
}

export default function CurrentlyBuilding() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="currently-building-section">
      <div className="section-content">
        <span className="section-label">Now</span>
        <h2>Currently Building</h2>
        <motion.div
          className="building-list"
          variants={container}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {items.map((entry) => (
            <motion.div key={entry.label} className="building-item" variants={item}>
              <span className="building-dot" aria-hidden="true"></span>
              <div className="building-info">
                <strong className="building-label">{entry.label}</strong>
                <span className="building-note">{entry.note}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
