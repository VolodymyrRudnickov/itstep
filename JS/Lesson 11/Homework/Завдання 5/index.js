const item = document.querySelectorAll('.list-item');
const list = document.querySelector('.books');

function changeBgColor(event) {
    item.forEach(elem => {
        elem.classList.remove('active');
    });
    event.target.classList.add('active');
}

list.addEventListener('click', changeBgColor);


function removeClassFromEscape(event) {
    if (event.code === 'Escape') {
        item.forEach(elem => {
            elem.classList.remove('active');
        });
    };
};
document.addEventListener('keydown', removeClassFromEscape)


function removeClassByOutsideClick(event) {
    item.forEach(elem => {
        if (!(event.target === elem)) {
            elem.classList.remove('active');
        };
    });
}
document.addEventListener('click', removeClassByOutsideClick);