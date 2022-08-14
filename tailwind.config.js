/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      background: '#F5F1ED',
      black: '#252323',
      slateGray: '#70798C',
      bone: '#DAD2BC',
      grullo: '#A99985'
    },
    extend: {
      boxShadow: {
        'lgTop': '0px -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);'
      },
    },
  },
  plugins: [],
}
