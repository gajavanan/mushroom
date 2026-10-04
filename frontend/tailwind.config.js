/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f9f4',
          100: '#e1f2e6',
          200: '#c2e4cd',
          300: '#94cfa6',
          400: '#5fb179',
          500: '#399456',
          600: '#2a7743',
          700: '#235f37',
          800: '#1f4c2e',
          900: '#1b3f27',
          950: '#0d2315',
        },
        moss: {
          50: '#f6f7f2',
          100: '#e9ebe1',
          200: '#d4d8c4',
          300: '#b7be9d',
          400: '#99a177',
          500: '#7d865b',
          600: '#636c46',
          700: '#4d5438',
          800: '#404530',
          900: '#373c2a',
        },
        poison: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          900: '#881337',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
