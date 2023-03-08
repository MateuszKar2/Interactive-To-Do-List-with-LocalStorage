//Napisać skrypt
//Który przy wpisywaniu tekstu w pole input wstawia jego aktualną wartość
//Jeżeli pole jest puste powinnien wyswietlić sie komunikat "Anonymous"


const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', clickInputChange);

function clickInputChange(e) {
  textOutput.textContent = e.currentTarget.value;
  if (e.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  }
}