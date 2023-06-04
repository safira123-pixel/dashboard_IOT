module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_400: "#b5b5b5",
        black_900: "#000000",
        blue_gray_600: "#537188",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        gray_50: "#fffbfb",
        gray_100: "#f1f6f9",
        teal_100: "#b7dad7",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      boxShadow: {
        bs1: "5px 8px  3px 0px #b5b5b5",
        bs: "0px 10px  10px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
