import "./style.css";

const boxs = document.querySelectorAll(".box");
const checkBoxs = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxs.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

checkBoxs();

window.addEventListener("scroll", checkBoxs);
