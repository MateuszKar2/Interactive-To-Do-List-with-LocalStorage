
//korzystam z .addEventListener do obsługi zdarzenia
//zdarzenie blur(utrata focusu na pole input)
//sprawdzić czy wartość wprowadzona przez użytkownika spełnia warunek walidacji
//ustawiam zdarzenie blur na zmienną(value) o znanej długości (length) 
//jeżeli liczba znaków zgadza się z powyższym to dadaje klasę 'valid' (zielony)
//jeżęli nie, otrzymuje klasę 'invalid' (czerwony)



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
 