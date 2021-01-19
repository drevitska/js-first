// //Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 
// и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, 
// < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон.
//  Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50,
//   то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

console.log(`Загадайте число от 0 до 100`);

let min = 0, max = 100, answer, cal = 0, middle;

do {
  middle = Math.round((max + min) / 2);

  answer = prompt(`Ваше число >, < или = ${middle}`);
  
  if (max - max === 1) {
    if ( answer === `>`) { 
    middle = max;
    cal = 1;
    } else {
    middle = min;
    cal = 1;
    }
  }

  if ( answer === `>`) { 
    min = middle++;
  }

  if ( answer === `<`) { 
  max = middle--;
  }

  if ( answer === `=`) { 
  cal = 1;
  }
 
} while (cal < 1)

console.log(`Вы загадали ${middle}`)