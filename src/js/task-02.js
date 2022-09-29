const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsContainerEl = document.querySelector('ul#ingredients');

const newEl = ingredients.map(ingridient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingridient;
  listEl.classList.add('item');
  return listEl;
});

ingridientsContainerEl.append(...newEl);



