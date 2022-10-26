import "./style.scss";

const textareaEl = document.querySelector("textarea");
const tagsEl = document.querySelector("#tags");

textareaEl.focus();
textareaEl.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    randomSelect();
    setTimeout(() => {
      e.target.value = "";
    }, 10);
  } else {
    createTags(e.target.value);
  }
});

const createTags = content => {
  let tags = content
    .split(",")
    .filter(tag => tag.trim())
    .map(tag => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.textContent = tag;
    tagEl.classList.add("tag");
    tagsEl.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = getRandomTag();
    if (randomTag) {
      activeTag(randomTag);
      setTimeout(() => {
        inactiveTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const randomTag = getRandomTag();
    activeTag(randomTag);
  }, times * 100);
};

const getRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const activeTag = tag => {
  tag.classList.add("active");
};

const inactiveTag = tag => {
  tag.classList.remove("active");
};
