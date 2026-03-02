'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SkillTag from '@/components/SkillTag'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Responsive Design',
  'Accessibility',
  'SVG',
  'Git',
  'CLI Tools',
  'Design Systems',
  'Figma',
]

const learningItems = [
  'JavaScript DOM patterns & event-driven architecture',
  'CSS custom properties & design tokens',
  'Web accessibility (WCAG 2.2)',
  'Performance optimization & Core Web Vitals',
  'Version control workflows with Git',
]

export default function AboutContent() {
  const skip = useSkipAnimation()

  return (
    <section className="page-section">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        <Link className="cta-button cta-secondary page-back" href="/">
          ← Back
        </Link>
        <span className="section-label">About</span>
        <h1>Learning in public.</h1>
        <p>
          I&apos;m currently studying web development and using this site to
          document progress through real experiments and builds.
        </p>
        <p>
          I&apos;m based in South Florida, and I&apos;m especially passionate
          about Hip Hop, Politics, and Tech.
        </p>
        <p>
          Right now I&apos;m focused on front-end fundamentals: semantic HTML,
          responsive CSS, JavaScript interactions, accessibility, and cleaner
          visual hierarchy. This portfolio is less about polished perfection and
          more about showing steady improvement over time.
        </p>

        <span className="section-label section-label--gap">Skills</span>
        <div className="skills-grid" role="list" aria-label="Skills">
          {skills.map((skill, i) => (
            <SkillTag key={skill} skill={skill} index={i} />
          ))}
        </div>

        <span className="section-label section-label--gap">
          Currently Learning
        </span>
        <ul className="learning-list">
          {learningItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
