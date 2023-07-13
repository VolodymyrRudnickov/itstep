const btn = document.querySelectorAll('.btn');
const block = document.querySelectorAll('.block');

console.log(btn);
console.log(block);

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        block.forEach((item, i) => {
            if (index === i) {
                item.classList.add('hide');
            }
        });
    });
});
