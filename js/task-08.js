const formEL = document.querySelector('.login-form').addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Будь ласка, заповніть усі поля форми!:)');
    }
    const userData = { email: email.value, password: password.value };
    console.log(userData);
    event.currentTarget.reset();
}