import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-160px)] w-full max-w-[1100px] flex-col justify-center px-6 py-20 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">404 / error</p>
      <h1 className="mt-3 font-serif text-5xl lowercase text-text md:text-7xl">page not found</h1>
      <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-textDim">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full bg-text px-5 font-mono text-[11px] uppercase tracking-[0.08em] text-bg transition hover:bg-neon"
        >
          ← Return home
        </Link>
        <Link
          href="/lab"
          className="inline-flex min-h-11 items-center rounded-full border border-border px-5 font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition hover:border-textDim hover:text-text"
        >
          Explore lab
        </Link>
      </div>
    </div>
  )
}
