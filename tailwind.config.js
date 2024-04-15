/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/images/hero.jpeg')",
      },
    },
  },
  plugins: [],
}

