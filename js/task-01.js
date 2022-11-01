const itemEl = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${itemEl.length}`);
itemEl.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});