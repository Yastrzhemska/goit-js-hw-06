const textInput = document.querySelector('#name-input');
console.log(textInput);

const textTitle = document.querySelector('#name-output');
console.log(textTitle);


textInput.addEventListener('input', (evt) => {
    if (textInput.value) {
    textTitle.textContent = evt.currentTarget.value;
}
else {
    textTitle.textContent = "Anonymous";
}
    
}
);


