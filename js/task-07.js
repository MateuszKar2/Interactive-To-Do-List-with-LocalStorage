//napisać skrypt
// który reaguje na zmianę wartości input#font-size-control" 
//poprzez zmianę stylu inline span#text, aktualizując właściwość font-size
//podczas przesuwania suwaka bedzie się zmieniał rozmiar tekstu


const input = document.querySelector('#font-size-control');















const changeValue = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = changeValue.value + 'px';

const textResizing = () => {
    onText.style.fontSize = `${changeValue.value}px`
};

changeValue.addEventListener('input', textResizing);


 