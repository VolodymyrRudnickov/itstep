
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
    let btn = document.querySelectorAll('.button');
    let tabs = document.querySelectorAll('.tab-content');
    console.log(tabs);
    let blockData = '';
    btn.forEach(item => {
        item.addEventListener('click', function (event) {
            for (let block of tabs) {
                blockData = block.dataset.id;
                // console.log(blockData);
                if (blockData == event.target.id) {
                    block.classList.add('active');
                }
                if (blockData != event.target.id) {
                    block.classList.remove('active')
                }
            };
        });
    });
};

switchTabs();
switchColor();