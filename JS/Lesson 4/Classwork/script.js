
// 1
function minNum(a, b) {

    return a < b ? a : b;
}
// console.log(minNum(11,12));
// console.log(minNum(10,20));
// console.log(minNum(22,20));


// 2

function pow(a, b) {
    return a ** b;
}

// console.log(pow(2,3));
// console.log(pow(5,2));

// 3

function twoNum(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        case '-':
            return a - b;
    }
}
// console.log(twoNum(10,2, '/'));

// 4
function simpleNum(x) {
    let count = 0;
    let div = 1;
    while (div <= x) {
        if (x % div == 0) {
            count++;
        }
        div++;
    }
    return count == 2 ? true : false;
}
// console.log(simpleNum(20));


//5
function table(num) {

    let res = '';
    for (let i = 1; i <= 9; i++) {
        res = `
        ${num}*${i} = ${num * i}<br>
        `;
        if( i == 9 ) {
            res = `
            ${num}*${i} = ${num * i}<br>
            <hr>
            `;
        }
        document.write(res);
    }
}
// table(2)
// table(3)
// table(4)
// table(5)
// table(6)
// table(7)
// table(8)
// table(9)


// 6
function restDivision(a, b) {

    while (a > b) {
        a = a - b;
    }
    return a;
}
// console.log(restDivision(10,3))
// console.log(restDivision(24,5))

// 7
function sum() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        count += arguments[i];
    }
    return count;
};
// console.log(sum(1,2,3,4,5))
// console.log(sum(100,100,100,100,100));

// 8
function maxNum() {
    let count = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > count) {
            count = arguments[i];
        }
    }
    return count;
}
// console.log(maxNum(50,30,100,200,1));

// 9
function pairOrNot(a, b, bool) {
    let count = '';
    for (let i = a; i < b; i++) {
        if (bool) {
            if(i % 2 == 0) {
                 count += i + ' ';
            }
        } else {
            if(i % 2 != 0) {
                count += i + ' ';
            }
            
        }
    }
    return count;
}
// console.log(pairOrNot(100,200,false))
// document.write(pairOrNot(100,200,true))


// 10

const d = +prompt('Enter day')
const m = +prompt('Enter month')
const y = +prompt('Enter year')

function isLeapYear(year){
    return year % 4 == 0 && year / 100 != 0 ? true : false;
}


function nextDate(day,month,year){
   
    if (day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
        day = 1;
        month++;
    } else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
        day = 1;
        month++
    } else if (day == 28 && !(isLeapYear(year)) && month == 2) {
        day = 1;
        month++;
    } else if (day == 29 && (isLeapYear(year)) && month == 2) {
        day = 1;
        month++;
    } else if (day < 31) {
        day++;
    } else if (month == 12 && day == 31) {
        month = 1;
        day = 1;
        year++;
    }

    const nextDate = `Наступна дата - ${day}.${month}.${year}`;

    return nextDate;
}

console.log(nextDate(d,m,y));
