// Задание 1

// 1 
const car = {
    model: 'S',
    year: 2023,
    name: 'Tesla',
    speed: 100,
    outInfo: function () {
        return document.write(`
        <h1>${this.name}</h1>
        <ul>
            <li>Модель: <b>${this.model}</b></li>
            <li>Рік випуску: <b>${this.year}</b></li>
            <li>Середня швидкість: <b>${this.speed} км/год</b></li>
        </ul>
        `);
    },
    calcTime: function (distance) {

        let time = distance / this.speed;
        let rest = time % 4;

        return document.write(`Для подолання ${distance} км із середньою швидкістю ${this.speed} км/год потрібно ${(time + rest)} годин`);

    }
}

car.outInfo();
car.calcTime(1000);