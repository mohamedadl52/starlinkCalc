/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors : {
        "maincolor" : "#7e2424",
        "seconcolor" : "#1f2937"
      }
    },
  },
  plugins: [],
}