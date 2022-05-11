import "./style.css";

const container = document.querySelector(".container");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
let scale;

container.addEventListener("scroll", () => {
  if (container.scrollTop < window.innerHeight) {
    scale = 3;
  } else if (container.scrollTop > window.innerHeight * 2) {
    scale = 1;
  } else {
    scale =
      3 - (2 * (container.scrollTop - window.innerHeight)) / window.innerHeight;
    section2.setAttribute("style", "--scale:" + scale);
  }

  if (scale > 1) {
    section2.classList.add("sticky");
    section3.classList.add("static");
  } else {
    section2.classList.remove("sticky");
    section3.classList.remove("static");
  }
});
