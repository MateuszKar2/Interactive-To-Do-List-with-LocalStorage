 //utworzyć zmienną
//w któej bedzie przechowywana aktualna wartość
//dodać click listeners do przycisków, zwieksza i zmniejsza wartość
//aktualizacja interfejsu nową wartością zmiennej 

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
