
//Запросить у пользователя число и вывести все делители этого числа.

let number = +prompt('введите целое число');
// let i = 1
for(let i=1; i< number+1; i++){
    if (number % i == 0) {
      console.log(i);
    }
}

 