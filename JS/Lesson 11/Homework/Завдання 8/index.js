const triangle = document.querySelector('.triangle');
const text = document.querySelector('.text');

let isPress = false;


triangle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isPress = true;// если кнопка нажата над треугольником 
    changePos(e.pageX, e.pageY);
    changeSize(e.pageX, e.pageY);
});

document.addEventListener('mousemove', (e) => {
    if (isPress) { // если кнопка нажата 
        changePos(e.pageX, e.pageY);
        changeSize(e.pageX, e.pageY);
    }
});

document.addEventListener('mouseup', (e) => {
    isPress = false; // когда отпустили кнопку
});

// меняем координаты треугольника на координаты мышки
function changePos(x, y) {
    triangle.style.left = (x - 30) + 'px';
    triangle.style.top = (y - 30) + 'px';

};


// меняем ширину и высоту блока в зависимости от координат мышки
function changeSize(x, y) {
    text.style.width = (x - 30) + 'px';
    text.style.height = (y - 30) + 'px';
};