import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'earth-beige-dark': '#DDCBB7',
      'earth-beige-light': '#E1D8B3',
      'earth-brown-dark': '#7B4B36',
      'earth-brown-light': '#8E5D44',
      'earth-green': '#325D41',
      'earth-grey': '#333333',
      'earth-white': '#F4F4F4',
      'earth-yellow-dark': '#F7E890',
      'earth-yellow-light': '#F9EFA5'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'minimalist-home': "linear-gradient(to bottom, transparent, rgba(244, 244, 244, 0.5)), url('/resources/home/minimalist_home_bg.jpg')"
      },
      fontFamily: {
        caladea: ['Caladea', 'sans-serif'],
        koulen: ['Koulen', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        xs: '400px'
      }
    }
  },
  plugins: []
}
export default config
