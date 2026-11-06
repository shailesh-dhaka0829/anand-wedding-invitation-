/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "serif-luxury": ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        "alex-brush": ['"Alex Brush"', "cursive", "serif"],
        "cinzel": ['"Cinzel"', "serif"],
        "cormorant": ['"Cormorant Garamond"', "Georgia", "serif"],
        "great-vibes": ['"Great Vibes"', "cursive", "serif"],
        "italiana": ['"Italiana"', '"Cormorant Garamond"', "serif"],
        "sans-body": ['"Montserrat"', '"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
