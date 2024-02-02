/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
      mono: ["Roboto Mono", "ui-monospace"],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      arrow: ">",
    },
    extend: {

      backgroundImage: {
        "frosted-glass-texture": "url('/frosted_glass.jpg')",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to bottom right, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 90%, rgba(0, 0, 0, 0.7) 100%)",
      },
      boxShadow: {
        "frosted-edge":
          "2px 2px 2px -1px rgba(255, 255, 255, 0.1), 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "cota-primary": "#1aba8b",
        "cota-on-primary": "#020811",
        "cota-highlight-on-primary": "#000000",
        "cota-secondary": "#ffffff",
        "cota-on-secondary": "#020811",
        "cota-highlight-on-secondary": "#1aba8b",
        "cota-bright-material": "#e0e0e0",
        "cota-on-bright-material": "#000000",
        "cota-dark-material": "#283139",
        "cota-on-dark-material": "#ffffff",
        "cota-highlight-on-dark-material": "#1aba8b",
        "cota-background": "#020811",
      },
    },
  },
  plugins: [],
};
