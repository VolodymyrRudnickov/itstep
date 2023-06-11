//1 
// let num = +prompt('Enter number');
// console.log(num)
// let result = '';

// while(num > 0) {
//     v += '#' + ' ';
//     num--;
// }
// console.log(result);


// 2

// let num = +prompt('Enter your number');

// while(num >= 0) {
//     res += num + ' ';
//     num--
// };
// console.log(res);

//3 
// let num = +prompt('Enter your number');
// let pow = +prompt('Enter pow');
// let result = 1;

// while(pow > 0) {
//     result*=num;
//     pow--;
// };

// console.log(result)

//4 

// let num1 = +prompt('Enter num1');
// let num2 = +prompt('Enter num2');
// let div = 1;
// let result = '';

// while (div <= num1) {
//     if(num1 % div === 0 && num2 % div === 0){
//         result += div + ' ';
//     }
//     div++;    
// }
// console.log(result);


// 5
// let num = +prompt('Enter your number');
// let factorial = 1;
// let i = 1;

// while( i <= num) {
//     factorial *= i;
//     i++;
// }
// console.log(factorial)

// 6 
// let question;
// do {
//     question = +prompt('Введіть вірну відповідь: 2 + 2 * 2 = ?');

// } while (question != 8)

// 7 
// let num = 1000;
// let count = 0;

// do{
//     num = num / 2;
//     count++;
// } while (num >= 50);
// alert(num);
// alert(count);

// 8 

// let num = +prompt('Enter your number');
// let result = '';

// for(let i = 1; i <= 100;i++) {
//     if(i % num == 0) {
//         result += i + ' ';
//     }
// }
// alert(result);

// 9 
// let num1 = +prompt('Enter 1st number');
// let num2 = +prompt('Enter 2nd number');
// let result = '';

// for(let i = num1; i <= num2;i++) {
//     if(i % 4 == 0) {
//         result+= i + ' ';
//     }
// }
// alert(result)

// 10

// let num = +prompt('Enter your number');
// let result;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         count++;
//     }
// }
// if (count == 2) {
//     alert(true)
// } else {
//     alert(false)
// }