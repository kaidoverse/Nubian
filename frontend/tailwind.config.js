/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#ea2e0e",
      }
    },
    fontFamily: {
      'aventi': ['Aventi', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

