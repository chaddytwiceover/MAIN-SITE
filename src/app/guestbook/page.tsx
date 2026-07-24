import type { Metadata } from 'next'
import GuestbookContent from './GuestbookContent'

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'leave a message or say hey.',
}

export default function GuestbookPage() {
  return <GuestbookContent />
}
