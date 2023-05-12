

// liczę LICZBĘ kategorii <li.item>
// wprowadzam do wiersza poleceń LICZBĘ kategorii
// ITERUJĘ za pomocą pętli forEach
// ZNAJDUJĘ nagłówki i zwracam zawartość tekstową za pomocą ".textContent"
// ZNAJDUJĘ i liczę liczbę elementów <li> za pomocą ".length"
// wprowadzam do wiersza poleceń NAGŁÓWEJ i LICZBĘ elementów
 



const amount = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
const title = item.querySelector('h2').textContent;
const elements = item.querySelectorAll('li').length;

console.log(`Category: ${title} Elements: ${elements}`);
});