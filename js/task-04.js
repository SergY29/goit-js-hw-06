const refs = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

function decrementUI() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

function incrementUI() {
    counterValue += 1;
    refs.value.textContent = counterValue;
};


refs.buttonDecrement.addEventListener('click', decrementUI);
refs.buttonIncrement.addEventListener('click', incrementUI);

