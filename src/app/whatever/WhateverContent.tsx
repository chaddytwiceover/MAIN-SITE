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
      <div className="sheet">
        <SectionHeader
          title="Notes / Whatever"
          description="A running log for ideas, build notes, random updates, and internet brain-noise worth keeping."
        />

        <div className="mt-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="note-row"
              initial={skipAnim ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: skipAnim ? 0 : i * 0.1,
              }}
            >
              <div className="note-meta">{post.date}</div>
              <h2 className="note-title mt-4">{post.title}</h2>
              <div className="mt-3 max-w-prose whitespace-pre-wrap">{post.content}</div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="note-meta">
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
