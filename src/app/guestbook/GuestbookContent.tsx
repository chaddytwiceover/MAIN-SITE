'use client'

import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'

export default function GuestbookContent() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[var(--max-width-narrow)] px-6 py-20">
        <SectionHeader
          number="04"
          title="Say hi"
          description="Guestbook is intentionally lightweight for now. Drop a message by email and I’ll collect highlights here later."
        />

        <div className="border border-border bg-bg-raised p-6">
          <p className="mb-6 text-sm">
            Want to leave a note? Send one line, a meme, a track, or a random internet rabbit hole.
          </p>
          <a
            href="mailto:contact@chaddytwiceover.com?subject=Guestbook%20message%20from%20the%20site"
            className="inline-flex border border-accent bg-accent px-4 py-2 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:bg-transparent hover:text-accent"
          >
            open email
          </a>
        </div>
      </section>
    </PageTransition>
  )
}
