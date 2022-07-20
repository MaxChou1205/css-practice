let files = import.meta.glob("/pages/*/*.html");
for (let filePath in files) {
  let paths = filePath.split("/");

  const liElement = document.createElement("li");
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", `.${filePath}`);
  linkElement.textContent = paths[2];
  liElement.appendChild(linkElement);
  document.querySelector("#menu").appendChild(liElement);
}
