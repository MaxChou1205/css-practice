import "./style.scss";
// import Typed from "typed.js";

// var options = {
//   strings: ["Max Chou", "Web Developer"],
//   typeSpeed: 80,
//   backSpeed: 80,
//   loop: true
// };

// var typed = new Typed(".auto_input", options);

const typeElement = document.querySelector(".auto_input");
const text = "Max Chou";

let index = 1;

const writeText = () => {
  typeElement.innerText = text.slice(0, index);
  index++;

  if (index > text.length) index = 1;

  setTimeout(writeText, 300);
};

writeText();
