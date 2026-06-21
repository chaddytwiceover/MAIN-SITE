'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import SkillTag from '@/components/SkillTag'
import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'

/**
 * AboutContent — Personal about page
 *
 * Casual, personal tone. Shows intro, skills, what I'm learning,
 * fun facts, and links to other parts of the site.
 */

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Responsive Design',
  'Accessibility',
  'Git',
  'Figma',
  'SVG',
]

const learningItems = [
  'JavaScript DOM patterns & event-driven architecture',
  'React component patterns & state management',
  'CSS custom properties & design tokens',
  'Web accessibility (WCAG 2.2)',
  'TypeScript for safer, cleaner code',
]

const funFacts = [
  '☁️ Based in South Florida — sunshine outside, dark mode inside',
  '🎧 Passionate about Hip Hop, Politics, and Tech',
  '🌙 Night owl developer — best code comes after midnight',
  '🎨 Big on moody aesthetics and atmospheric design',
]

export default function AboutContent() {
  const prefersReduced = useReducedMotion()

  return (
    <PageTransition className="min-h-screen pt-28 pb-16 px-5">
      <div className="max-w-[var(--max-width-narrow)] mx-auto">
        <SectionHeader
          label="About"
          title="Learning in public."
        />

        {/* Intro */}
        <div className="space-y-4 mb-12">
          <p className="text-text-muted text-base leading-relaxed">
            Hey, I&apos;m Chris — I&apos;m learning web development and building a
            personal corner of the internet under the name{' '}
            <strong className="text-text">chaddytwiceover</strong>. This site is
            where I collect projects, experiments, links, and whatever else
            I&apos;m messing with.
          </p>
          <p className="text-text-muted text-base leading-relaxed">
            Right now I&apos;m focused on front-end fundamentals: semantic HTML,
            responsive CSS, JavaScript interactions, accessibility, and cleaner
            visual hierarchy. This portfolio is less about polished perfection and
            more about showing steady improvement over time.
          </p>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Skills & Tools
          </span>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Skills">
            {skills.map((skill, i) => (
              <SkillTag key={skill} skill={skill} index={i} />
            ))}
          </div>
        </section>

        {/* Currently Learning */}
        <section className="mb-12">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Currently Learning
          </span>
          <ul className="space-y-3 list-none p-0 m-0">
            {learningItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-text-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Fun facts */}
        <section className="mb-12">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-lavender mb-4">
            Fun Facts
          </span>
          <motion.div
            className="grid gap-3"
            initial={prefersReduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.5 }}
          >
            {funFacts.map((fact) => (
              <div
                key={fact}
                className="p-4 bg-surface border border-border rounded-xl text-text-muted text-sm"
              >
                {fact}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Links to other sections */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="
              px-5 py-2.5 text-sm font-medium rounded-xl
              bg-accent/10 text-accent hover:bg-accent/20
              transition-colors duration-200 no-underline
            "
          >
            View my projects →
          </Link>
          <Link
            href="/socials"
            className="
              px-5 py-2.5 text-sm font-medium rounded-xl
              bg-surface border border-border text-text-muted
              hover:text-text hover:border-border-hover
              transition-colors duration-200 no-underline
            "
          >
            Find me online →
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}
