const td = document.querySelectorAll('td');

td.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'burlywood';
    });
});

td.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
    });
});