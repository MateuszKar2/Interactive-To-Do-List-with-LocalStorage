//policzyC liczbę kategorii <li.item>
//wprowadzić do wiersza poleceń liczbę kategorii
//znaleźć tekst nagłówka elementu <h2> i liczbę elementów <li>
//wprowadzić do wiersza poleceń






const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${title}
  Elements: ${elements}`);
});