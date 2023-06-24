// Задание 3

const time = {
    hour: 20,
    minutes: 30,
    seconds: 45,
}

function outTIme(time) {
    document.write(`
   <p> Поточний час: <b>${time.hour}:${time.minutes}:${time.seconds}</b></p>
   `);
}



function changeSeconds(sec) {
    let newSec = convertTimeToSec(time.hour, time.minutes, time.seconds) + sec; // переводим время из объекта в секунды и добавляем переданное кол-во секунд
    // для изменения времени
    convertSecondsToHours(newSec);  // переводим секунды обратно в часы 
}
function changeMinutes(min) {
    let newMin = convertTimeToSec(time.hour, time.minutes, time.seconds) + (min * 60); // переводим время из объекта и кол-во переданных минут в секунды
    convertSecondsToHours(newMin); // переводим секунды обратно в часы
}

function changeHours(hour) {
    let newHour = convertTimeToSec(time.hour, time.minutes, time.seconds) + (hour * 60 * 60);// переводим время из объекта и переданные часы в секунды
    convertSecondsToHours(newHour); //переводим секунды обратно в часы
}


function convertTimeToSec(hour, min, sec) {
    return (hour * 60 * 60) + (min * 60) + sec;
}


function convertSecondsToHours(sec) {

    time.hour = Math.floor(sec / 60 / 60);
    time.minutes = Math.floor((sec / 60) - (time.hour * 60))
    time.seconds = Math.floor(sec % 3600 % 60)
}


changeSeconds(30)
changeMinutes(10);
changeHours(2)
outTIme(time);
