let h = document.querySelector("h2")
let btn = document.querySelector("button")
let div = document.querySelector("div")

btn.addEventListener("click",function() {
  let color = getColor();
  h.innerText = color
  div.style.backgroundColor = color
});

function getColor() {
  let r = Math.floor(Math.random()*255 + 1)
  let g = Math.floor(Math.random()*255 + 1)
  let b = Math.floor(Math.random()*255 + 1)
  let color = `rgb(${r},${g},${b})` 
  return color
}