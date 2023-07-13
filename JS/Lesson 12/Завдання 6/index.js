const btn = document.querySelector('.btn');
const progress = document.querySelector('progress');

btn.addEventListener('click', () => {
    progress.value += 5;
    // progress.value >= 100 ? progress.value = 0 : progress.value += 5;
});