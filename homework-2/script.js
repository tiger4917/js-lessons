// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt('Введите первое число'));
if (num1 <= 1){
    console.log('num1 меньше или равен 1');
}
else{
    console.log('условие не соблюдается');
}

let num2 = Number(prompt('Введите второе число'));
if (num2 >= 3){
    console.log('num2 больше или равен 3');
}
else{
    console.log('условие не соблюдается');
}

// Задание №2
// let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

let test = true;
console.log((test === true) ? '+++' : '---');

//задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = Number(prompt('Введите число от 1 до 31'));
if (day >= 1 && day <= 10){
    console.log('число в первой декаде месяца');
}
else if (day >= 11 && day <= 20){
    console.log('число во второй декаде месяца');
}
else if (day >= 21 && day <= 31){
    console.log('число в треьей декаде месяца');
}
else {
    console.log(`Введите число от 1 до 31`);
}

//Задание №4

// let userNumber = Number(prompt('Введите корректное положительное цело число'));
// if (userNumber >= 1 && userNumber < 10){
//     console.log(`В числе 0 сотен , 0 десятков , ${userNumber % 10} единиц`);
// }
// else if (userNumber >= 10)