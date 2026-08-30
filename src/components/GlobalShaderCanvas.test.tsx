import React from 'react'
import { render } from '@testing-library/react'
import GlobalShaderCanvas from './GlobalShaderCanvas'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('GlobalShaderCanvas', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders without crashing and unmounts cleanly', () => {
    const { container, unmount } = render(<GlobalShaderCanvas />)
    expect(container.firstChild).not.toBeNull()
    expect(container.querySelector('div')).toHaveAttribute('aria-hidden', 'true')
    expect(() => unmount()).not.toThrow()
  })
})
