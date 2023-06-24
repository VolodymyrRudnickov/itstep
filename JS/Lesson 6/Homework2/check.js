// Задание 2
const check = [
    {
        name: 'Пакет',
        count: 1,
        amount: 3.90,
    },
    {
        name: 'Напій "Sprite"',
        count: 1,
        amount: 26.30,
    },
    {
        name: 'Сир кисломолочний',
        count: 2,
        amount: 59.30,
    },
    {
        name: 'Чіпси "Lays"',
        count: 1,
        amount: 56.90,
    },
    {
        name: 'Жувальна гумка "Orbit"',
        count: 1,
        amount: 14.40,
    },
    {
        name: 'Сирок глазурований',
        count: 3,
        amount: 15.90,
    },
    {
        name: 'Йогурт',
        count: 3,
        amount: 20.30,
    },
    {
        name: 'Ковбаски курячі',
        count: 1,
        amount: 60,
    },
];

function displayCheck() {

    const title = document.createElement('h2');
    const ul = document.createElement('ul');

    title.textContent = 'Чек';

    check.forEach(item => {
        console.log(item);
        let li = document.createElement('li');
        li.innerHTML = `
            <p><b>${item.name}</b></p>
            <p> Кількість: ${item.count} шт</p>
            <p> Ціна за одиницю: ${item.amount} грн</p>
            `
        ul.append(li);
    });


    document.body.appendChild(title);
    document.body.appendChild(ul)
}

function calcTotalAmount() {
    let result = 0;

    check.forEach(item => {
        result += item.amount;
    });

    return result;
}



function getMostAmount() {
    let res = check[0].amount;
    let name = '';
    let out = document.createElement('div');

    for (let i = 0; i < check.length; i++) {
        if (check[i].amount > res) {
            res = check[i].amount;
            name = check[i].name;
        }
    }

    out.innerHTML  = `Найдорожчий товар у чеку - <b>${name}</b>`;
    document.body.appendChild(out);

}

function getAveragAmount(){
    let out = `Cередня вартість товару - ${(calcTotalAmount() / check.length).toFixed(2)}`;
    console.log(out);
    
}


displayCheck()
calcTotalAmount()
getMostAmount()
getAveragAmount()