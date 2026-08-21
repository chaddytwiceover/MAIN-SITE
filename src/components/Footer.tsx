export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-2 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12">
        <a
          href="mailto:contact@chaddytwiceover.com"
          className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint transition-colors hover:text-textDim"
        >
          contact@chaddytwiceover.com
        </a>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">© 2026 CHADDYTWICEOVER</p>
      </div>
    </footer>
  )
}
