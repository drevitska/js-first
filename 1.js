//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let number1 = +prompt('введите первое целое число');

let number2 = +prompt('введите второе  целое число');

//первій способ

let a = number1,
  sum1 = 0;

if (number1 > number2){
  number1 = number2;
  number2 = a;
}

for (let i = number1; i <= number2; i++) {
  sum1 += i; 
}

console.log('сумма всех чисел первым способом =', sum1)

//второй способ

let sum2 = ((number2 - number1) + 1) * (number1 + number2)/2;

console.log('сумма всех чисел вторым способом =', sum2);