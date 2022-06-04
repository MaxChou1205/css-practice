import "./style.css";

const loginButtonElement = document.querySelector("#login");
const modalElement = document.querySelector("#modal");
const modalContentElement = document.querySelector("#modal_content");
const closeButtonElement = document.querySelector("#close");

document.body.addEventListener("keyup", e => {
  if (e.key === "Escape") modalElement.classList.add("opacity-0", "scale-0");
});

loginButtonElement.addEventListener("click", () => {
  modalElement.classList.remove("opacity-0", "scale-0");
  window.scrollTo(0, modalContentElement.scrollHeight);
});

closeButtonElement.addEventListener("click", () => {
  modalElement.classList.add("opacity-0", "scale-0");
});

function renderList(id) {
  const ulElement = document.querySelector("#" + id);
  let svgColor = "text-[color:var(--primary)]";
  if (id === "list2") svgColor = "text-white";

  const listTemplate = `
  <li class="flex items-center mt-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mr-4 ${svgColor}"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
    Lorem, ipsum dolor.
  </li>`;

  let htmlStr = "";
  for (let i = 0; i < 5; i++) {
    htmlStr += listTemplate;
  }

  ulElement.innerHTML = htmlStr;
}

renderList("list1");
renderList("list2");
renderList("list3");
