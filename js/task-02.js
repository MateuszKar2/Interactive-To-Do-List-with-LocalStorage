const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//mam tablicę ciągów
//w HTML mam pustą listę <ul id="ingredients"></ul>
// przy pomocy metody .map
//do każdego elementu tablicy utworzę oddzielny element <li> 
//użyć metody document.createElement()
//dodać nazwę elementu (string z tablicy) jako zawartość tekstową <li>
//dodać do elementu klasę .item
//umieścić wszystkie elementy <li> na liście <ul> podczas jednej operacji
//dołączam za pomocą metody .append

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
return listItem;

});
 console.log(items);
 ingredientsList.append(...items);





