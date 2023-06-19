// const selectors = {
//     counterValue: document.querySelector('#value'),
//     decrementBtn: document.querySelector('decrement'),
//     incrementBtn: document.querySelector('increment'),
// }

// console.log(selectors);

const counterValueEl = document.querySelector('#value');
console.log(counterValueEl);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

let counter = 0;

decrementBtn.addEventListener('click', handlerCountMin);
incrementBtn.addEventListener('click', handlerCountPlus);


function handlerCountPlus() {
    counter += 1;
    counterValueEl.textContent =`${counter}`;
}

function handlerCountMin() {
    counter -= 1;
    counterValueEl.textContent =`${counter}`;
}



