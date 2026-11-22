'use client'

import { useState, type ReactNode } from 'react'

export default function FrameControls({ prefix, labels, children }: {
  prefix: string; labels: string[]; children: ReactNode
}) {
  const [selected, setSelected] = useState(0)
  return (
    <div className="featured-frames">
      <div className="frames" data-selected={selected}>{children}</div>
      <div className="frame-controls" role="group" aria-label="Choose featured frame">
        {labels.map((label, i) => (
          <button key={label} type="button" aria-controls={`${prefix}-frame-${i + 1}`}
            aria-pressed={selected === i} onClick={() => setSelected(i)}>{label}</button>
        ))}
      </div>
    </div>
  )
}
