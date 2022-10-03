const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const inputAmountRef = document.querySelector('#controls input');
const createDivRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  document.createElement("div");
  ;
}

function destroyBoxes(amount) {
  createDivRef.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


