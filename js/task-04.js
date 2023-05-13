 
//mam licznik, składający się z elem. span i przycisków
//które po kliknięciu powinny zmniejszać/zwiększać się o jednostkę
//utworzę zmienną pomocniczą "counterValue" z aktualną wartością licznika tj."0"
//dodaje detektor zdarzenia .addEventListener
//pierwszym argumentem będzie "click" - moja nazwa zdarzenia
//drugim funkcja callback, 
//której przkazuje aby zmieniała warość "counterValue"(-=1/ +=1)
//oraz zapisywała wartość "counterValue" w zmiennej "value"


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




















 
