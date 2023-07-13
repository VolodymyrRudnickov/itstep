const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
    text.classList.toggle('hide');
})