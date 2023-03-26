const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.log(list);

const result = ingredients.map(element => {
  const el = document.createElement('li');
  el.textContent = element;
  el.classList.add('item');
  return el;
});
console.log(result);
list.append(...result);

// function result1(x) {
//   return x
//     .map(el => {
//       return `<li class = 'item'>${el}</li>`;
//     })
//     .join('');
// }

// list.insertAdjacentHTML('afterbegin', result1(ingredients));

// list.innerHTML = result1(ingredients);

// list.innerHTML = '';
