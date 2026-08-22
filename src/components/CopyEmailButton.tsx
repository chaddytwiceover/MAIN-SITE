'use client'

import { useState } from 'react'

const email = 'contact@chaddytwiceover.com'

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex min-h-11 items-center rounded-full border border-border px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition hover:border-textDim hover:text-text"
    >
      {copied ? 'Copied' : 'Copy email'}
    </button>
  )
}
