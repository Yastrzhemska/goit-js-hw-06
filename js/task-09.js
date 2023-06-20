function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
console.log(button);

const span = document.querySelector('.color');
console.log(span);

const body = document.querySelector('body');
console.log(body);

button.addEventListener('click', changeColorHandler);

function changeColorHandler() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}