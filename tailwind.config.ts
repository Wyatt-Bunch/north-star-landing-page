import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EDF5',
          100: '#D1DBE9',
          200: '#A3B7D3',
          300: '#7593BD',
          400: '#476FA7',
          500: '#1E3A5F',
          600: '#182E4C',
          700: '#122339',
          800: '#0C1726',
          900: '#0A1E3D',
          950: '#050F1F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
