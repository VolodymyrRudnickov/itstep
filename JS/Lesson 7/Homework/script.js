// 1

function compareString(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    }
    if (str1.length < str2.length) {
        return -1;
    }
    if (str1.length = str2.length) {
        return 0;
    }
};

// console.log(compareString('Hello,Web31','Hello,programmers'));
// console.log(compareString('Hello,Web31','Hello,world'));
// console.log(compareString('Hello,Web31','Hello'));

// 2
function firstLetterUpperCase(str) {
    str = str.slice(0, 1).toUpperCase() + str.slice(1);
    return str;
};

// console.log(firstLetterUpperCase('hello'));


// 3
function calcLetters(text) {
    const letters = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];

    let count = 0;

    for (let i = 0; i < text.length; i++) {
        for (let k = 0; k < letters.length; k++) {
            if (text[i] === letters[k]) {
                count++;
            };
        };
    };

    return count;
};

// console.log(calcLetters('Голосні звуки легко проспівати, адже струмінь видихуваного повітря не зустрічає перешкод.'));


// 4

function checkSpam(str) {
    const spam = [
        '100% безкоштовно',
        'збільшення продажів',
        'тільки сьогодні',
        'не видаляйте',
        'ххх',
    ];

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < spam.length; k++) {
            if (str.includes(spam[i])) {
                return true;
            }
        }
    }
    return false;

};

// console.log(checkSpam('Тільки сьогодні зустрічайте новинку, 100% безкоштовно.'));
// console.log(checkSpam('Зустрічайте новинку для Вас - нова модель iPhone.'));
// console.log(checkSpam('Зустрічайте новинку для Вас - нова модель iPhone, не видаляйте.'));


// 5

function truncate(string, maxLength) {
    let newString = '';
    if (string.length > maxLength) {
        newString = string.slice(0, maxLength) + '...';
    } else {
        newString = string;
    }

    return newString;
};

// console.log(truncate('Голосні звуки легко проспівати, адже струмінь видихуваного повітря не зустрічає перешкод.', 5));


// 6 

function isPalindrom(str) {
    str = str.split(' ').join('').toLowerCase();

    let reverse = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    reverse = reverse.toLowerCase();

    if (reverse === str) {
        return true;
    }

    return false;
};

// console.log(isPalindrom('Лёша на полке клопа нашёл'));

// 7

function numberOfWords(text) {
    const newText = text.split(' ');
    console.log(newText);

    return newText.length;

};

// console.log(numberOfWords('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis possimus earum odit ea corporis labore maiores rerum sit, laudantium, quod voluptate quam minima laboriosam vitae at numquam consequuntur harum.')); 

// 8 

function getMostLength(text) {
    const newText = text.split(' ');
    let mostLength = newText[0];

    for (let i = 0; i < newText.length; i++) {
        newText[i] = newText[i].replace(',', '').replace('.', '');

        if (newText[i].length > mostLength.length) {
            mostLength = newText[i];
        }
    }

    return mostLength;
};

// console.log(getMostLength('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis possimus earum odit ea corporis labore maiores rerum sit, laudantium, quod voluptate quam minima laboriosam vitae at numquam consequuntur harum.'));

// 9 


function getAverageLength(text) {
    const newStr = text.split(' ');
    let count = 0;

    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].replace(',', '').replace('.', '');
        count += newStr[i].length
    };

    return (count / newStr.length).toFixed(1);
};

// console.log(getAverageLength('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis possimus earum odit ea corporis labore maiores rerum sit, laudantium, quod voluptate quam minima laboriosam vitae at numquam consequuntur harum.'));

// 10

function findSymbolIndex(text, symbol) {
    let count = 0;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (symbol === text[i] && text.indexOf(symbol) !== -1) {
            result += text.indexOf(symbol, i) + ' ';
            count++;
        }
    };
};

// console.log(findSymbolIndex('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis possimus earum odit ea corporis labore maiores rerum sit, laudantium, quod voluptate quam minima laboriosam vitae at numquam consequuntur harum.','o'),);