const clickIn = document.querySelector('.change-color');
const backColor = document.querySelector('.color');
const body = document.querySelector('body');
console.log(clickIn);
console.log(backColor);
console.log(body.style.background);
// console.dir(fontOut);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const addColor = () => {
  backColor.textContent = getRandomHexColor();
  body.style.background = backColor.textContent;
};

clickIn.addEventListener('click', addColor);
