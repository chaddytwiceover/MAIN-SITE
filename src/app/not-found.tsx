import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

export default function NotFound() {
  return (
    <div className="sheet">
      <SectionHeader title="Page not found" description="The page you are looking for does not exist or has been moved." />
      <div className="game-links">
        <Link href="/" className="text-link">← Return home</Link>
        <Link href="/lab/" className="text-link">Explore Lab</Link>
      </div>
    </div>
  )
}
