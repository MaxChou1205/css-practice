document.addEventListener("scroll", () => {
  const containerElement = document.querySelector(".container");
  containerElement.classList.toggle("scroll", window.scrollY > 0);
});

let active = 0;
let inActive = 0;
const listItems = document.querySelectorAll(".kv_item");

setInterval(() => {
  active = (active + 1) % listItems.length;
  inActive = (active - 2 + listItems.length) % listItems.length;
  listItems[active].classList.add("active");
  listItems[inActive].classList.remove("active");
}, 5000);
