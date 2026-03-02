'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface NeonContextType {
  neonOn: boolean
  toggle: () => void
}

const NeonContext = createContext<NeonContextType>({ neonOn: true, toggle: () => {} })

export function useNeon() {
  return useContext(NeonContext)
}

function safeStorageGet(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeStorageSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* noop */
  }
}

export function NeonProvider({ children }: { children: React.ReactNode }) {
  const [neonOn, setNeonOn] = useState(true)

  useEffect(() => {
    const saved = safeStorageGet('neon')
    if (saved === 'off') {
      setNeonOn(false)
      document.body.setAttribute('data-neon', 'off')
    }
  }, [])

  const toggle = useCallback(() => {
    setNeonOn((prev) => {
      const next = !prev
      if (next) {
        document.body.removeAttribute('data-neon')
        safeStorageSet('neon', 'on')
      } else {
        document.body.setAttribute('data-neon', 'off')
        safeStorageSet('neon', 'off')
      }
      return next
    })
  }, [])

  return (
    <NeonContext.Provider value={{ neonOn, toggle }}>
      {children}
    </NeonContext.Provider>
  )
}
