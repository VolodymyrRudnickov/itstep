const btn = document.querySelector('.button');
const color = document.querySelectorAll('.color');

let count = 0;


function changeColor(clickCount) {

    color.forEach((item, index) => {
        item.classList.add('non-active');
        if (index === clickCount) {
            item.classList.remove('non-active')
        }
    });
}


btn.addEventListener('click', (e) => {
    count++;
    if (count === color.length) {
        count = 0;
    }
    changeColor(count);
});

