
//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let even = 0, odd = 0, plus = 0, minus = 0 , nol = 0;

for (let i = 0; i < 10; i++) {

  let num = +prompt('введите целое число');
  
  if (num > 0) {
    plus++
  } 
  
  if (num < 0) {
    minus++
  } 

  if (num === 0) {
    nol++
  } else {
    if (num % 2 === 0) {
    even++
    }
    else {
    odd++
    }
  }
}
console.log('Вы ввели',plus,'положитнльных чисел')
console.log('Вы ввели',minus,'отрицательных чисел')
console.log('Вы ввели',nol,'нулей')
console.log('Вы ввели',even,'четных чисел')
console.log('Вы ввели',odd,'нечетных чисел')
