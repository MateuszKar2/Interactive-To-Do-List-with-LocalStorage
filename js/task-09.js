function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//skrypt który zmienia kolor elementu body
//(poprzez style inline) po kliknięciu na button.change-color
//wyświetla wartość koloru w span.color
//Aby wygenerować losowy kolor użyć funkcji "getRandomHexColor".

const mainColor = document.querySelector("body");
const clickColor = document.querySelector('.change-color');
const changeColor = document.querySelector('.color');



clickColor.addEventListener("click", (e) => {
  const randomColor = getRandomHexColor();
  mainColor.style.backgroundColor = randomColor;
  changeColor.textContent = randomColor;
});


 
