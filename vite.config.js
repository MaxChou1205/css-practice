const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        list_hover_effects: resolve(
          __dirname,
          "pages/list-hover-effects/index.html"
        ),
        animated_menu_toggle: resolve(
          __dirname,
          "pages/animated-menu-toggle/index.html"
        ),
        custom_checkbox: resolve(__dirname, "pages/custom-checkbox/index.html")
      }
    }
  }
});
