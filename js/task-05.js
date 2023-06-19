const textInput = document.querySelector('#name-input');
console.log(textInput);

const textTitle = document.querySelector('#name-output');
console.log(textTitle);

textInput.addEventListener('input', (evt) => {
 if (textInput.value) {
    result = textTitle.textContent = evt.currentTarget.value;
 }
 else {
     result = textTitle.textContent = "Anonymous";
 }
    
}
);


