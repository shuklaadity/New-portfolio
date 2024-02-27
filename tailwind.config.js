/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color1":"#0A192F",
        "color2":"#f97316",
        "color3":"#54D688",
        "color4":"#492E87",
        "color5":"#37B5B6",
        "color6":"#F2F597",

      }
    },
    screens: {
      

      'lg': {'max': '2023px'},
      'sm': {'max': '1000px'},
      
    },
  },
  plugins: [],
}
