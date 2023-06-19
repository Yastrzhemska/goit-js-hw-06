const input = document.querySelector('#validation-input');
console.log(input);

const length = input.getAttribute('data-length');
console.log(length);



function inputBlurHandler() {
    const inputLength = input.value.length;
    if (Number(inputLength) === Number(length)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
        }
    else {
        input.classList.remove('valid')
        input.classList.add('invalid')
        }

};

input.addEventListener('blur', inputBlurHandler);


