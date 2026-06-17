'use client'

import { useEffect, useState } from 'react'

export default function InteractiveVisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('visitor_count')
    const nextCount = saved ? parseInt(saved, 10) + 1 : 12345
    localStorage.setItem('visitor_count', nextCount.toString())
    setCount(nextCount)
  }, [])

  if (count === null) return <span>[ loading... ]</span>

  return (
    <span className="visitor-counter">
      You are visitor number: <strong>{count.toString().padStart(6, '0')}</strong>
    </span>
  )
}
