import "./style.scss";

const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter',()=>{
    left.style.width='75%'
})
left.addEventListener('mouseleave',()=>{
    left.style.width='50%'
})

right.addEventListener('mouseenter',()=>{
    right.style.width='75%'
})
right.addEventListener('mouseleave',()=>{
    right.style.width='50%'
})
