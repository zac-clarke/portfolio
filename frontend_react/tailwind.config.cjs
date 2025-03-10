/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit", // just in time (loads ?? only hwn needed)
  theme: {
    extend: {
      colors: {
        primary: "#CD3B89",
        secondary: "#6F42C1",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        "3xl": "1600px",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      "3xl": "3000px",
    },
  },
};
