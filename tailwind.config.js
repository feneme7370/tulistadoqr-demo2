/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          50: "#8CBFC9",
          100: "#85BBC6",
          200: "#478B99",
          300: "#43828F",
          400: "#3E7884",
          500: "#396F7A",
          600: "#34656F",
          700: "#2F5C65",
          800: "#2B545C",
          900: "#15292D",
          950: "#0B1618"
        }
      }
    },
  },
  plugins: [],
}

