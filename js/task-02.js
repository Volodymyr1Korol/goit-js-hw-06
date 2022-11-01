const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listEl = document.querySelector("#ingredients");
// const newArr = [];

// ingredients.forEach((el) => {
//     const newListEl = document.createElement('li');
//     newListEl.classList.add('item');
//     newListEl.textContent = el;
//     newArr.push(newListEl);
// });




const newArr2 = ingredients.reduce((acc, el) => {
    const newListEl = document.createElement('li');
    newListEl.classList.add('item');
    newListEl.textContent = el;
    acc.push(newListEl);
    return acc;
}, []);

listEl.append(...newArr2);