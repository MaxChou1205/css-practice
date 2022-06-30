import "./style.scss";
// import Typed from "typed.js";

var options = {
  strings: ["Max Chou", "Web Developer"],
  typeSpeed: 100
  // backSpeed: 80,
  // loop: true
};

// var typed = new Typed(".auto_input", options);

class Typed {
  #typeElement;
  #options;
  #stringIndex;
  #charIndex;
  #reverseFlag;
  #currentString;

  constructor(typeElement, options) {
    this.#typeElement = document.querySelector(typeElement);
    this.#options = options;
    this.#stringIndex = 0;
    this.#charIndex = 1;
    this.#reverseFlag = false;
    this.#currentString = this.#options.strings[this.#stringIndex];
  }

  writeText() {
    this.#typeElement.innerText = this.#currentString.slice(0, this.#charIndex);

    this.#reverseFlag ? this.#charIndex-- : this.#charIndex++;

    if (this.#charIndex > this.#currentString.length) {
      this.#reverseFlag = true;
    } else if (this.#charIndex == 0) {
      this.#reverseFlag = false;
      this.#stringIndex++;
      if (this.#stringIndex >= this.#options.strings.length)
        this.#stringIndex = 0;
      this.#currentString = this.#options.strings[this.#stringIndex];
    }

    setTimeout(() => this.writeText(), this.#options.typeSpeed);
  }
}

let typed = new Typed(".auto_input", options);
typed.writeText();

// const typeElement = document.querySelector(".auto_input");
// const text = "Max Chou";

// const writeText = () => {
//   typeElement.innerText = text.slice(0, index);

//   reverseFlag ? index-- : index++;

//   if (index > text.length) {
//     // index = 1;
//     reverseFlag = true;
//   } else if (index == 0) {
//     reverseFlag = false;
//   }

//   setTimeout(writeText, 300);
// };

// writeText();
