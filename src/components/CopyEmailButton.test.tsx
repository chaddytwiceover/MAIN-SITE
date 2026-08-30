import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CopyEmailButton from './CopyEmailButton';

describe('CopyEmailButton', () => {
  let writeTextMock: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers();
    writeTextMock = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: writeTextMock,
      },
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders with initial button text and aria-live attribute', () => {
    render(<CopyEmailButton />);
    const button = screen.getByRole('button', { name: /copy email/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-live', 'polite');
  });

  it('copies email to clipboard and updates button text on click', async () => {
    render(<CopyEmailButton />);
    const button = screen.getByRole('button', { name: /copy email/i });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(writeTextMock).toHaveBeenCalledWith('contact@chaddytwiceover.com');
    expect(button).toHaveTextContent('Copied');
  });

  it('reverts button text back to "Copy email" after timeout', async () => {
    render(<CopyEmailButton />);
    const button = screen.getByRole('button', { name: /copy email/i });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(button).toHaveTextContent('Copied');

    act(() => {
      jest.advanceTimersByTime(1800);
    });

    expect(button).toHaveTextContent('Copy email');
  });
});
