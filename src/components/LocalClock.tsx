'use client'

import { useEffect, useState } from 'react'
import styles from '@/app/home.module.css'

interface ClockReading {
  iso: string
  time: string
  date: string
  timezone: string
}

export default function LocalClock() {
  // The static export has no visitor timezone. Populate only after hydration.
  const [reading, setReading] = useState<ClockReading | null>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const timeFormat = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
      })
      const timezone = timeFormat.resolvedOptions().timeZone

      setReading({
        iso: now.toISOString(),
        time: timeFormat.format(now),
        date: new Intl.DateTimeFormat(undefined, {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        }).format(now),
        timezone: timezone ? timezone.replaceAll('_', ' ').replaceAll('/', ' / ') : 'device local time',
      })
    }

    let timer: ReturnType<typeof setInterval> | undefined
    const resume = () => {
      clearInterval(timer)
      if (!document.hidden) {
        update()
        timer = setInterval(update, 1000)
      }
    }

    resume()
    document.addEventListener('visibilitychange', resume)
    window.addEventListener('focus', resume)
    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', resume)
      window.removeEventListener('focus', resume)
    }
  }, [])

  return (
    <section className={`${styles.card} ${styles.clock}`} aria-label="Your local date and time">
      <div>
        <h2 className={styles.eyebrow}>right here, right now</h2>
        <p className={styles.clockDate}>{reading?.date ?? 'finding your local date…'}</p>
      </div>
      <time className={styles.clockTime} dateTime={reading?.iso} aria-live="off">
        {reading?.time ?? '—:—:—'}
      </time>
      <div className={styles.clockZone}>
        <span className={styles.eyebrow}><span className={styles.statusDot} aria-hidden="true" /> your timezone</span>
        <p>{reading?.timezone ?? 'using your device settings'}</p>
      </div>
    </section>
  )
}
