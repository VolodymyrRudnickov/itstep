const menu = document.querySelectorAll('.menu-item');
const drop = document.querySelectorAll('.drop');

drop.forEach(item => {
    item.classList.add('hide');
});

menu.forEach(item => {
    item.addEventListener('click', (e) => {
        const dropClass = Array.from(e.target.children);
        if(dropClass.length > 0) {
            dropClass.forEach(elem => {
                if(elem.classList.contains('drop')) {
                    elem.classList.remove('hide');
                    elem.classList.add('show', 'abs');
                }
            });
        }
        
    });
});

drop.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.classList.remove('show');
        item.classList.add('hide');
    });
});