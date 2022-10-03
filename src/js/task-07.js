const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


input.addEventListener('click', size);

function size() {
    textEl.style.fontSize = `${input.value}px`;
}
