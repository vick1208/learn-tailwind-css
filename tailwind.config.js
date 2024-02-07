/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',

      },
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        orangechin: '#FFB830',
        coffee: '#724E2C'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'shake': 'wiggle 1s ease-in-out infinite',
        'cc': 'revsp 1s linear infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        revsp: {
          '0%': { transform: 'rotate(360deg)' },

        }

      }
    },
  },
  plugins: [],
}

