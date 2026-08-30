export interface Post {
  id: string
  title: string
  date: string
  content: string
  tags?: string[]
}

export const posts: Post[] = [
  {
    id: 'getting-started',
    title: 'this site exists now',
    date: '2026-07-24',
    content: 'finally got around to building a proper home on the internet. no templates, no website builders — just next.js, some css, and vibes. still figuring out what goes here but that\'s the point.',
    tags: ['meta', 'web'],
  },

  {
    id: 'minimax-rabbit-hole',
    title: 'fell down the minimax rabbit hole',
    date: '2026-07-10',
    content: 'started building tic tac toe and ended up learning about game theory and AI decision trees. the minimax algorithm is genuinely elegant. my version has a cyberpunk skin because obviously.',
    tags: ['ai', 'games'],
  },
  {
    id: 'dark-mode-only',
    title: 'dark mode only, no apologies',
    date: '2026-07-05',
    content: 'decided this site is dark mode only. light mode is for other people. the near-black background with cream text just hits different.',
    tags: ['design', 'opinion'],
  },
]
