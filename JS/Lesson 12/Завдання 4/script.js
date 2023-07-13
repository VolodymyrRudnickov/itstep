


function switchTabs() {
    let btn = document.querySelectorAll('.button');
    let tabs = document.querySelectorAll('.tab-content');
    let blockData = '';
    for (let item of btn) {
        item.addEventListener('click', function (event) {
            for (let block of tabs) {
                blockData = block.dataset.id;
                if (blockData == event.target.id) {
                    block.classList.add('active');
                    activeBlock = block.dataset.id;
                }
                if (blockData != event.target.id) {
                    block.classList.remove('active')
                }
            };
        });
    }

};




function switchColor() {
    let tabs = document.querySelectorAll('.tab-content');
    let parent = document.querySelector('.nav-block');
    let menuBtn = parent.querySelectorAll('.button');
    

    parent.addEventListener('click', (event) => {
        let target = event.target;
        let activeBlock;
        for (let i = 0; i < menuBtn.length; i++) {
            menuBtn[i].classList.remove('active-btn')
        }
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('active')) {
                activeBlock = tabs[i].dataset.id;
            };
            if (target.id == activeBlock) {
                target.classList.add('active-btn');
            };
        };
    });
};


switchTabs();
switchColor()


