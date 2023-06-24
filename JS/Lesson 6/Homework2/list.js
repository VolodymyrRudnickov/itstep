// Задание 1

const list = [
    {
        name: 'Яблоко',
        count: 2,
        isBuy: true,
    },
    {
        name: 'Йогурт',
        count: 3,
        isBuy: false,
    },
    {
        name: 'Сыр',
        count: 1,
        isBuy: false,
    },
    {
        name: 'Мороженое',
        count: 5,
        isBuy: false,
    },
    {
        name: 'Хлеб',
        count: 2,
        isBuy: true,
    },
    {
        name: 'Вода',
        count: 4,
        isBuy: true,
    },
];

const newGoods = function (name, count = 1) { // создаём новый товар, указываем по-умолчанию значение счётчика = 1
    return {
        name: name,
        count: count,
        isBuy: false,
    }


}

function outList() { // вывод товаров в виде списка

    const ulBuy = document.createElement('ul');
    const ulNotBuy = document.createElement('ul');
    const titleBuy = document.createElement('h2');
    const titleNotBuy = document.createElement('h2');


    titleBuy.textContent = 'Купленные продукты';
    titleNotBuy.textContent = 'Некупленные продукты';

    list.forEach(item => {
        if (item.isBuy) {
            let li = document.createElement('li');
            li.textContent = `${item.name} - ${item.count} шт `;
            ulBuy.append(li)
        } else {
            let li = document.createElement('li');
            li.textContent = `${item.name} - ${item.count} шт `;
            ulNotBuy.append(li);
        }
    });

    document.body.appendChild(titleBuy)
    document.body.appendChild(ulBuy)
    document.body.appendChild(titleNotBuy)
    document.body.appendChild(ulNotBuy)
}



function checkItems(goods) { // проверяем наличие такого товара в массиве
    let answer = false;

    list.forEach(item => {
        if (item.name === goods.name) {
            answer = true;
        }
    })

    return answer;

}

function addGoods(goods) { // добавляем товар

    if (checkItems(goods)) {
        list.forEach(item => {
            if (goods.name === item.name) { // если товар уже есть в списке - увеличиваем его счётчик
                item.count = item.count + goods.count;
            }
        })
    } else {
        list.push(goods); // если нет - пушим в массив
    }

}

function buyProduct(productName) {
    list.forEach(item => {
        if (productName === item.name) {
            item.isBuy = true;
        }
    })
}


addGoods(newGoods('Кофе'))
addGoods(newGoods('Творог'))
addGoods(newGoods('Кофе', 3))
addGoods(newGoods('Яблоко', 3))
buyProduct('Кофе')
// buyProduct('Йогурт')
// buyProduct('Сыр')

outList();
console.log(list);
