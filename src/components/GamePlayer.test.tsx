import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import GamePlayer from './GamePlayer'

describe('GamePlayer', () => {
  afterEach(() => {
    document.body.style.overflow = ''
    jest.restoreAllMocks()
    Object.defineProperty(document, 'fullscreenElement', { configurable: true, value: null })
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', { configurable: true, value: undefined })
  })

  it('keeps the game and its origin permissions when entering and leaving the fullscreen fallback', async () => {
    document.body.style.overflow = 'auto'
    render(<GamePlayer title="Flower Quest" url="https://flowerquest.vercel.app/" />)
    const frame = screen.getByTitle('Flower Quest') as HTMLIFrameElement
    jest.spyOn(frame.contentWindow!, 'focus').mockImplementation(() => {})
    expect(frame).toHaveAttribute('sandbox', 'allow-scripts allow-same-origin')
    expect(frame).toHaveAttribute('src', 'https://flowerquest.vercel.app/')

    fireEvent.click(screen.getByRole('button', { name: 'Play full screen' }))
    await waitFor(() => expect(document.body.style.overflow).toBe('hidden'))
    expect(screen.getByTitle('Flower Quest')).toBe(frame)
    fireEvent.click(screen.getByRole('button', { name: 'Exit full screen' }))
    await waitFor(() => expect(document.body.style.overflow).toBe('auto'))
    expect(screen.getByTitle('Flower Quest')).toBe(frame)
    expect(screen.getByRole('button', { name: 'Play full screen' })).toHaveFocus()
  })

  it('restores scrolling when native fullscreen exits with Escape', async () => {
    const request = jest.fn().mockResolvedValue(undefined)
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', { configurable: true, value: request })
    render(<GamePlayer title="Fighter" url="https://south-florida-fighter.vercel.app/" />)
    const frame = screen.getByTitle('Fighter') as HTMLIFrameElement
    jest.spyOn(frame.contentWindow!, 'focus').mockImplementation(() => {})
    fireEvent.click(screen.getByRole('button', { name: 'Play full screen' }))
    await waitFor(() => expect(request).toHaveBeenCalledTimes(1))
    act(() => document.dispatchEvent(new Event('fullscreenchange')))
    await waitFor(() => expect(document.body.style.overflow).toBe(''))
    expect(screen.getByRole('button', { name: 'Play full screen' })).toHaveFocus()
  })

  it('retains an exit control if the browser rejects fullscreen, and cleans up on navigation', async () => {
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', { configurable: true, value: jest.fn().mockRejectedValue(new Error('Unavailable')) })
    const { unmount } = render(<GamePlayer title="Game" url="https://flowerquest.vercel.app/" />)
    const frame = screen.getByTitle('Game') as HTMLIFrameElement
    jest.spyOn(frame.contentWindow!, 'focus').mockImplementation(() => {})
    fireEvent.click(screen.getByRole('button', { name: 'Play full screen' }))
    await waitFor(() => expect(screen.getByRole('button', { name: 'Exit full screen' })).toBeVisible())
    unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('focuses the iframe without locking page scrolling', () => {
    render(<GamePlayer title="Game" url="https://flowerquest.vercel.app/" />)
    const frame = screen.getByTitle('Game') as HTMLIFrameElement
    const focus = jest.spyOn(frame.contentWindow!, 'focus').mockImplementation(() => {})
    fireEvent.click(screen.getByRole('button', { name: 'Focus game' }))
    expect(frame).toHaveFocus()
    expect(focus).toHaveBeenCalled()
    expect(document.body.style.overflow).toBe('')
  })
})
