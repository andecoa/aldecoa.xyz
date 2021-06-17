const defaultTheme = require("tailwindcss/defaultTheme");

const toPurge =
  process.env.NODE_ENV === "development"
    ? []
    : [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
      ];

module.exports = {
  jit: true,
  purge: toPurge,
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
