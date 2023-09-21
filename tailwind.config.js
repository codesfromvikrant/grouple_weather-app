/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas": ["Bebas Neue", "sans-serif"]
      },
      colors: {
        "glassywhite": "#ffffff16",
      },
      screens: {
        "md01": "800px",
        // "md02": "768px",
      },
    },
    plugins: [],
  }
}
