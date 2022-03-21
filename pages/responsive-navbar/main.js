const navElement = document.querySelector("#nav");
const toggleElement = document.querySelector(".menu-toggle");

toggleElement.addEventListener("click", () => {
  navElement.classList.toggle("active");
});
