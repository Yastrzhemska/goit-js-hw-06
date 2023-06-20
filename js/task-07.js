const input = document.querySelector('#font-size-control');
console.log(input);

const span = document.querySelector('#text');
console.log(span);


input.addEventListener('input', () => {
    const inputValue = input.value;
    console.log(inputValue);
    span.style.fontSize = `${inputValue}px`;
})



