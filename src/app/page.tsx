import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'chaddytwiceover' },
  description: 'A WebGL home for links, experiments, socials, and things I make.',
}

const links = [
  {
    title: 'Lab',
    kicker: 'Interactive builds',
    description: 'Games, tools, and WebGL experiments in progress.',
    href: '/lab',
  },
  {
    title: 'Socials',
    kicker: 'Elsewhere online',
    description: 'Profiles, updates, and the places I post from.',
    href: '/socials',
  },
]

const signals = ['three.js', 'glsl shaders', 'next.js', 'typescript', 'tailwind css']

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-73px)] overflow-hidden">
      <section className="relative isolate flex min-h-[calc(100vh-73px)] items-stretch">
        <div className="relative z-20 mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.55fr)] md:gap-10 md:px-12 md:py-12">
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-[clamp(2.2rem,7.5vw,6.2rem)] lowercase leading-[0.95] tracking-[-0.02em] text-text">
              chaddytwiceover
            </h1>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-text md:text-lg">
              A personal WebGL surface for links, experiments, socials, and whatever gets built next.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Site stack">
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-[11px] uppercase text-textDim backdrop-blur"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-30 flex flex-col justify-center gap-3 pb-4 md:pb-0">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative z-30 block cursor-pointer rounded-lg border border-white/10 bg-bgSoft/70 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-neon/50 hover:bg-bgRaise focus-visible:border-text"
              >
                <span className="font-mono text-[11px] uppercase text-textFaint">{link.kicker}</span>
                <span className="mt-2 flex items-end justify-between gap-5">
                  <span>
                    <span className="block font-serif text-3xl lowercase leading-none text-text">{link.title}</span>
                    <span className="mt-3 block max-w-[32ch] text-sm leading-relaxed text-textDim">{link.description}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-neon transition-transform group-hover:translate-x-1"
                  >
                    -&gt;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
