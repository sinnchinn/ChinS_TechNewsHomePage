/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'readMoreBtn': 'rgba(241, 93, 81, 1)',
      'cardFill': 'rgba(0, 0, 26, 1)',
      'carddFont': 'rgba(232, 169, 76, 1)'
    },
    letterSpacing: {
      widest: '.1em',
      widest: '.3em'
    },
    extend: {
      fontFamily: {
        mainFont: ['mainFont']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

