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
    title: 'Pixel Art Editor',
    description:
      'A browser-based pixel art editor with nature-inspired palettes, symmetry modes, spray brush, and rotating Bob Ross quotes.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    status: 'Live',
    url: '/demos/pixel-art/index.html',
    featured: true,
  },
  {
    id: 'simon-says',
    title: 'Simon Says Game',
    description:
      'A classic memory game — repeat the sequence as it gets longer and faster. Simple, satisfying, and surprisingly hard.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    url: '/demos/simon-says/index.html',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe — Neural Grid',
    description:
      'Cyberpunk-themed tic tac toe with three AI difficulty levels, including an unbeatable minimax algorithm with alpha-beta pruning.',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI / Minimax'],
    status: 'Live',
    url: '/demos/tic-tac-toe/index.html',
    featured: true,
  },
  {
    id: 'social-hub',
    title: 'Social Hub',
    description:
      'Custom link-in-bio page, originally standalone — now integrated into this site as the Socials page.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    url: '/socials',
    featured: true,
  },
  {
    id: 'main-site',
    title: 'This Site',
    description:
      'The portfolio itself — iterating on design systems, accessibility, responsive layouts, and moody vibes.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'In Progress',
    sourceUrl: 'https://github.com/chaddytwiceover',
  },
  {
    id: 'coming-soon-1',
    title: 'Weather Dashboard',
    description:
      'A sleek weather app experiment with animated backgrounds and location-based forecasts. Still sketching this one out.',
    tech: ['React', 'API', 'CSS Animations'],
    status: 'Coming Soon',
  },
  {
    id: 'coming-soon-2',
    title: 'Markdown Previewer',
    description:
      'A minimal live markdown editor and previewer with syntax highlighting. On the list for when I get around to it.',
    tech: ['TypeScript', 'React'],
    status: 'Coming Soon',
  },
]
