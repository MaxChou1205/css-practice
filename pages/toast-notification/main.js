import "./style.css";

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];
const types = ["info", "success", "error"];

const btn = document.querySelector(".btn");
const toasts = document.querySelector("#toasts");

btn.addEventListener("click", () => appendToast());

const appendToast = (message = null, type = null) => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(type || renderType());
  toast.innerText = message || renderMessage();

  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
};

const renderMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const renderType = () => {
  return types[Math.floor(Math.random() * types.length)];
};
