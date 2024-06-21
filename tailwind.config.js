/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '16px',
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1216px",
    },
    extend: {
      colors: {
        colorWhite: "#e7e9ea",
        colorBlack: "#0f1419",
        colorBlue: "#1d9bf0",
      },
      boxShadow: {
      },
    },
    fontFamily: {
    }
  },
  plugins: [],
}