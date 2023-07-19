const num = document.querySelector('.num');
const incr = document.querySelector('.incr');
const decr = document.querySelector('.decr');
const out = document.querySelector('.out');

let count = 0;


incr.addEventListener('click', () => {
    count++
    num.textContent = count;

});

decr.addEventListener('click', () => {
    if (count <= 0) {
        count = 0;
    } else {
        count--;
    }

    num.textContent = count;

    console.log(count);

});


num.textContent = count;