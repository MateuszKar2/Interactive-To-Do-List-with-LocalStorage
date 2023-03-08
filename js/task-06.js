//napisać skrypt któy przy utracie focusu na pole input
//sprawdza jego zawartość na prawidłową liczbę symboli
//liczba symboli znajduje się w atrybucie data-length
//jeśli liczba symboli się zgadza border staje się zielony(valid)
//a jeżeli nie jest czerwony(invalid)

const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', event => {
    if (
        event.currentTarget.value.length ===
        Number(event.currentTarget.dataset.length)
    ) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
});