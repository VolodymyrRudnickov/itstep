
document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('.parent');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', (e) => {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = generateRandomColor(0, 255);
        parent.appendChild(block);
    })

    parent.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target !== parent) {
            e.target.style.display = 'none';
        }

    })

    function generateRandomColor(min, max) {
        return `rgb(${Math.floor(Math.random() * (max - min + 1) + min)},${Math.floor(Math.random()
            * (max - min + 1) + min)},${Math.floor(Math.random() * (max - min + 1) + min)}`;

    }
});


