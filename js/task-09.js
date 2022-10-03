function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor)


function changeColor() {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}


