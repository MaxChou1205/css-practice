import "./style.scss";

const canvas = document.querySelector("#canvas");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const sizeEl = document.querySelector("#size");
const colorEl = document.querySelector("#color");
const clearEl = document.querySelector("#clear");

const ctx = canvas.getContext("2d");

let size = +sizeEl.innerText;
let color = "black";
let isPressed = false;
let x, y;

canvas.addEventListener("mousedown", e => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", e => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", e => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) size = 5;

  updateSizeOnScreen();
});

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;

  updateSizeOnScreen();
});

colorEl.addEventListener("change", e => {
  color = e.target.value;
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const updateSizeOnScreen = () => {
  sizeEl.innerText = size;
};
