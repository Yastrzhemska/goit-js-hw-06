const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', submitHandler);

function submitHandler(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value) {
    const message = 'please, fill in all fields';
    alert(message) 
    }
    else {
        const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    }

    form.reset();
}

