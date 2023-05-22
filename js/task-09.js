//mam funkcje pomocniczą do generowania losowego koloru
//tworze zdarzenie na click
//przypisuje mojej zmiennej funkcje losowego koloru
//wstawiam background i text do html
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const mainColor = document.querySelector("body");
const clickColor = document.querySelector('.change-color');
const changeColor = document.querySelector('.color');


clickColor.addEventListener('click', (e) => {
  const randomColor = getRandomHexColor();
  mainColor.style.backgroundColor = randomColor;
  changeColor.textContent = randomColor;
});


 
