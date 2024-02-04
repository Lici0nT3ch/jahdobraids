/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1BB28C",
        yellowColor: "#FED45B",
        grayWhiteColor: "#EFEEEA",
        salmonColor: "E86A58",
        headingColor: "#23362B",
        textColor: "#9BC7C5",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

