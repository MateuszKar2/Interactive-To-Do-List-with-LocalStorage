const { create } = require("lodash");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const boxes = document.addEventListener('#boxes');

function createBoxes(amount) {
  for (const element of amount ) {
   const box = document.createElement('div');
   
}
}

