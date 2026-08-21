import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="font-mono text-[12px] text-text hover:text-textDim transition-colors">
          chaddytwiceover
        </Link>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.08em] text-textDim">
          <Link href="#labs" className="hover:text-text transition-colors">Labs</Link>
          <Link href="#socials" className="hover:text-text transition-colors">Socials</Link>
          <Link href="/pricing" className="hover:text-text transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-text transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
