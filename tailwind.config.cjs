/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-desktop': "url('/src/assets/images/bg-curvy-desktop.svg')",
        'intro-mobile': "url('/src/assets/images/bg-curvy-mobile.svg')",
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}