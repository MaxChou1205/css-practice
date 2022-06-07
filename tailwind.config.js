module.exports = {
  content: [
    "./index.html",
    "./pages/**/index.html",
    "./pages/**/*.js"
    // "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // safelist: [/(bg|ring)-(.*)-(\d{1}0{1,2})/],
  theme: {
    extend: {
      colors: {
        "fb-bg": "#18191a",
        "fb-header": "#242526",
        "fb-input": "#3a3b3c",
        "fb-popover": "#3e4042",
        "fb-active": "#323436",
        "fb-card": "#242526",
        fb: "#2e89ff"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
