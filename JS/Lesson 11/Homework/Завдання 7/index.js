const elem  = document.querySelectorAll('.child');
console.log(elem);


elem.forEach(item => {
    item.addEventListener('click', (e) => {
        if(!(e.target.children.length === 0)) {
            e.target.children[0].classList.toggle('hide');
        }
       
    })
})
