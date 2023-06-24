

// Задание 2


function fraction(numerator, denominator) {
    return {
        numerator: numerator,
        denominator: denominator,
    }
}

function addition(fraction1, fraction2) {
    let resultNumerator = 0;
    let resultDenominator = 0;
    let temp1 = 0;
    let temp2 = 0;
    let temp3 = 0;
    let temp4 = 0;

    if (fraction1.denominator === fraction2.denominator) {
        resultNumerator = fraction1.numerator + fraction2.numerator;
        console.log(`${resultNumerator}/${fraction1.denominator}`);
    } else {
        temp1 = fraction1.numerator * fraction2.denominator;
        temp2 = fraction1.denominator * fraction2.denominator;

        temp3 = fraction2.numerator * fraction1.denominator;
        temp4 = fraction2.denominator * fraction1.denominator;

        resultNumerator = temp1 + temp3;
        resultDenominator = (temp2 + temp4) / 2;
        reduction(resultNumerator, resultDenominator);
    }
}


function subtraction(fraction1, fraction2) {
    let resultNumerator = 0;
    let resultDenominator = 0;
    let temp1 = 0;
    let temp2 = 0;
    let temp3 = 0;
    let temp4 = 0;

    if (fraction1.denominator === fraction2.denominator) {
        resultNumerator = fraction1.numerator + fraction2.numerator;
        console.log(`${resultNumerator}/${fraction1.denominator}`);
    } else {
        temp1 = fraction1.numerator * fraction2.denominator;
        temp2 = fraction1.denominator * fraction2.denominator;

        temp3 = fraction2.numerator * fraction1.denominator;
        temp4 = fraction2.denominator * fraction1.denominator;


        resultNumerator = temp1 - temp3;
        resultDenominator = (temp2 + temp4) / 2;
        reduction(resultNumerator, resultDenominator);
    }


}


function multiplication(fraction1, fraction2) {
    let resultNumerator = 0;
    let resultDenominator = 0;

    resultNumerator = fraction1.numerator * fraction2.numerator;
    resultDenominator = fraction1.denominator * fraction2.denominator;

    reduction(resultNumerator, resultDenominator);
}


function division(fraction1, fraction2) {
    let resultNumerator = 0;
    let resultDenominator = 0;

    resultNumerator = fraction1.numerator * fraction2.denominator;

    resultDenominator = fraction1.denominator * fraction2.numerator;

    reduction(resultNumerator,resultDenominator);

}



function reduction(num1, num2) {
    let div = 1;
    let result = [];

    while (div <= num2) {
        if (num1 % div === 0 && num2 % div === 0) {
            result.push(div);
        }
        div++;
    }

    let res1 = 0;
    let res2 = 0;

    for (let i = 0; i < result.length; i++) {
        res1 = num1 / result[i];
        res2 = num2 / result[i];
    }

    console.log(`${res1}/${res2}`);
}

addition(fraction(5, 10), fraction(3, 15));
subtraction(fraction(5, 10), fraction(3, 15));
multiplication(fraction(5, 10), fraction(3, 15));
division(fraction(5, 10), fraction(3, 15));





