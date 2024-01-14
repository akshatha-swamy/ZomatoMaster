/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        navbar:{
          100:'#F0ECE5',
          200:'#f2f2f2',//gray icon
          300:'#595959',//text
          400:"#fbedb6"//delivery bg
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
        },

        greycolor:
        {
          50: '#f1f1fb',
          100: '#d8d7dc',
          200: '#bfbdc2',
          300: '#a5a2a8',
          400: '#8b888f',
          500: '#716e75',
          600: '#59565c',
          700: '#3f3d42',//text dark grey
          800: '#26252a',
          900: '#120a12',
        }
     }
    },
  },
  plugins: [],
}