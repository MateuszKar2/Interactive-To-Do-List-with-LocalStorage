//napisać skrypt zarządzający formularzem logowania
//opracowanie przesłania formularza form.login-form zgodnie ze zdarzeniem submit
//podczas przesyłania strona nie powinna się odswieżać
//nie uzupełnione pole mają zawierać alert przypominający o uzupełnieniu
//po wysłaniu formularza przez użytkownika pobieram wartości pól jako obiekt
//gdzie nazwą pola będzie nazwa właściwości
//wartością pola- wartość właściwości
//dostęp do elementów formularza za pomocą właściwości elements
//obiekt umieszczam w wierszu poleceń 
//należy wyczyścić wartość pól formularza za pomocą reset


const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const formData = {};
    for (const element of formLogin.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
        if (formData.email && formData.password) {
            console.log(formData);
            formLogin.reset();
        } else {
            alert('all fields should be completed');
        }
});

 