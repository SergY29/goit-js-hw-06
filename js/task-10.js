const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const inputAmountRef = document.querySelector('#controls input');
const createDivRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
let amount = 0;
inputAmountRef.addEventListener('click', (e) => (amount = e.target.value));

function createBoxes() {
  const boxArray = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    const div = document.createElement("div");
    const hexColor = getRandomHexColor();
    div.style.backgroundColor = hexColor;
    div.style.width += `${size}px`;
    div.style.height += `${size}px`;
    div.classList.add("new-div");
    div.textContent = 'div';
    boxArray.push(div);
  }
  createDivRef.append(...boxArray);
  inputAmountRef.value = '';
}

function destroyBoxes() {
  createDivRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

