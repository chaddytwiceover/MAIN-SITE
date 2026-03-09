'use client'

import { createContext, useContext } from 'react'

/** true while the loading screen is active */
export const LoadingContext = createContext(true)

export function useIsLoading() {
  return useContext(LoadingContext)
}
