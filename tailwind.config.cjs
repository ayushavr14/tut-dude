/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transperant:"rgba(0,0,0,0)",
      gray: "#4d4d4d",
      purple: "#800080",
      black: "#000000",
      white: "#ffffff",
      baby_pink: "#eeaeae",
      orange: "#ff864d",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
