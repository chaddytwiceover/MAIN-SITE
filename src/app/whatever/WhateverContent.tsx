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
      <div className="max-w-[var(--max-width-narrow)] mx-auto px-6 py-20">
        <SectionHeader 
          label="// whatever" 
          title="Whatever" 
          description="notes, thoughts, and random stuff." 
        />

        <div className="mt-12">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              className="border-b border-border py-8 last:border-b-0"
              initial={skipAnim ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: skipAnim ? 0 : i * 0.1,
              }}
            >
              <div className="font-mono text-xs text-text-dim tracking-wider">
                {post.date}
              </div>
              <h2 className="font-heading text-xl font-semibold text-text mt-2 mb-3">
                {post.title}
              </h2>
              <div className="text-text-muted leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs text-text-dim border border-border px-2 py-1">
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
