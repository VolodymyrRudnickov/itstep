const btn = document.querySelector('.btn');
let count = +btn.textContent.match(/\d+/);


btn.addEventListener('click', (e) => {
    btn.textContent =  `Like ${++count}`;
});