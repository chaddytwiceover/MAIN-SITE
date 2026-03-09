'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useIsLoading } from '@/lib/loading-context'

const HLS_SRC = 'https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8'
const MP4_FALLBACK = 'https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g/high.mp4'

export default function Hero() {
  const isLoading = useIsLoading()
  const videoRef = useRef<HTMLVideoElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  // HLS video setup
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let hlsInstance: import('hls.js').default | null = null

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari)
      video.src = HLS_SRC
    } else {
      // Use hls.js for other browsers
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          hlsInstance = new Hls({ enableWorker: false })
          hlsInstance.loadSource(HLS_SRC)
          hlsInstance.attachMedia(video)
        } else {
          // Fallback to MP4
          video.src = MP4_FALLBACK
        }
      })
    }

    return () => {
      if (hlsInstance) hlsInstance.destroy()
    }
  }, [])

  // GSAP entrance — fires once loading is done
  useEffect(() => {
    if (isLoading || animatedRef.current) return
    animatedRef.current = true

    const targets = [labelRef.current, headingRef.current, subRef.current, ctasRef.current].filter(Boolean)

    gsap.fromTo(
      targets,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      }
    )
  }, [isLoading])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto">
        <p
          ref={labelRef}
          className="opacity-0 mb-6 text-xs uppercase tracking-[0.25em] text-[#888888] font-body"
        >
          Design &amp; Development
        </p>

        <h1
          ref={headingRef}
          className="opacity-0 text-[clamp(2.5rem,6vw,5rem)] font-display italic text-[#f5f5f5] leading-[1.1] mb-6"
        >
          Building modern<br />web interfaces.
        </h1>

        <p
          ref={subRef}
          className="opacity-0 text-base md:text-lg text-[#888888] max-w-[52ch] mx-auto mb-10 leading-relaxed font-body"
        >
          Front-end developer and web dev student — building with Next.js, React, and TypeScript.
          Sharing experiments and projects as I learn in public.
        </p>

        <div ref={ctasRef} className="opacity-0 flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-body font-medium tracking-wide text-[#0a0a0a] bg-[#f5f5f5] hover:bg-white transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/lab"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-body font-medium tracking-wide text-[#f5f5f5] border border-[#f5f5f5]/20 hover:border-[#f5f5f5]/50 hover:bg-[#f5f5f5]/5 transition-colors"
          >
            Explore the Lab
          </Link>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }}
      />
    </section>
  )
}
