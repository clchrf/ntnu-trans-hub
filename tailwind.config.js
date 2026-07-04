/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#161457',
          50: '#f0f0f9',
          100: '#dcdcf0',
          200: '#b9b9e2',
          300: '#8f8fce',
          400: '#6363b3',
          500: '#403f92',
          600: '#302f72',
          700: '#25245a',
          800: '#1c1b47',
          900: '#161457',
          950: '#0d0c33',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"PingFang TC"',
          '"Noto Sans TC"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
