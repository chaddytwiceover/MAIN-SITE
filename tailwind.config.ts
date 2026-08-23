import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        bgSoft: '#141414',
        bgRaise: '#1C1C1C',
        text: '#EDEBE6',
        textDim: '#9A9A95',
        textFaint: '#5A5A57',
        lime: '#D6FF5C',
        neon: '#7AFFD2',
        amber: '#FFB86B',
        border: '#232323',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Newsreader', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'Geist Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}

export default config
