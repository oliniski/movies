const { violet, blackA, tomato, green, mauve, slate } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A',
        ...violet,
        ...blackA,
        ...tomato,
        ...green,
        ...mauve,
        ...slate,
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
