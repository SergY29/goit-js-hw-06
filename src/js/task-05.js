const refs = {
    output: document.querySelector('#name-output'),
    input: document.querySelector('#name-input'),
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value) {
        refs.output.textContent = event.currentTarget.value
    } else {
        refs.output.textContent = "Anonymous"
    }
};

