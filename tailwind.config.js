/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      fontFamily: {
        montserrat: ["montserrat"],
      },
      colors: {
        primary: "#14213d",
        secondary: "#fcd34d",
        third: "#14213D",
        gray_custom: "#E5E5E5",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
