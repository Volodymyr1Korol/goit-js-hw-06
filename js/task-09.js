function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorValue = document.querySelector('.color');

changeBtnEl.addEventListener('click', event => {
    let color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    colorValue.textContent = color;

});