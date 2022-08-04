import "./style.css";

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector("#progress");

let currentActive = 0;

const update = () => {
  circles.forEach((circle, index) => {
    if (index <= currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  progressBar.style.width = (currentActive / (circles.length - 1)) * 100 + "%";

  if (currentActive <= 0) prevBtn.disabled = true;
  else if (currentActive >= circles.length - 1) nextBtn.disabled = true;
  else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

prevBtn.addEventListener("click", () => {
  if (currentActive <= 0) return;

  currentActive--;
  update();
});

nextBtn.addEventListener("click", () => {
  if (currentActive >= circles.length - 1) return;

  currentActive++;
  update();
});
