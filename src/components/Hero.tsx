import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-32 md:px-12">
      <div className="mb-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-textFaint">01</span>
      </div>
      
      <h1 className="mb-8 font-serif text-[48px] lowercase leading-tight tracking-tight text-text md:text-[72px]">
        twice over
      </h1>
      
      <div className="mb-8 w-12 border-t border-border" />
      
      <div className="mb-12">
        <h2 className="mb-4 font-mono text-[13px] uppercase tracking-[0.08em] text-text">
          see the world in my eyes / web development
        </h2>
        <p className="font-sans text-[15px] leading-relaxed text-textDim max-w-[65ch]">
          Personal lab built with Next.js, some css, and vibes. No templates.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center gap-4">
        <Link 
          href="https://x.com/chaddytwiceover"
          target="_blank"
          rel="noopener noreferrer" 
          className="group flex items-center gap-2 rounded-full bg-text px-6 py-3 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-[1.02]"
        >
          <span>Follow on X</span>
          <span className="transition-transform group-hover:translate-x-[2px]">→</span>
        </Link>
        <Link 
          href="#labs"
          className="rounded-full border border-border px-6 py-3 font-mono text-[12px] uppercase tracking-wider text-text transition-colors hover:bg-bgSoft"
        >
          Explore Labs
        </Link>
      </div>
    </section>
  );
}
