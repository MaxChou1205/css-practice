import "./style.css";

const goBackElement = document.createElement("a");
goBackElement.setAttribute("class", "go_back");
goBackElement.setAttribute("href", "/");
goBackElement.textContent = "Back";
document.querySelector("body").appendChild(goBackElement);
