'use client'

import { useEffect, useRef, useState } from 'react'

export default function GamePlayer({ title, url }: { title: string; url: string }) {
  const playerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const fullscreenButtonRef = useRef<HTMLButtonElement>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setExpanded(false)
        fullscreenButtonRef.current?.focus()
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !document.fullscreenElement) {
        setExpanded(false)
        fullscreenButtonRef.current?.focus()
      }
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [expanded])

  const focusGame = () => {
    iframeRef.current?.focus()
    iframeRef.current?.contentWindow?.focus()
  }

  const toggleFullscreen = async () => {
    if (expanded) {
      try {
        if (document.fullscreenElement) await document.exitFullscreen()
      } finally {
        setExpanded(false)
        fullscreenButtonRef.current?.focus()
      }
      return
    }
    setExpanded(true)
    try {
      await playerRef.current?.requestFullscreen?.()
    } catch {
      // The viewport-sized player remains available when native fullscreen is unavailable.
    }
    focusGame()
  }

  return (
    <div ref={playerRef} className={`lab-game-player ${expanded ? 'lab-game-player-expanded' : ''}`}>
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border bg-bg px-3 py-2">
        <button type="button" onClick={focusGame} className="min-h-11 px-3 font-mono text-xs font-bold text-text hover:text-accent">
          Focus game
        </button>
        <button ref={fullscreenButtonRef} type="button" onClick={toggleFullscreen} aria-pressed={expanded} className="min-h-11 px-3 font-mono text-xs font-bold text-text hover:text-accent">
          {expanded ? 'Exit full screen' : 'Play full screen'}
        </button>
      </div>
      <iframe
        ref={iframeRef}
        title={title}
        src={url}
        className="min-h-0 w-full flex-1 border-0 bg-[#1c1612]"
        allow="autoplay; fullscreen; gamepad"
        allowFullScreen
        loading="eager"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}
