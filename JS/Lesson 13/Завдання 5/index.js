const countries = [
    'Argentina',
    'Australia',
    'Belgium',
    'Canada',
    'Cameroon',
    'Costa Rica',
    'Egypt',
    'Estonia',
    'Germany',
    'Ireland',
    'Italy',
    'Ukraine',
    'United States of America',
    'Great Britain',
];

const input = document.querySelector('input');
const list = document.querySelector('.list');


input.addEventListener('input', (e) => {
    list.innerHTML = '';
    out = input.value.toLowerCase();
    const filter = countries.filter(item => {
        if (item.toLowerCase().includes(out) && out !== '') {
            return true
        }
    });

    filter.length = 10;
    
    
    if (filter.length > 0) {
        filter.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('list-group-item')
            li.textContent = item;
            list.appendChild(li);
        });

    }

    list.addEventListener('click', (e) => {
        input.value = e.target.textContent;
        if (input.value === e.target.textContent) {
            Array.from(list.children).forEach(item => {
                item.style.display = 'none';
            });
        }

    });
});


