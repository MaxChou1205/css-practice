import "./style.css";

const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

const blurring = () => {
    count++;

    if (count > 99)
        clearInterval(timer);

    loadingText.innerHTML = `${count}%`
    loadingText.style.opacity = scale(count, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
}

let timer = setInterval(blurring, 20)
let count = 0;

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}