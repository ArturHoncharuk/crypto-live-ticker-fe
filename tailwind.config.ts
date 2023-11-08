import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F3EAF4',
        purple: '#544177',
      },
    },
  },
  plugins: [],
}
export default config
