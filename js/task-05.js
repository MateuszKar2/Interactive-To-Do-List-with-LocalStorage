//Tekst wpisany w "input" przekazuje aktualną wartość w pole "output"
//Jeżeli "input" jest puste, w "output" powinna być wartość "Anonymous"
//Dodaje dektor zdarzenia, pierwszy argument - input
//Tworzę funkcję pomocniczą "clickInputChange"
//Przekazuje funkcji klasę bazową "Event" => (e)
//Zawatość tekstową "textOutput" = 
//(e).zwraca (wartość- value) elementu którego detektor zdarzeń wyzwolił zdarzenie
//Jeżeli nie wywołał żadnej wartośći, wtedy zawartość tekstowa = XYZ
//Metoda .trim() - usuwa spację po obu stronach


const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


textInput.addEventListener('input', clickInputChange);

function clickInputChange(e) {
  textOutput.textContent = e.currentTarget.value;
  if (e.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  }
}








