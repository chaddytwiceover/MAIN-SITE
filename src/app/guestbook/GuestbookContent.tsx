'use client'

import PageTransition from '@/components/PageTransition'

const sampleMessages = [
  { name: 'internet friend', message: 'love the pixel editor. keep cooking.' },
  { name: 'another human', message: 'the minimax tic-tac-toe is rude but impressive.' },
]

export default function GuestbookContent() {
  return (
    <PageTransition>
      <div className="max-w-[var(--max-width-narrow)] mx-auto px-6 py-20">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-text-dim mb-4">{'// guestbook / contact'}</p>
        <h1 className="font-heading text-4xl text-text mb-4">say hey</h1>
        <p className="text-text-muted mb-8">
          no backend guestbook yet, but i still want notes from nice people.
        </p>

        <a
          href="mailto:contact@chaddytwiceover.com?subject=hey%20from%20your%20site"
          className="inline-flex px-5 py-3 border border-accent bg-accent text-bg font-mono text-xs tracking-[0.12em] uppercase hover:bg-transparent hover:text-accent transition-colors no-underline"
        >
          email me
        </a>

        <div className="mt-12 border border-border bg-bg-raised">
          <div className="px-5 py-4 border-b border-border">
            <p className="font-mono text-xs tracking-[0.12em] uppercase text-text-dim">guestbook preview</p>
          </div>
          {sampleMessages.map((entry) => (
            <div key={entry.name} className="px-5 py-4 border-b border-border last:border-b-0">
              <p className="font-mono text-xs text-text-dim uppercase tracking-[0.1em] mb-2">{entry.name}</p>
              <p className="text-text-muted">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
