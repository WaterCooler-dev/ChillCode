/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md,vue}",
    "./docs/.vitepress/theme/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

