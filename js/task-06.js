
//korzystam z .addEventListener do obsługi zdarzenia blur
//wykorzystuje operator if-else
//jeżeli długość równa się wartość z data-length
//dodaje klasę .valid, jeżeli nie
//klasę .invalid


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
 