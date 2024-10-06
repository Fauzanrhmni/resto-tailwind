/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins']
      },
      colors : {
        "white2" : '#f1f1f1',
        "black" : '#232631',
        "gray" : '#858585',
        "yellow" : '#FDC886',
        "blue" : '#5A4FCF'
      }
    },
  },
  plugins: [],
}

