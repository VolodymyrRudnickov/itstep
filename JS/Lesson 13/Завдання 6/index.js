const input = document.querySelector('.input');
const controls = document.querySelector('.enter');
const out = document.querySelector('.result');



controls.addEventListener('click', (e) => {
    if (!(e.target.classList.contains('controls'))) {
        if (e.target.dataset.number) {
            console.log(e.target.dataset.number);
            input.value += e.target.dataset.number;
        }
        if (e.target.dataset.sign && input.value !== '') {
            input.value += ' ' + e.target.dataset.sign + ' ';
        }
        if (e.target.dataset.result) {
            if (calculator(input.value) !== Infinity) {

                out.textContent = `${input.value} = ${calculator(input.value)}`
                input.value = calculator(input.value);
            } else {
                out.textContent = 'Введите корректные значения';
                input.value = '';
            }
        }

        if (e.target.dataset.clear) {
            input.value = '';
            out.textContent = '';
        }
    }

})

function calculator(expression) {

    const num = expression.split(/[-*/+]/g);
    const sign = expression.match(/[-*/+]/g);
    const [num1, num2] = num;
    const [sign1] = sign;
    
    let result = 0;
    switch (sign1) {
        case '+':
            result = (+num1) + (+num2);
            break
        case '-':
            result = (+num1) - (+num2);
            break
        case '/':
            result = (+num1) / (+num2);
            break;
        case '*':
            result = (+num1) * (+num2);
            break
    }

    return result;


}


























