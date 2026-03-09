import type { Metadata } from 'next'
import BlogContent from './BlogContent'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Build logs, project breakdowns, design and dev notes, and lessons learned — by CHADDYTWICEOVER.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return <BlogContent />
}
