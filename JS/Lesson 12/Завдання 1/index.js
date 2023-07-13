const out = document.querySelector('.out');
const button = document.querySelector('.btn');

function generateRandomNum(){
    const result = Math.floor(Math.random() * 100);
    out.textContent = result;
};

button.addEventListener('click', generateRandomNum);