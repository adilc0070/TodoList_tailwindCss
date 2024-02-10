/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily:{
        Oswald: ['Oswald', "sans-serif",]
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

