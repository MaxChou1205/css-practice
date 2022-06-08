import "./style.scss";

const btnPlus = document.querySelector("#btnPlus");
const btnMessenger = document.querySelector("#btnMessenger");
const btnNotify = document.querySelector("#btnNotify");
const btnMore = document.querySelector("#btnMore");

const panels = document.querySelectorAll(".popover-panel");

window.addEventListener("click", e => {
  panels.forEach(p => {
    p.classList.remove("opacity-1");
    p.classList.add("opacity-0");
  });
});

const openPanel = (index, e) => {
  e.stopPropagation();

  panels.forEach((p, idx) => {
    if (idx === index) {
      p.classList.remove("opacity-0");
      p.classList.add("opacity-1");
    } else if (p.classList.contains("opacity-1")) {
      p.classList.remove("opacity-1");
      p.classList.add("opacity-0");
    }
  });
};

btnPlus.addEventListener("click", openPanel.bind(null, 0));
btnMessenger.addEventListener("click", openPanel.bind(null, 1));
btnNotify.addEventListener("click", openPanel.bind(null, 2));
btnMore.addEventListener("click", openPanel.bind(null, 3));
