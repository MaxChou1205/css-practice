import "./style.css";

const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const containerElement = document.querySelector(".container");

openButton.addEventListener("click", () => {
  containerElement.classList.add("show-nav");
});

closeButton.addEventListener("click", () => {
  containerElement.classList.remove("show-nav");
});
