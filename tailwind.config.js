module.exports = {
  content: [
    "./index.html",
    "./pages/**/index.html",
    "./pages/**/*.js"
    // "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // safelist: [/(bg|ring)-(.*)-(\d{1}0{1,2})/],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
