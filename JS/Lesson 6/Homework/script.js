const arr = [4, 91, 3, 62, 74, 48, 27, 17, 49, 18];
// console.log(Math.floor(Math.random(100) * 100));

// Задание 1
//1
function outArray(array) {
    array.forEach(item => {
        console.log(item);

    });
};
// outArray(arr);

// 2 

function getPairElem(array) {
    array.forEach(item => {
        if (item % 2 == 0) console.log(item);

    })
};
// getPairElem(arr);

// 3

function sumElem(array) {
    let summ = array.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    return summ;
};
// console.log(sumElem(arr));

// 4
function getMaxElem(array) {
    let max = array.reduce((acc, curr) => {
        return acc > curr ? acc : curr;
        // if( acc > curr) return acc 
        // else return curr
    });
    return max;
}
// console.log(getMaxElem(arr));

// 5 

function pushElemInArr(array) {
    let newElem = +prompt('Enter new element');
    let indexOfElem = +prompt('Enter index of elem');
    array[indexOfElem] = newElem;
    return array;
};

// console.log(pushElemInArr(arr));

// 6
function deleteElemFromArray(array) {
    let index = +prompt('Enter index to delete elem from array.');

    //array[index] = undefined;
    delete array[index];
    return array;
}

// console.log(deleteElemFromArray(arr));

// Задание 2

// 1 

const arr2 = [87, 48, 53, 25, 18];

// 1 

function concatArray(array1, array2) {
    let sumArr = [];

    array1.forEach((item, i) => {
        if (!array2.includes(item)) sumArr.push(item);
    });

    return sumArr.concat(array2);
};
// console.log((concatArray(arr, arr2)));

// 2 
function sameElem(array1, array2) {
    let sumArr = [];

    array1.forEach((item, i) => {
        if (array2.includes(item)) sumArr.push(item)
    });

    return sumArr;
}
// console.log(sameElem(arr,arr2));

//3 
function otherElem(array1, array2) {
    let sumArr = [];

    array1.forEach((item, i) => {
        if (!array2.includes(item)) sumArr.push(item);
    });
    return sumArr;
}

// console.log(otherElem(arr,arr2));

// Задание 3

// 1

const fruits = ["Яблоко", "Груша", "Клубника", "Апельсин", "Ананас", "Манго", "Грейпфрут"];

fruits.sort();
console.log(fruits);

function outFruits(arr) {

    arr.forEach((item) => {
        document.write(`
        <ul>
            <li>${item}</li>
        </ul>`
        );
    })
}
// outFruits(fruits);

// 2 

function findFruit(fruit) {
    const fruitsToLowerCase = fruits.map(item => {
        return item.toLowerCase();
    });

    fruit = fruit.toLowerCase();

    return fruitsToLowerCase.includes(fruit) ? fruitsToLowerCase.indexOf(fruit) : -1;

}

// console.log(findFruit('Яблоко'));
// console.log(findFruit('ЯблОко'));
// console.log(findFruit('Виноград'));
