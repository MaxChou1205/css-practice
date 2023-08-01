import "./style.scss";

const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

const runAnimation = () => {
  nums.forEach((num, idx) => {
    num.addEventListener("animationend", e => {
      if (e.animationName === "goIn" && idx !== nums.length - 1) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
};

const resetDom = () => {
  nums.forEach(num => {
    num.classList.value = "";
  });

  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums[0].classList.add("in");
};

runAnimation();

replay.addEventListener("click", () => {
  resetDom();
  runAnimation();
});
