const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
        gray: colors.coolGray,
      },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      translate: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
