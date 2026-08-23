import Link from 'next/link'

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pt-14 md:px-12 md:pt-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">01</p>
      <h1 className="mt-2 font-serif text-[clamp(3rem,9vw,4.5rem)] lowercase leading-[0.92] tracking-[-0.02em] text-text">
        twice over
      </h1>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-textDim">
        see the world in my eyes / web development
      </p>
      <p className="mt-6 max-w-[65ch] text-[15px] leading-relaxed text-textDim">
        Personal lab built with Next.js, some css, and vibes. No templates.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="https://x.com/chaddytwiceover"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 rounded-full bg-text px-4 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-bg"
        >
          Follow on X
          <span className="transition-transform group-hover:translate-x-[2px]">→</span>
        </a>

        <Link
          href="#labs"
          className="inline-flex items-center rounded-full border border-border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-textDim transition-colors hover:text-text"
        >
          Explore Labs
        </Link>
      </div>
    </section>
  )
}
