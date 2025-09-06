/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        strak: ['Strak', 'sans-serif'],
        starker: ['Starker', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
