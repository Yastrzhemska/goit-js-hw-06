const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const productsContainerEl = document.querySelector('#ingredients')


const productsItem = ingredients.map(name =>
  `<li class="item">
  ${name}
  </li>`).join('')
  
console.log(productsItem);
productsContainerEl.insertAdjacentHTML('afterbegin', productsItem)