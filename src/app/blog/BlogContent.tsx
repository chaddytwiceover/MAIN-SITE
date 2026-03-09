'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import BackButton from '@/components/BackButton'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const upcomingTopics = [
  { title: 'Building Tic Tac Toe with minimax AI', tag: 'Build Log' },
  { title: 'What I learned making a pixel art editor', tag: 'Project Breakdown' },
  { title: 'Animating with Framer Motion — notes from the field', tag: 'Dev Notes' },
  { title: 'Lessons from my first freelance inquiry', tag: 'Learning in Public' },
]

export default function BlogContent() {
  const skip = useSkipAnimation()

  return (
    <section className="page-section" id="blog">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        <BackButton />
        <span className="section-label">Blog</span>
        <h1>Notes, logs, and lessons.</h1>
        <p>
          A future home for build logs, project breakdowns, design and dev notes,
          and honest write-ups about learning in public.
        </p>
        <p>
          No posts yet — but they&apos;re coming. This is the placeholder that keeps
          the structure in place while the content catches up.
        </p>

        <div className="blog-coming-soon">
          <span className="section-label section-label--gap">Coming Soon</span>
          <h2>Topics I&apos;m planning to cover</h2>
          <div className="blog-topics-grid">
            {upcomingTopics.map((topic) => (
              <div key={topic.title} className="blog-topic-card">
                <span className="blog-topic-tag">{topic.tag}</span>
                <p className="blog-topic-title">{topic.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-cta">
          <p>In the meantime, explore the lab or check out the projects.</p>
          <div className="hero-ctas" style={{ marginTop: '1.5rem', justifyContent: 'flex-start' }}>
            <Link href="/lab" className="cta-button cta-secondary">Explore the Lab</Link>
            <Link href="/projects" className="cta-button cta-secondary">View Projects</Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
