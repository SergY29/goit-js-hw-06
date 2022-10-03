const formEl = document.querySelector('.login-form');
const lengthCheck = formEl.getAttribute("data-length");

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
        // console.log('нету ничего')
        alert('Все поля должны быть заполнены!');
        return;
    }
    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const userData = {
        mail,
        password,
    };
    console.log(userData);

    formEl.reset();
}
