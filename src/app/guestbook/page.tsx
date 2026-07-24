import type { Metadata } from 'next'
import GuestbookContent from './GuestbookContent'

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'say hi and leave a message for chaddytwiceover.',
}

export default function GuestbookPage() {
  return <GuestbookContent />
}
