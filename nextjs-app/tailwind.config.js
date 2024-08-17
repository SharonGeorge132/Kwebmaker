/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      container:{
        center: true,
        padding: "15px",
      },

      colors:{
        accent: "#FF8F9C",
        blackish: "#1b1b1b"
      }
    },
  },
  plugins: [],
}
