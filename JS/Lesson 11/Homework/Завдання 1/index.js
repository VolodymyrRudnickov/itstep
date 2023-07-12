function checkDigits() {
    const input = document.querySelector('.input');
    // const regEx = /\d+/g;
    input.addEventListener('keypress', (e) => {
        e.preventDefault();
        if (!(e.keyCode > 48 && e.keyCode < 57)) {
            input.value += e.key;
        }
        // if(!(e.key.match(regEx))) {
        //    input.value += e.key;
        // }
    });
}
checkDigits();