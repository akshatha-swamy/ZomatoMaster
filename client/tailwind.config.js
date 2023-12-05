/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        navbar:{
          100:'#F0ECE5'
        },
        pink:
        {
          50: '#ffe5e8',
          100: '#fdb7be',
          200: '#f58995',//location
          300: '#f05b6a',//buttons
          400: '#eb2f41',
          500: '#d11627',
          600: '#a40f1e',
          700: '#760914',
          800: '#48030b',
          900: '#1e0001',
        }
     }
    },
  },
  plugins: [],
}