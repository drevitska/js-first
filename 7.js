// Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат 
// (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let number = +prompt('Введите число');
let shift = +prompt('На сколько цифр его сдвинуть');

let length = 0,
num = number,
res = number;

while (num >= 1) {
  num = num / 10;
  length++;
}
 
 console.log('количество цифр в введенном числе', length);
 
 console.log('start',number);

if (shift < length) {
 for (i = 0; i < shift ; i++) {
    console.log('step',i)
    res = res / 10 - (res % 10)/10 + (res % 10) * (10 ** (length-1));
  } 
}else {
   res = 'Выполнить невозможно';
 }

  console.log('finish',res);
