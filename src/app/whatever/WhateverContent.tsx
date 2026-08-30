'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'
import { posts } from '@/lib/posts'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

export default function WhateverContent() {
  const skipAnim = useSkipAnimation()

  return (
    <PageTransition>
      <div className="mx-auto max-w-[var(--max-width-narrow)] px-6 py-20">
        <SectionHeader
          number="02"
          title="Notes / Whatever"
          description="A running log for ideas, build notes, random updates, and internet brain-noise worth keeping."
        />

        <div className="mt-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="neo-border border-x-0 border-t-0 py-12 last:border-b-0"
              initial={skipAnim ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: skipAnim ? 0 : i * 0.1,
              }}
            >
              <div className="inline-block neo-border border-x-0 border-t-0 px-1 py-1 font-mono text-[10px] font-bold tracking-widest text-accent mb-2">{post.date}</div>
              <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-text">{post.title}</h2>
              <div className="mt-3 whitespace-pre-wrap text-text-muted">{post.content}</div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="neo-border px-2 py-1 font-mono text-xs font-bold text-text-dim">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
