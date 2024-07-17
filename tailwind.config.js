/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in-left': 'fade-in-left 0.6s ease-in-out',
        'fade-out-right': 'fade-out-right 0.6s ease-out'
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },
        'fade-out-right': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(20px)'
          }
        }
      },
      fontFamily: {
        'thai': ['"Prompt"', 'sans-serif'],
        'english': ['"Inter"', 'sans-serif'],
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}
