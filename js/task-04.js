 
//mam licznik, składający się z elem. span i przycisków
//które po kliknięciu powinny zwiększać/zmniejszać się o jednostkę
//utworzę zmienną "counterValue"
//w któej bedzie przechowywana aktualna wartość licznika
//nadam jej wartość początkową 0
//dodać click listeners do przycisków, zwiekszając i zmniejszając wartość licznika
//aktualizacja interfejsu(widok HTML) nową wartością zmiennej "counterValue"
//po każdej jej zmianie

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



 
