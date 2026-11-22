export interface ProjectStills {
  prefix: string
  small: number
  width: number
  height: number
  frames: { caption: string; alt: string }[]
}

export interface LabProject {
  action?: 'Play game' | 'Open website' | 'Run experiment'
  stills?: ProjectStills
  slug: string
  title: string
  description: string
  techNotes?: string
  tags: string[]
  status: 'live' | 'prototype' | 'experiment' | 'coming soon'
  demoUrl: string
  gameUrl?: string
  sourceUrl?: string
  featured?: boolean
  hidden?: boolean
}

export const labProjects: LabProject[] = [
  {
    slug: 'flowerquest',
    title: "Monnie's Flower Quest",
    description: "Collect flowers, dodge garden pests and open the gate to the next patch.",
    stills: {
      prefix: 'garden', small: 240, width: 480, height: 915,
      frames: [
        { caption: 'Sunflower on the path', alt: 'Monnie stands below a sunflower at a fork. The flower counter reads zero of eight.' },
        { caption: 'First bloom collected', alt: 'Monnie reaches the fork. The sunflower is gone and the counter reads one of eight.' },
      ],
    },
    techNotes: "Phaser gameplay embedded through the lab shell, with standalone game deployed on Vercel.",
    featured: true,
    tags: ['Phaser', 'React', 'TypeScript', 'Vite'],
    status: 'live',
    demoUrl: '/lab/flowerquest/',
    gameUrl: 'https://flowerquest.vercel.app/',
    sourceUrl: 'https://github.com/chaddytwiceover/flowerquest'
  },
  {
    slug: 'south-florida-fighter',
    title: 'South Florida Fighter',
    description: "Trade punches on the streets of South Florida in a two-dimensional arcade fighter.",
    stills: {
      prefix: 'fighter', small: 480, width: 525, height: 320,
      frames: [
        { caption: 'Closing in', alt: 'Two fighters face each other beneath the Wynwood mural.' },
        { caption: '22 damage', alt: 'A punch connects. A spark and a yellow 22 appear between the fighters.' },
      ],
    },
    techNotes: "Custom 2D arcade engine with frame-accurate cancel windows, deployed on Vercel.",
    featured: true,
    tags: ['Arcade', 'Canvas', 'TypeScript', 'Vite'],
    status: 'live',
    demoUrl: '/lab/south-florida-fighter/',
    gameUrl: process.env.NEXT_PUBLIC_SF_FIGHTER_URL ?? 'https://south-florida-fighter.vercel.app',
    sourceUrl: 'https://github.com/chaddytwiceover/south-florida-fighter'
  },
  {
    slug: 'simon-says',
    title: 'Simon Says Game',
    description: "Watch the pads light up, then tap the colors back in order. Each round adds a beat.",
    stills: {
      prefix: 'simon', small: 320, width: 640, height: 640,
      frames: [
        { caption: 'Watch the pads', alt: 'Four unlit colored pads wait for the first sequence.' },
        { caption: 'Repeat red first', alt: 'The top-right red pad lights up to start the sequence.' },
      ],
    },
    techNotes: "State machine flow + Web Audio synthesizer + tuned difficulty curve.",
    featured: true,
    tags: ['JavaScript', 'Web Audio API', 'CSS Grid'],
    status: 'live',
    demoUrl: '/lab/simon-says/',
    gameUrl: 'https://simon-says-neon.vercel.app/',
    sourceUrl: 'https://github.com/chaddytwiceover'
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: "Claim three squares in a row against the computer or pass the board to a friend.",
    stills: {
      prefix: 'tic', small: 320, width: 640, height: 640,
      frames: [
        { caption: 'Preview the corner', alt: 'A faint glow previews the bottom-right square.' },
        { caption: 'Complete the diagonal', alt: 'X fills the bottom-right square and a winning line crosses the board.' },
      ],
    },
    techNotes: "Minimax algorithm with alpha-beta pruning & opening book optimization, tactical heuristic AI, and animated SVG win lines.",
    featured: true,
    tags: ['JavaScript', 'Minimax AI', 'Heuristic AI', 'CSS Grid'],
    status: 'live',
    demoUrl: '/lab/tic-tac-toe/',
    gameUrl: 'https://tic-tac-toe-two-self-24.vercel.app/',
    sourceUrl: 'https://github.com/chaddytwiceover/tic-tac-toe'
  }
]
