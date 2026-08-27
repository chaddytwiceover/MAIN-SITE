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
    id: 'south-florida-fighter',
    title: 'South Florida Fighter',
    description: 'vibrant 2D arcade fighter set on south florida boardwalks. locked 60 fps action, cancel combo system, and arcade audio.',
    tech: ['TypeScript', 'Canvas', 'Arcade', 'Vite'],
    status: 'Live',
    url: '/lab/south-florida-fighter/',
    featured: true,
  },
  {
    id: 'tic-tac-toe',
    title: 'Neural Grid',
    description: 'tic tac toe with three AI difficulty levels including an unbeatable minimax algorithm. cyberpunk themed because why not.',
    tech: ['JavaScript', 'Minimax AI', 'CSS Grid'],
    status: 'Live',
    url: '/lab/tic-tac-toe/',
    featured: true,
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    description: 'classic memory game. repeat the sequence as it gets longer and faster. simple, satisfying, surprisingly hard.',
    tech: ['JavaScript', 'Web Audio API', 'CSS Grid'],
    status: 'Live',
    url: '/lab/simon-says/',
  },
  {
    id: 'meteyes',
    title: 'MetEyes',
    description: 'met gallery AI guide. search art from the met collection and get gemini-powered insights about each piece.',
    tech: ['JavaScript', 'Gemini AI', 'Met API'],
    status: 'Live',
    url: 'https://github.com/chaddytwiceover/MetEyes',
    featured: true,
  },
  {
    id: 'main-site',
    title: 'This Site',
    description: 'The portfolio itself — iterating on design systems, accessibility, responsive layouts, and moody vibes.',
    tech: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    status: 'In Progress',
    sourceUrl: 'https://github.com/chaddytwiceover',
  },
]
