import "./style.scss";

const counters = document.querySelectorAll(".counter");

const updateCounter = counter => {
  const target = +counter.getAttribute("data-target");
  const current = +counter.innerText;

  const increment = target / 200;

  if (current < target) {
    counter.innerText = `${Math.ceil(current + increment)}`;
    setTimeout(() => updateCounter(counter), 1);
  } else {
    counter.innerText = target;
  }
};

counters.forEach(counter => updateCounter(counter));
