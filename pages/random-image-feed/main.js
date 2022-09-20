import "./style.css";

const container = document.querySelector('.container');
const rows = 5;
const randomNumber=()=>{
    return Math.floor(Math.random()*10)+300;
}

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/random/${randomNumber()}x${randomNumber()}`
    container.appendChild(img);
}


