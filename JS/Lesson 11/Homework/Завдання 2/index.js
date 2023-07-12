function toggleModal(){
    const modal = document.querySelector('.modal');
    const openBtn = document.querySelector('.open-modal');
    const closeBtn = document.querySelector('.close-modal');

    openBtn.addEventListener('click', () => {
        modal.classList.remove('hide');
        modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.classList.add('hide');
    })
}
toggleModal();