const btns = document.querySelectorAll('.btn');
const tips = document.querySelectorAll('.tip');
const container = document.querySelector('.btn-container');
const triangle = document.querySelectorAll('.triangle');
const tipsHeigth = parseInt(window.getComputedStyle(tips[0]).height);

tips.forEach(elem => {
    elem.classList.add('hide');
});

btns.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        const idElem = e.target.dataset.btn;
        const top = e.target.getBoundingClientRect().height;
        const left = e.target.getBoundingClientRect().left; 

        if (e.target === btn) {
            if (idElem === tips[e.target.dataset.btn].id) {
                if (e.target.getBoundingClientRect().top < tipsHeigth) {// показываем подсказку снизу

                    tips[idElem].classList.remove('hide');
                    tips[idElem].classList.add('show', 'abs');
                    tips[idElem].style.left = left + 'px';
                    tips[idElem].style.top = `${top + 9}px`;
                    triangle[idElem].classList.add('triangle-top');

                } else if (e.target.getBoundingClientRect().top > tipsHeigth) { // показываем подсказку сверху
                    tips[idElem].classList.remove('hide');
                    tips[idElem].classList.add('show', 'abs');
                    tips[idElem].style.left = left + 'px';
                    tips[idElem].style.top = `-${top}px`;
                    triangle[idElem].classList.add('triangle-bottom');
                }
            }
        }

    });
});

btns.forEach(btn => {
    btn.addEventListener('mouseleave', (e) => {
        tips.forEach(elem => {
            elem.classList.remove('show', 'abs')
            elem.classList.add('hide');
        });
    })
})
// const btns = document.querySelectorAll('.btn');
// const tips = document.querySelectorAll('.tip');
// const container = document.querySelector('.btn-container');
// const triangle = document.querySelectorAll('.triangle');
// const tipsHeigth = parseInt(window.getComputedStyle(tips[0]).height);

// tips.forEach(elem => {
//     elem.classList.add('hide');
// });

// btns.forEach(btn => {
//     btn.addEventListener('mouseenter', (e) => {
//         if (e.target === btn) {
//             let idElem = e.target.dataset.btn;
//             tips.forEach(elem => {
//                 elem.classList.remove('show');
//                 elem.classList.add('hide');
//             });

//             if (e.target.dataset.btn === tips[e.target.dataset.btn].id) {
//                 if (e.target.getBoundingClientRect().top < tipsHeigth) {// показываем подсказку снизу

//                     tips[e.target.dataset.btn].classList.remove('hide');
//                     tips[e.target.dataset.btn].classList.add('show');
//                     tips[e.target.dataset.btn].style.position = 'absolute';
//                     tips[e.target.dataset.btn].style.left = (e.target.getBoundingClientRect().left) + 'px';
//                     tips[e.target.dataset.btn].style.top = `${e.target.getBoundingClientRect().height + 9}px`;
//                     triangle[e.target.dataset.btn].classList.add('triangle-top');

//                 } else if (e.target.getBoundingClientRect().top > tipsHeigth) { // показываем подсказку сверху
//                     tips[e.target.dataset.btn].classList.remove('hide');
//                     tips[e.target.dataset.btn].classList.add('show');
//                     tips[e.target.dataset.btn].style.position = 'absolute';
//                     tips[e.target.dataset.btn].style.left = (e.target.getBoundingClientRect().left) + 'px';
//                     tips[e.target.dataset.btn].style.top = `-${e.target.getBoundingClientRect().height}px`;
//                     triangle[e.target.dataset.btn].classList.add('triangle-bottom');
//                 }
//             }
//         }

//     });
// });

// btns.forEach(btn => {
//     btn.addEventListener('mouseleave', (e) => {
//         tips.forEach(elem => {
//             elem.classList.add('hide');
//         });
//     })
// })


