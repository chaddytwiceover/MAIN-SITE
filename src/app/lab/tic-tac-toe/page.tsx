import type { Metadata } from 'next'
import LabProjectDetail from '@/components/LabProjectDetail'

export const metadata: Metadata = { title: 'Tic Tac Toe — Neural Grid', description: 'A neon tic tac toe build where the hardest mode stays fully unbeatable.' }

export default function TicTacToePage() {
  return <LabProjectDetail title="tic tac toe — neural grid" description="A neon-flavored build with three AI difficulty levels, where the hardest mode stays fully unbeatable." demoUrl="/demos/tic-tac-toe/index.html" notes="Minimax with alpha-beta pruning and score-depth weighting for cleaner AI decisions." />
}
