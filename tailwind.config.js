/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A60F2B',
        secondary: '#2F2340',
        tertiary: '#131626',
        quarteira: '#8AA696',
        quiteria: '#F2D6A2',
      },
    },
  },
  plugins: [],
}
