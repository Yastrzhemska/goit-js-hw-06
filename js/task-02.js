const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const productsContainerEl = document.querySelector('#ingredients')


const li = document.createElement('li');
li.textContent = 'Potatoes';
li.classList.add('item');

console.log(li);

const li2 = document.createElement('li');
li2.textContent = 'Mushrooms';
li2.classList.add('item');

console.log(li2);

const li3 = document.createElement('li');
li3.textContent = 'Garlic';
li3.classList.add('item');

console.log(li3);

const li4 = document.createElement('li');
li4.textContent = 'Tomatos';
li4.classList.add('item');

console.log(li4);

const li5 = document.createElement('li');
li5.textContent = 'Herbs';
li5.classList.add('item');

console.log(li5);

const li6 = document.createElement('li');
li6.textContent = 'Condiments';
li6.classList.add('item');

console.log(li6);

const liItem = [li, li2, li3, li4, li5, li6];

productsContainerEl.append(...liItem);