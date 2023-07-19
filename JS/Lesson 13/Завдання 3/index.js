const colorContainer = document.querySelector('.color-container');
const text = document.querySelector('.text');

for (let i = 0; i < 20; i++) {
    let div = document.createElement('div');
    div.classList.add('color');
    div.style.backgroundColor = generateRandomColor(0, 255);
    colorContainer.append(div);
}

colorContainer.addEventListener('click', (e) => {
    text.style.color = e.target.style.backgroundColor;
});


function generateRandomColor(min, max) {
    return `rgb(${Math.floor(Math.random() * (max - min + 1) + min)},${Math.floor(Math.random()
        * (max - min + 1) + min)},${Math.floor(Math.random() * (max - min + 1) + min)}`;

}