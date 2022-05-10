document.addEventListener("scroll", () => {
  const containerElement = document.querySelector(".container");
  containerElement.classList.toggle("scroll", window.scrollY > 0);
});
