import { renderHook } from '@testing-library/react'
import { useReducedMotion } from 'framer-motion'
import { useSkipAnimation } from './useSafeAnimation'

jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn(),
}))

const mockUseReducedMotion = useReducedMotion as jest.MockedFunction<typeof useReducedMotion>

describe('useSkipAnimation', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns true when useReducedMotion returns true', () => {
    mockUseReducedMotion.mockReturnValue(true)

    const { result } = renderHook(() => useSkipAnimation())

    expect(result.current).toBe(true)
    expect(mockUseReducedMotion).toHaveBeenCalledTimes(1)
  })

  it('returns false when useReducedMotion returns false', () => {
    mockUseReducedMotion.mockReturnValue(false)

    const { result } = renderHook(() => useSkipAnimation())

    expect(result.current).toBe(false)
    expect(mockUseReducedMotion).toHaveBeenCalledTimes(1)
  })

  it('returns false when useReducedMotion returns null', () => {
    mockUseReducedMotion.mockReturnValue(null)

    const { result } = renderHook(() => useSkipAnimation())

    expect(result.current).toBe(false)
    expect(mockUseReducedMotion).toHaveBeenCalledTimes(1)
  })

  it('returns false when useReducedMotion returns undefined', () => {
    mockUseReducedMotion.mockReturnValue(undefined as unknown as boolean)

    const { result } = renderHook(() => useSkipAnimation())

    expect(result.current).toBe(false)
    expect(mockUseReducedMotion).toHaveBeenCalledTimes(1)
  })
})
