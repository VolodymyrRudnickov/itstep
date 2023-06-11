// 1
// let num = +prompt('Enter your number');

// if(num > 0) {
//     alert('Your number is positive.');
// } else if ( num < 0) {
//     alert('Your number is negative');
// } else if (num == 0) {
//     alert('Your number is 0.')
// }


// 2

// let userAge = +prompt('Enter your age.');

// if(userAge <= 120 && userAge > 0) {
//     alert('Correct')
// } else {
//     alert('Wrong.')
// }

// 3 
// let mod = +prompt('Enter your number.');

// if (mod >= 0) {
//     alert(`Modul ${mod}`)
// } else if (mod < 0) {
//     alert(`Modul ${0 - mod}`)
// }

// 4

// let hour = +prompt('Enter hours');
// let min = +prompt('Enter minutes');
// let sec = +prompt('Enter seconds');

// if( hour <= 23 && min <= 59 && sec <= 59 && (hour >= 0 && min >= 0 && sec >= 0)) {
//     alert('Your time is correct');
// } else {
//     alert('Your time is wrong');
// }

// 5

// let x = +prompt('Enter x');
// let y = +prompt('Enter y');

// if(x > 0 && y > 0) {
//     alert('Це I чверть')
// } else if (x < 0 && y > 0) {
//     alert('Це II чверть')
// } else if( x < 0 && y < 0) {
//     alert('Це III чверть')
// } else if ( x > 0 && y < 0) {
//     alert('Це IV чверть')
// }  else if ( x == 0 && y == 0) {
//     alert('Точки знаходяться на початку координат')
// } else if (x == 0 && (y > 0 || y < 0)) {
//     alert('x знаходиться на вісі координат')
// } else if ( y == 0 && (x >0 || x < 0)) {
//     alert("у знаходиться на вісі координат")
// }

// 6 

// let month = +prompt('Введіть номер місяця.');

// switch(month) {
//     case 1:
//         alert('Січень')
//         break;
//     case 2:
//         alert('Лютий')
//         break;
//     case 3:
//         alert('Березень')
//         break;
//     case 4:
//         alert('Квітень')
//         break;
//     case 5:
//         alert('Травень')
//         break;
//     case 6:
//         alert('Червень')
//         break;
//     case 7:
//         alert('Липень')
//         break;
//     case 8:
//         alert('Серпень')
//         break;
//     case 9:
//         alert('Вересень')
//         break;
//     case 10:
//         alert('Жовтень')
//         break;
//     case 11:
//         alert('Листопад')
//         break;
//     case 12:
//         alert('Грудень')
//         break;
// }

// 7 

// let num1 = +prompt('Введіть 1 число');
// let num2 = +prompt('Введіть 2 число');
// let sign = prompt('Введіть дію');

// switch (sign) {
//     case '+':
//         alert(num1 + num2);
//         break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '/':
//         alert(num1 / num2);
//         break;
//     case '*':
//         alert(num1 * num2);
//         break;
// }

// 8

// let num1 = +prompt('Введіть 1 число');
// let num2 = +prompt('Введіть 2 число');

// num1 > num2 ? alert(num1) : alert(num2);

//9 
// let num = +prompt("Введіть число");

// num % 5 == 0 && num > 0 ? alert("Число кратне 5") : alert('Число не кратне 5');

// 10

// let userPlanet = prompt('Введіть назву планети')

// userPlanet == 'Земля' || userPlanet == 'земля' ? alert('Привіт,землянине!') : alert("Привіт,інопланитянине!");