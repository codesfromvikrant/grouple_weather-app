/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas": ["Bebas Neue", "sans-serif"],
        "Inter": ["Inter", "sans-serif"],
      },
      colors: {
        "glassywhite": "#ffffff25",
        "glassyblue": "#0871f11b",
      },
      screens: {
        "md01": "800px",
        // "md02": "768px",
      },
    },
    plugins: [],
  }
}
