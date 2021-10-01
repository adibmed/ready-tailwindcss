const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alata"', 'sans-serif']
      },
    },
   
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
 