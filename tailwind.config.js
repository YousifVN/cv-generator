/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
        "playfair-display": ["Playfair Display", "sans-serif"],
        "sedan": ["Sedan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
