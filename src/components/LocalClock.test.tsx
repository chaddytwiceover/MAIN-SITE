import { act, render, screen } from '@testing-library/react'
import LocalClock from './LocalClock'

const DateTimeFormat = Intl.DateTimeFormat

function useTimezone(timeZone: string) {
  jest.spyOn(Intl, 'DateTimeFormat').mockImplementation((_, options) => (
    new DateTimeFormat('en-GB', { ...options, timeZone })
  ))
}

describe('LocalClock', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-01-31T23:59:59Z'))
  })

  afterEach(() => {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })

  it('uses the visitor timezone, including fractional UTC offsets', () => {
    useTimezone('Asia/Kathmandu')
    render(<LocalClock />)

    expect(screen.getByText('05:44:59')).toHaveAttribute('datetime', '2026-01-31T23:59:59.000Z')
    expect(screen.getByText('Sunday, 1 February 2026')).toBeInTheDocument()
    expect(screen.getByText(/Asia \/ (Kathmandu|Katmandu)/)).toBeInTheDocument()
  })

  it('updates both the clock and date when local midnight passes', () => {
    useTimezone('UTC')
    render(<LocalClock />)
    expect(screen.getByText('Saturday, 31 January 2026')).toBeInTheDocument()

    act(() => jest.advanceTimersByTime(1000))

    expect(screen.getByText('00:00:00')).toBeInTheDocument()
    expect(screen.getByText('Sunday, 1 February 2026')).toBeInTheDocument()
  })

  it('refreshes the timezone on focus and cleans up its timer on unmount', () => {
    useTimezone('UTC')
    const { unmount } = render(<LocalClock />)
    expect(jest.getTimerCount()).toBe(1)

    useTimezone('America/New_York')
    act(() => window.dispatchEvent(new Event('focus')))
    expect(screen.getByText('18:59:59')).toBeInTheDocument()
    expect(screen.getByText('America / New York')).toBeInTheDocument()
    expect(jest.getTimerCount()).toBe(1)

    unmount()
    expect(jest.getTimerCount()).toBe(0)
  })
})
