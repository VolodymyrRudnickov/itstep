// 1
function valueOfNum(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else if (a == b) return 0;
}
// console.log(valueOfNum(20,20));

// 2
function factorial(num) {
    let count = 1;
    let i = 1;

    while (i <= num) {
        count *= i;
        i++;
    }
    return count;
}
// console.log(factorial(10));


// 3
function splitNum(a, b, c) {
    return Number(`${a}${b}${c}`);
}
// console.log(splitNum(1,2,3));


// 4
function square(a, b) {
    return arguments.length == 1 ? a ** 2 : a * b;
};
// console.log(square(5,5));

// 5

function idealNum(x) {
    let div = 1;
    let result = 0;

    while (div < x) {
        if (x % div === 0) {
            result += div;
        }
        div++;
    }

    return result == x ? true : false;
};
// console.log(idealNum(6));

// 6

function diaposon(a, b) {

    let result = '';
    for (let i = a; i < b; i++) {
        if (idealNum(i)) {
            result += i + ' ';
        }
    }
    return result;
}

// console.log(diaposon(1, 10000));

// 7

let h = +prompt('Enter hours');
let m = +prompt('Enter mins');
let s = +prompt('Enter sec');

let h1 = +prompt('Enter hours');
let m1 = +prompt('Enter mins');
let s1 = +prompt('Enter sec');

function time(hour, min, sec) {
    if ((hour <= 23 && min <= 59 && sec <= 59) && (hour > 0 && min > 0 && sec > 0)) {
        min == 0 ? min = '00' : min;
        sec == 0 ? sec = '00' : sec;

        return `${hour}:${min}:${sec}`;
    } else {
        return 'Please,enter correct time';
    }

}

// console.log(time(h, m, s));

// 8

function convertTimeToSec(hour, min, sec) {
    return (hour * 60 * 60) + (min * 60) + sec;
}
// console.log(convertTimeToSec(h, m, s));

// 9 

function convertSecondsToHours(sec) {
    let hour = Math.floor(sec / 60 / 60);
    let min = Math.floor((sec / 60) - (hour * 60))
    let seconds = Math.floor(sec % 3600 % 60)

    return `${hour}:${min}:${seconds}`;
}
// console.log(convertSecondsToHours(convertTimeToSec(h, m, s)));

// 10

function getTimeDifference(hour1,min1,sec1,hour2,min2,sec2){
        let timeDiff = convertTimeToSec(hour1,min1,sec1) - convertTimeToSec(hour2,min2,sec2);
        return convertSecondsToHours(timeDiff);   
}


console.log(getTimeDifference(h,m,s,h1,m1,s1));



