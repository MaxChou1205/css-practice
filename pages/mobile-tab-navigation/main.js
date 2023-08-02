import "./style.scss";

const liElemet = document.querySelectorAll("li");
const contentElement = document.querySelectorAll(".content");

liElemet.forEach((li, idx) => {
  li.addEventListener("click", () => {
    liElemet.forEach(li => {
      li.classList.remove("active");
    });
    li.classList.toggle("active");

    contentElement.forEach(content => {
      content.classList.remove("show");
    });
    contentElement[idx].classList.add("show");
  });
});
