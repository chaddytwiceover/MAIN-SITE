/**
 * Projects — Central data source
 *
 * Edit this file to add, remove, or update projects.
 * Used by: Projects page, Featured Projects section on Home
 */

export type ProjectStatus =
  | 'Live'
  | 'Prototype'
  | 'In Progress'
  | 'Experiment'
  | 'Coming Soon'

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  status: ProjectStatus
  /** Link to the live project (if available) */
  url?: string
  /** Link to the source code (if available) */
  sourceUrl?: string
  /** Whether to feature this project on the home page */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'pixel-art',
    title: 'Happy Little Pixels',
    description: 'bob ross inspired pixel art editor with spray brush, symmetry modes, and nature palettes. canvas API was fun.',
    tech: ['JavaScript', 'Canvas', 'CSS'],
    status: 'Live',
    url: '/demos/pixel-art/index.html',
    featured: true,
  },
  {
    id: 'tic-tac-toe',
    title: 'Neural Grid',
    description: 'tic tac toe with three AI difficulty levels including an unbeatable minimax algorithm. cyberpunk themed because why not.',
    tech: ['JavaScript', 'Minimax', 'AI'],
    status: 'Live',
    url: '/demos/tic-tac-toe/index.html',
    featured: true,
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    description: 'classic memory game. repeat the sequence as it gets longer and faster. simple, satisfying, surprisingly hard.',
    tech: ['JavaScript', 'Game', 'CSS'],
    status: 'Live',
    url: '/demos/simon-says/index.html',
  },
  {
    id: 'meteyes',
    title: 'MetEyes',
    description: 'met gallery AI guide. search art from the met collection and get gemini-powered insights about each piece.',
    tech: ['JavaScript', 'Gemini', 'API'],
    status: 'Live',
    url: 'https://github.com/chaddytwiceover/MetEyes',
    featured: true,
  },
  {
    id: 'main-site',
    title: 'This Site',
    description: 'The portfolio itself — iterating on design systems, accessibility, responsive layouts, and moody vibes.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'In Progress',
    sourceUrl: 'https://github.com/chaddytwiceover',
  },
]
