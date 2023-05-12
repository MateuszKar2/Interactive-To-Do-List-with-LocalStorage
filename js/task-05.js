//Napisać skrypt
//Który przy wpisywaniu tekstu w pole "input" 
//wstawia jego aktualną wartość do pola "output"
//Jeżeli pole "input" jest puste 
//w "output" powinna być wartość "Anonymous"





const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', clickInputChange);

function clickInputChange(e) {
  textOutput.textContent = e.currentTarget.value;
  if (e.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  }
}
 