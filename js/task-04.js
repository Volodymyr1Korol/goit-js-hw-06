const minusBtn = document.querySelector(`[data-action="decrement"]`);
const plusBtn = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;

function increment() {
    counterValue += 1;
    document.getElementById('value').innerHTML = counterValue;
}

function decrement() {
    counterValue -= 1;
    document.getElementById('value').innerHTML = counterValue;
}

minusBtn.addEventListener('click', decrement);
plusBtn.addEventListener('click', increment);