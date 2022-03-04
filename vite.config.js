import customFiles from "./importFiles.js";
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  // plugins: [test],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...customFiles()
        // ani: resolve(__dirname, "pages/animated-menu-toggle/index.html")
      }
    }
  }
});
