const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//mam elementy tablicy
//do każdego elementu tablicy dodac oddzielny element <li> 
//dodać nazwę elementu jako zawartość tekstową
//dodać do elementu klasę .item
//dodać wszystkie elementy <li> na liście podczas jednej operacji


const ingredientsList = document.querySelector(`#ingredients`);

const items = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;

  return listItem;
});

console.log(items);

ingredientsList.append(...items);
 