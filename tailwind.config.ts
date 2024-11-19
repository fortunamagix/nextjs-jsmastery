import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: { 500: '#ff7000', 100: '#fff1e6' },
        dark: { 500: '#1a1a1a', 200: '#0f1117', 100: '000000' }
      }
    }
  },
  plugins: []
}
export default config
