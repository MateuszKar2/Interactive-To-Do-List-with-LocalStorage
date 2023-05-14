//ustawiam zdarzenie submit
//za pomocą prevent Default strona nie będzie się odświerzać
//korzystam z interfejsu formData aby zakokowac dane i pobrać dane jako obiekt
//wykorzystuję pętle for, literując po elementach
//jeżeli imie się zgadza
//wtedy przy prawidłowo podanym emailu i hasle loguje się do "obiektu"
//wykorzystuje rest do zresetowania pół
//jeżeli nie wszystkie pola zostaną wypołnione pojawia się alert :)


const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', event => {
    e.preventDefault();
    const formData = {};
    for (const element of formLogin.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
        if (formData.email && formData.password) {
            console.log(formData);
            formData.reset();
        } else {
            alert('all fields should be completed');
        }
});


 