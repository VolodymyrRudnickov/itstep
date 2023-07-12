const ball = document.querySelector('.ball');
const field = document.querySelector('.field');
let t = 0;
let l = 0;
function moveBall(x, y) {
    l = x - (ball.clientWidth / 2);
    t = y - (ball.clientWidth / 2);

    if (x < 75) {
        l = 75;
        t = y;
    }
    if (x > window.screen.availWidth - 75) {
        l = (window.screen.availWidth - 75) - ball.clientWidth;
        t = y;
    }
    ball.style.top = `${t}px`;
    ball.style.left = `${l}px`;
}

field.addEventListener('click', (e) => {
    moveBall(e.pageX, e.pageY);
});
