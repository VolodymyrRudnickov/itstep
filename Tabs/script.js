
function switchColor() {
    const btn = document.querySelectorAll('.button');
    const tabs = document.querySelectorAll('.tab-content');
    btn.forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event.target);
            for (let block of tabs) {
                let activeBlock = ''; // переменная,куда складывается id блока с классом active
                if (block.classList.contains('active')) {
                    activeBlock = block.id; // присваиваем id нужного элемента
                };
                if (event.target.id == activeBlock) { // если класс  блока и  id совпадают нажатой кнопки  - добавляем класс
                    event.target.classList.add('active-btn')
                };
                if (item.id !== activeBlock || item.nextElementSibling == null) {
                    // если id не совпадают и у последнего элемента нету  sibling-элемента - отбираем класс
                    item.classList.remove('active-btn');
                };
            };

        })
    });

};


function switchTabs() {
    const btn = document.querySelectorAll('.button');
    const tabs = document.querySelectorAll('.tab-content');
    let className = '';
    btn.forEach(item => {
        item.addEventListener('click', function (event) {
            className = event.target.id; // добавляем в переменную id кнопки,по которой кликнули
            for (let block of tabs) {
                if (block.id == className) { // проверяем id блока,если верно - добавляем класс
                    block.classList.add('active');
                }
                if (block.id != className) { // если нет - отбираем класс
                    block.classList.remove('active');
                };
            };
        });
    });
};

switchTabs();
switchColor();