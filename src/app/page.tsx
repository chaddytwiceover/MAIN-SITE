import type { Metadata } from 'next'
import Link from 'next/link'
import ThreeShaderScene from '@/components/ThreeShaderScene'

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
    <div className="min-h-[calc(100vh-73px)] overflow-hidden bg-bg">
      <section className="relative isolate flex min-h-[calc(100vh-73px)] items-stretch">
        <ThreeShaderScene />
        <div className="!absolute inset-0 !z-10 bg-[linear-gradient(90deg,rgba(10,10,10,0.94),rgba(10,10,10,0.62)_45%,rgba(10,10,10,0.26))]" />
        <div className="!absolute inset-x-0 bottom-0 !z-10 h-40 bg-[linear-gradient(0deg,#0a0a0a,rgba(10,10,10,0))]" />

        <div className="relative z-20 mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.55fr)] md:px-12 md:py-20">
          <div className="flex min-h-[560px] flex-col justify-center">
            <p className="font-mono text-[11px] uppercase text-neon">live shader index</p>
            <h1 className="mt-5 max-w-[8ch] break-words font-serif text-[clamp(4rem,11vw,8.4rem)] lowercase leading-[0.88] text-text">
              chaddytwiceover
            </h1>
            <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-text md:text-xl">
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

          <div className="flex flex-col justify-end gap-4 pb-4 md:pb-10">
            <div className="rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <p className="font-mono text-[11px] uppercase text-textFaint">renderer</p>
                <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_16px_rgba(122,255,210,0.8)]" />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3 font-mono text-[11px] uppercase">
                <div>
                  <dt className="text-textFaint">mode</dt>
                  <dd className="mt-1 text-text">webgl</dd>
                </div>
                <div>
                  <dt className="text-textFaint">material</dt>
                  <dd className="mt-1 text-text">shader</dd>
                </div>
                <div>
                  <dt className="text-textFaint">input</dt>
                  <dd className="mt-1 text-text">pointer</dd>
                </div>
                <div>
                  <dt className="text-textFaint">state</dt>
                  <dd className="mt-1 text-lime">active</dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-white/10 bg-bgSoft/70 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-neon/50 hover:bg-bgRaise focus-visible:border-text"
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
        </div>
      </section>
    </div>
  )
}
