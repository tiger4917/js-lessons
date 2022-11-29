// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        console.log(`${array[i]} - это ноль`);
    }
    else if (i % 2 == 0) {
        console.log(`${i} - это четное число`);
    }
    else {
        console.log(`${i} - это нечетное число`);
    }
}

/* ===========задание 2============ */

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


const firstArray = [1, 2, 3, 4, 5, 6, 7];
console.log(`Данный массив : ${firstArray}`);
console.log(`Результирующий массив: ${changeArray(firstArray)}`);

function changeArray(array) {
    const newResultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 4 && array[i] !== 5) {
            newResultArray.push(array[i]);
        }
    }
    return newResultArray;
}

/*==============задание 3==================*/
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let newArray = genArray(5);
console.log(newArray);
console.log(`Сумма элементов массива равна : ${(sumOfElements(newArray))}`);
console.log(`Минимальное значение элементов массива равно: ${minNumber(newArray)}`);
findThree(newArray);

function genArray(lengthOfArray) {
    const newArray = [];
    for (let i = 0; i < lengthOfArray; i++) {
        newArray[i] = Math.round(Math.random() * 10);
    }
    return newArray;
}

function sumOfElements(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    return sum;
}

function minNumber(inputArray) {
    let min = inputArray[0]; 
    for (let i = 0; i < inputArray.length; i ++){
        if (inputArray[i] < min){
            min = inputArray[i];
        }
    }
    return min;
}

function findThree(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 3) {
            console.log(`Число 3 есть в массиве`);
        }
    }
}


/*===================задание 4 =====================*/

// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. 
// Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат
// и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
let squareArr = genArr(10);
let cubArr = squareArr.slice(0);
console.log(squareArr);

let result = squareOfElement(squareArr);
console.log(result);

let value = cubOfElement(cubArr);
console.log(value);

function genArr(lengthOfArr) {
    const arr = [];
    for (i = 0; i < lengthOfArr; i++) {
        arr[i] = Math.round(Math.random() * 10);
    }
    return arr;
}

function squareOfElement(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = array[i] ** 2;
        }
    }
    return array;
}

function cubOfElement(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            array[i] = array[i] ** 3;
        }
    }
    return array;
}

/*===============задание 5==============*/

// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

const newArr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
console.log(`Исходный массив: ${newArr}`);
console.log(`Количество цифер 3 в этом массиве :  ${countOfThree(newArr)}`);

function countOfThree(newArr2) {
    let count = 0;     //[1,3,3]
    for (let i = 0; i< newArr2.length; i++) {
        if (newArr2[i] === 3){
            count ++;
        }
    }
    return count;
}

/*===============задание 6==============*/

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода массива преобразуйте его в следующий:
// [1, 4, 5]

const arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(`Данный массив : ${arrayOfNumbers}`);
console.log(`Итоговый массив ${changeArray(arrayOfNumbers)}`);


function changeArray(array) {
    const newResultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 2 && array[i] !== 3) {
            newResultArray.push(array[i]);
        }
    }
    return newResultArray;
}