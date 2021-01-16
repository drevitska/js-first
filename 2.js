//Запросить 2 числа и найти только наибольший общий делитель.

let number1 = +prompt('введите целое число');

let number2 = +prompt('введите второе целое число');

let a,max,min;

if (number1 < number2) {
  a = number1
  number1 = number2, number2 = a;
}

let res = number1 % number2;

if (res === 0) {
  console.log('наибольший общий делитель =', number2);
}else {
    while (res !== 0) {
      number1 = number2,
      number2 = res
      res = number1 % number2;
    }
console.log('наибольший общий делитель =', number2);
}
