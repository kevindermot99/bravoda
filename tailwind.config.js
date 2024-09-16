/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#525bb7",
        "body-light": "#f6f5f7",
        "body-dark": "#090909",
        "text-black": "#111111",
        "text-white": "#cddddc",
        "dark-card": "#101012",
        "dark-hover-color": "#1d1d21"
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

