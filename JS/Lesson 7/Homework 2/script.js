// 1

function calcSymbols(str) {
    let letters = 0;
    let nums = 0;
    let symbols = 0;

    const regLetters = /[a-z]+/g;
    const regNums = /\d/g;
    const regSymbols = /\W+/g;

    let arr = str.split('');
    console.log(arr);

    arr.forEach(elem => {
        // elem.match(regLetters) ? letters++ : false;
        // elem.match(regNums) ? nums++ : false;
        // elem.match(regSymbols) ? symbols++ : false;
        if (elem.match(regLetters)) letters++;
        if (elem.match(regNums)) nums++;
        if (elem.match(regSymbols)) symbols++;

    });
    return `В Вашому рядку ${letters} літер, ${nums} цифр, ${symbols} символів.`

}

// console.log(calcSymbols('Lor4em ipsum dolor3, sit amet c5onsectetur2 adipisicing elit. 1Debitis, as6sumenda.'))

// 3

function changeElems(str) {
    const regLowLetter = /[a-z]+/g;
    const regUppLetter = /[A-Z]+/g;
    const regNums = /\d/g;
    let newStr = str.split('');
    let res = '';
    for (let i = 0; i < newStr.length; i++) {
        if (str[i].match(regLowLetter)) res += str[i].toUpperCase();
        else if (str[i].match(regUppLetter)) res += str[i].toLowerCase();
        else if (str[i].match(regNums)) res += str[i].replace(str[i], '_');
        else res += str[i];
    }
    console.log(newStr)
    return res;
}

// console.log(changeElems('Lor4eM IpsUm Dolor3, siT am452et c5onSectetur2 adipisicing elit. 1Debitis, as6sumenda.'))

// 4
function convertToCamelCase(str) {
    let newStr = str.split('')
    let res = '';
    for (let i = 0; i < newStr.length; i++) {
        if (str[i] === '-') {
            res += str[i].replace('-', '');

        } else if (str[i - 1] == '-') {
            res += str[i].replace(str[i], str[i].toUpperCase());
        } else {
            res += str[i];
        }


    }
    return res;
}
// console.log(convertToCamelCase('background-color'))

// 5 
function abbr(str) {
    let newStr = str.split(' ');
    let res = '';
    newStr.forEach(item => {
        console.log(item);
        res += item[0].toUpperCase();
    })
    return res;
}
// console.log(abbr('объектно ориентированное программирование'));

//6
function concatStrings() {
    let res = '';

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
// console.log(concatStrings('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa!'));

// 7
function calculator(expression) {
    let res = expression.split(/[-*/+]/g);
    let res1 = expression.match(/[-*/+]/g).join();

    let result = 0;
    if (res1 === '+') {
        for (let i = 0; i < res.length; i++) {
            res[i] = +res[i];
            result = res[0] + res[1];
        }
    } else if (res1 === '-') {
        for (let i = 0; i < res.length; i++) {
            res[i] = +res[i];
            result = res[0] - res[1];
        }
    } else if (res1 === '*') {
        for (let i = 0; i < res.length; i++) {
            res[i] = +res[i];
            result = res[0] * res[1];
        }
    } else if (res1 === '/') {
        for (let i = 0; i < res.length; i++) {
            res[i] = +res[i];
            result = res[0] / res[1];
        }
    }

    return result;

}
// console.log(calculator('100+2.5'));


// 8 
function getUrlInfo(url) {
    url = new URL(url);
    return `
    Прокотол: ${url.protocol},
    Домен: ${url.hostname},
    Шлях: ${url.pathname}`
}
// console.log(getUrlInfo('https://itstep.org/ua/about'));

//9

function split(string, delemeter) {
    const result = [];
    const delemeterLen = delemeter.length;
    if (delemeterLen === 0) {
      for (let i = 0; i < string.length; i++) {
        result.push(string[i]);
      }
    }
    if (delemeterLen > 0) {
      let count = 0;
      let resStr = "";
      for (let i = 0; i < string.length; i++) {
        const el = string[i];
        if (el === delemeter[count]) {
          if (count === delemeterLen - 1) {
            result.push(resStr);
            count = 0;
            resStr = "";
          } else {
            count = count + 1;
          }
        } else {
          resStr = resStr + el;
        }
      }
      if (resStr) {
        result.push(resStr);
      }
    }
    return result;
  }
  
console.log(split('02/07/2023', '/'));
