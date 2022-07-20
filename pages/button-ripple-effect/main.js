import "./style.css";

const button = document.querySelector(".btn");

button.addEventListener("click", e => {
  // let rect = e.target.getBoundingClientRect();
  // let x = e.clientX - rect.left;
  // let y = e.clientY - rect.top;

  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let span = document.createElement("span");
  span.classList.add("circle");
  span.style.left = x + "px";
  span.style.top = y + "px";
  button.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 500);
});
