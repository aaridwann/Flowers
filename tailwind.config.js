/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Frontend/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "letter": ['Bilbo Swash Caps', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
