const out = document.querySelector('.out');
const coordX = document.querySelector('.x');
const coordY = document.querySelector('.y');
const click = document.querySelector('.click');

function showCoord(x, y) {
    coordX.textContent = `x = ${x}`;
    coordY.textContent = `y = ${y}`;
};

out.addEventListener('mousemove', (e) => {
    showCoord(e.x, e.y);
});

out.addEventListener('click', () => {
    click.textContent = 'left click';
});

out.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    click.textContent = 'right click';
});
