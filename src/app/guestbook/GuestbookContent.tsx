'use client'

import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'

export default function GuestbookContent() {
  return (
    <PageTransition>
      <section className="sheet">
        <SectionHeader
          title="Say hi"
          description="Guestbook is intentionally lightweight for now. Drop a message by email and I’ll collect highlights here later."
        />

        <div className="max-w-prose">
          <p className="mb-6 text-sm">
            Want to leave a note? Send one line, a meme, a track, or a random internet rabbit hole.
          </p>
          <a
            href="mailto:contact@chaddytwiceover.com?subject=Guestbook%20message%20from%20the%20site"
            className="text-link"
          >
            open email
          </a>
        </div>
      </section>
    </PageTransition>
  )
}
