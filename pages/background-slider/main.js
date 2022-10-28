import "./style.scss";

const images = [
  "https://picsum.photos/seed/1/800",
  "https://picsum.photos/seed/2/800",
  "https://picsum.photos/seed/3/800",
  "https://picsum.photos/seed/4/800"
];

const body = document.body;
const containerEl = document.querySelector(".container");
const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");
let activeIndex = 0;

leftButton.addEventListener("click", () => {
  activeIndex--;

  if (activeIndex < 0) activeIndex = images.length - 1;

  setBgImage();
  setActiveSlide();
});

rightButton.addEventListener("click", () => {
  activeIndex++;

  if (activeIndex > images.length - 1) activeIndex = 0;

  setBgImage();
  setActiveSlide();
});

const renderSlides = () => {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    slide.style.backgroundImage = `url(${image})`;
    containerEl.appendChild(slide);
  });
};

const setBgImage = () => {
  body.style.backgroundImage = `url(${images[activeIndex]})`;
};

const setActiveSlide = () => {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => {
    slide.classList.remove("active");
  });
  slides[activeIndex].classList.add("active");
};

renderSlides();
setBgImage();
