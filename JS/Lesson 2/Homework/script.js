// 1
// let userAge = +prompt('Введіть Ваш вік.');

// if(userAge < 12 && userAge >= 0) {
//     alert('Ви дитина');
// } else if (userAge < 18 && userAge > 0) {
//     alert("Ви підліток.")
// } else if (userAge <= 60 && userAge > 0) {
//     alert("Ви дорослий.")
// }  else if (userAge < 0 || userAge > 60) {
//     alert("Введіть правильне значення.")
// };

// 2
// let num = +prompt('Введіть значення від 1 до 9.');

// switch (num) {
//     case 1:
//         alert('!')
//         break;
//     case 2:
//         alert('@')
//         break;
//     case 3:
//         alert('#')
//         break;
//     case 4:
//         alert('$')
//         break;
//     case 5:
//         alert('%')
//         break;
//     case 6:
//         alert('^')
//         break;
//     case 7:
//         alert('&')
//         break;
//     case 8:
//         alert('*')
//         break;
//     case 9:
//         alert('(')
//         break;
// };

// 3 
// let num = prompt('Введіть тризначне число.');
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// if(num[0] == num[1]) {
//     alert('У вас є дві однакові цифри');
// } else if (num[0] == num[2]) {
//     alert('У вас є дві однакові цифри');
// } else if( num[1] == num[2]) {
//     alert('У вас є дві однакові цифри');
// } else {
//     alert('У вас немає однакових цифр.');
// };

// 4 
// let userYear = +prompt('Введіть Ваш поточний рік');

// if (userYear % 4 == 0 && userYear / 100 != 0) {
//     alert("Ваший рік - високосний")
// } else {
//     alert('Ваший рік не високосний')
// };

// 5
// let num = prompt('Введіть пятизначне число.');
// let reverse = '';
// for(let i = num.length - 1; i >= 0;i--){
//     reverse += num[i];
// }
// if(num === reverse) {
//     alert('Ваше число - паліндром.')
// } else {
//     alert('Ваше число не є паліндромом.')
// };


// 6 
// let USD = +prompt('Введіть кількість USD.');
// let conv = prompt("Виберіть валюту(UAH,EUR,AZN):", 'EUR');

// const EUR = 0.93;
// const UAH = 37.07;
// const AZN = 1.70;

// switch (conv) {
//     case 'EUR':
//         alert(`${USD} долларів = ${Math.floor(USD * EUR)} євро.`);
//         break
//     case 'UAH':
//         alert(`${USD} долларів = ${Math.floor(USD * UAH)} гривень.`);
//         break;
//     case 'AZN':
//         alert(`${USD} долларів = ${Math.floor(USD * AZN)} азейбарджанських манат.`);
//         break;
//     default :
//     alert('Please,enter corrent value')
// };

// 7
// let value = +prompt('Введіть сумму покупки для визначення відсотку скидки.');
// let percent = 0;
// if(value >= 200 && value <= 300) {
//     percent = 0.03;
// } else if(value >= 301 && value <= 500) {
//     percent = 0.05;
// } else if (value >= 501) {
//     percent = 0.07;
// };

// alert(`Сумма до сплати: ${value - (value * percent)}`)

// 8

// let per = +prompt('Введіть периметр квадрата')
// let len = +prompt('Введіть довжину окружності кола')

// let side = per / 4;
// let radius = (len / Math.PI) / 2;

// console.log(side);
// console.log(radius);

// radius <= side ? alert('true') : alert('false');


// 9 
// let quest1 = prompt(`
// Як називається мова розмітки веб-сторінок?
// 1.HTML.
// 2.Java.
// 3.Ruby.`);

// let quest2 = prompt(`
// Як називається мова програмування для надання динамічності веб-сторінкам?
// 1.JavaScript.
// 2.Assambler.
// 3.C++.`);

// let quest3 = prompt(`
// Як розшифровується абревіатура «CSS»?
// 1.Cascading Style Sheet.
// 2.Cascading Selector Style.
// 3.Cascading Switch Style.`);

// let answer = 0;

// quest1 == 'HTML' || quest1 == 1 ? answer += 2 : alert('Відповідь на перше питання не вірне.');
// quest2 == 'JavaScript' || quest2 == 1 ? answer += 2 : alert('Відповідь на друге питання не вірне.');
// quest3 == 'Cascading Style Sheet' || quest1 == 1 ? answer += 2 : alert('Відповідь на третє питання не вірне.');

// alert(`Ви набрали ${answer} балів.`);

// 10

let day = +prompt('Введіть день');
let month = +prompt('Введіть місяць');
let year = +prompt('Введіть рік');

if (day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
    day = 1;
    month++;
} else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    day = 1;
    month++
} else if (day == 28 && !(year % 4 == 0 && year / 100 != 0) && month == 2) {
    day = 1;
    month++;
} else if (day == 29 && (year % 4 == 0 && year / 100 != 0) && month == 2) {
    day = 1;
    month++;
} else if (day < 31) {
    day++;
} else if (month == 12 && day == 31) {
    month = 1;
    day = 1;
    year++;
}


let nextDate = `Наступна дата - ${day}.${month}.${year};`


