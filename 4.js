//Определить количество цифр в введенном числе.

let number = +prompt('введите целое число');

let i = 0;

if (number < 0) {
  number = -number
}

if (number == 0) {
  console.log('количество цифр в введенном числе 1');
} else {
    while (number >= 1) {
      number = number / 10;
      i++;
    }
  }
  console.log('количество цифр в введенном числе', i);