/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'biru':'#589CC9',
        'biru-muda': '#7FC8F4'
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}
