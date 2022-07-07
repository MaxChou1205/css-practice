import "./style.css";

const panelElement = document.querySelectorAll(".panel");

panelElement.forEach(p => {
  p.addEventListener("click", () => {
    if (p.classList.contains("active")) return;
    panelElement.forEach(panel => panel.classList.remove("active"));
    p.classList.add("active");
  });
});
