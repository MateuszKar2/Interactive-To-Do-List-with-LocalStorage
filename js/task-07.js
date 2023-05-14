//tworzę zależność między wielkością liter a przesuwanym suwakiem
//korzystam z funkcji pomocniczej 
//ustawiam zdarzenie input, jaki drugi argument przekazująć f.pomocniczą

const changeValue = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = changeValue.value + 'px';

const textResizing = () => {
    onText.style.fontSize = `${changeValue.value}px`
}

changeValue.addEventListener('input', textResizing);







 