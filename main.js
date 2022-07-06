// import "./style.css";
// const fs = require("fs");
// import fs from "browserify-fs";
// var files = fs.readdirSync("./pages");
// console.log(files);
// const requireModule = import.meta.globEager("/pages/*");

// for (const key in requireModule) {
//   debugger;
//   console.log(key);
// }

// import path from "path";

// const dirname = path.dirname("./pages");

// console.log(dirname);

let folders = [
  "list-hover-effects",
  "animated-menu-toggle",
  "custom-checkbox",
  "animated-website",
  "switch",
  "text-hover-effects",
  "sidebar-menu",
  "responsive-navbar",
  "progress-bar",
  "trillo-flexbox",
  "auto-typing",
  "tours-website",
  "image-scale-carousel",
  "scroll-scale",
  "animated-navigation-menu",
  "facebook-ui",
  "tailwind-pricing-page",
  "toast-notification",
  "form-input-wave",
  "scroll-animation"
];

folders.forEach(folderName => {
  const liElement = document.createElement("li");
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", `./pages/${folderName}/index.html`);
  linkElement.textContent = folderName;
  liElement.appendChild(linkElement);
  document.querySelector("#menu").appendChild(liElement);
});
