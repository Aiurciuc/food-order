import { keyframes } from "@mui/styled-engine";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"],
      },
      animation: {
        upTranslate: "fadeSlide 0.3s ease-out forwards",
      },
      keyframes: {
        fadeSlide: {
          "0%": { transform: "translateY(4rem); opacity:0" },
          "100%": { transform: "translateY(0); opacity:1" },
        },
      },
    },
  },
  plugins: [],
};
