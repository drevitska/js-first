//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let number1 = +prompt('введите меньшее целое число');

let number2 = +prompt('введите большее целое число');

let sum = ((number2 - number1) + 1) * (number1 + number2)/2;

console.log('сумму всех чисел =', sum);