//napisać skrypt
// który reaguje na zmianę wartości input#font-size-control"
//zmienia styl inline span#text
//aktualizuje właściwość font-size
//podczas przesuwania paska bedzie się zmieniał rozmiar tekstu


const changeValue = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = changeValue.value + 'px';

const textResizing = () => {
    onText.style.fontSize = `${changeValue.value}px`
};

changeValue.addEventListener('input', textResizing);
