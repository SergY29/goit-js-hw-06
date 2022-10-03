const input = document.querySelector('#validation-input');
const lengthCheck = input.getAttribute("data-length");

input.addEventListener('blur', onInputCheck);

function onInputCheck(event) {
    if (event.currentTarget.value.length < lengthCheck) {
        // console.log('проверка провалена');
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        // console.log('проверка пройдена');
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
}
