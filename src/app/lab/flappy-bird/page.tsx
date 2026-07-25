import { Metadata } from 'next'
import FlappyBird from '@/components/FlappyBird'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Flappy Bird Clone - Lab',
  description: 'A Next.js port of a SwiftUI Flappy Bird clone.',
}

export default function FlappyBirdPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 min-h-screen">
      <BackButton />

      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Flappy Bird Clone
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          A port of a SwiftUI game into a Next.js component using React state and requestAnimationFrame.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <FlappyBird />
      </div>
    </main>
  )
}
