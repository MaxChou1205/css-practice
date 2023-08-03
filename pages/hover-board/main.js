import "./style.scss";

const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

const setColor = element => {
  const color = getRandomColor();
  element.style.background = colors[color];
  element.style.boxShadow = `0 0 2px ${colors[color]} 0 0 10px ${colors[color]}`;
};

const removeColor = element => {
  element.style.background = "#111";
  element.style.boxShadow = "0 0 2px #000";
};

const getRandomColor = () => {
  return Math.floor(Math.random() * colors.length);
};
