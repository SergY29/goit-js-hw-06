const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor)


function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
  color.style.color = getRandomHexColor();
  // color.textContent = body.style.backgroundColor;
}


