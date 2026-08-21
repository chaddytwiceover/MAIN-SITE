import Link from 'next/link';

export default function XCTA() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-12">
      <div className="mb-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-textFaint">04 / on X right now</span>
      </div>
      
      <div className="rounded-[16px] border border-border bg-bgSoft p-6 md:p-10 max-w-[500px]">
        <h3 className="mb-2 font-mono text-[15px] text-text">Building in public on X</h3>
        <p className="mb-6 font-sans text-[14px] text-textDim">
          Daily dev logs, pixel experiments, late-night thoughts. Reply guy era.
        </p>
        
        <div className="mb-6 rounded-[12px] border border-border bg-bg p-4 font-mono text-[13px] text-text">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-border" />
            <div>
              <div className="text-text">chaddy</div>
              <div className="text-[10px] text-textDim">@chaddytwiceover</div>
            </div>
          </div>
          <p>finally got around to building a proper home on the internet. no templates, no website builders — just next.js, some css, and vibes.</p>
        </div>
        
        <Link 
          href="https://x.com/chaddytwiceover"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-text px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-bg transition-transform hover:scale-[1.02]"
        >
          Follow @chaddytwiceover
        </Link>
      </div>
    </section>
  );
}
