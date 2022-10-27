import "./style.scss";

const navEl = document.querySelector("nav");
const closeEl = document.querySelector(".close");

closeEl.addEventListener("click", () => {
  navEl.classList.toggle("hide");
});
