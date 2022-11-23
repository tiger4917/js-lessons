
const cubOfNumber = number => number ** 3;
console.log(cubOfNumber(2) + cubOfNumber(3));

/* ========= задание 2=====*/

let money = Number(prompt('Введите число'));
if (money === NaN) {
    console.log('Значение задано неверно');
}
else {
    salary(money);
}
function salary(money) {
    money = money * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен ${money}`);
}

/*=========задание 3========= */

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));
let thirdNumber = Number(prompt('Введите третье число'));

function maxNumber(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(`максимальное значение ${firstNumber}`);
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(`максимальное значение ${secondNumber}`);
    }
    else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log(`максимальное значение ${thirdNumber}`);
    }
    else if(firstNumber === secondNumber && firstNumber > thirdNumber){
        console.log(`максимальные значения ${firstNumber} и ${secondNumber}`);
    }
    else if( thirdNumber === secondNumber && thirdNumber > firstNumber){
        console.log(`максимальные значения ${secondNumber} и ${thirdNumber}`);
    }
    else {
        console.log(`числа равны`);
    }
}
maxNumber(firstNumber, secondNumber, thirdNumber);

/*==========задание 4========== */
const sum = (a, b) => (a + b);
console.log(sum(2, 6));

const diff = (c, d) => (c - d);
console.log(diff(6, 2));


const multiplication = (m, n) => (m * n);
console.log(multiplication(2, 6));

const division = (x, y) => (x / y);
console.log(division(8, 4));  