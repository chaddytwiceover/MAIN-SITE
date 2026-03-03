import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg)',
          surface: 'var(--surface)',
          'surface-2': 'var(--surface-2)',
          border: 'var(--border)',
          'border-accent': 'var(--border-accent)',
          text: 'var(--text)',
          'text-muted': 'var(--text-muted)',
          accent: 'var(--accent)',
          'accent-hover': 'var(--accent-hover)',
          'accent-soft': 'var(--accent-soft)',
        },
      },
      fontFamily: {
        mono: [
          'ui-monospace', 'Cascadia Code', 'Source Code Pro',
          'Menlo', 'Consolas', 'Courier New', 'monospace',
        ],
        sans: [
          'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
          'Segoe UI', 'Helvetica', 'Arial', 'sans-serif',
        ],
      },
      maxWidth: {
        content: '980px',
      },
    },
  },
  plugins: [],
}

export default config
