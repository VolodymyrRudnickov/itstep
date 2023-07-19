const btn = document.querySelector('.btn');
const container = document.getElementById('container');
const body = document.querySelector('body');

console.log(container);




window.addEventListener('scroll', (e) => {
    // console.log(window.scrollY);
  
    if(window.scrollY > 100) {
        btn.classList.remove('hide')
        btn.classList.add('show');

    }
    if(window.scrollY <= 100) {
        btn.classList.remove('show');
        btn.classList.add('hide');
    }
});

btn.addEventListener('click', (e) =>{
    console.log(e.target);
    window.scrollTo(0,0)
})
