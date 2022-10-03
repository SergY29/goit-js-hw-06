const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


input.addEventListener('input', size);

function size() {
    textEl.style.fontSize = `${input.value}px`;
}



// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.