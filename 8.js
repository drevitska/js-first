//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» 
//и так до тех пор, пока пользователь нажимает OK.

let sunday = "sunday";
let monday = "monday";
let tuesday = "tuesday";
let wednesday = "wednesday";
let thursday = "thursday";
let friday = "friday";
let saturday = "saturday";

let a,
day,
i =1;

do {
  if (i === 8) {i = 1};
  if (i === 1) {day = monday};
  if (i === 2) {day = tuesday};
  if (i === 3) {day = wednesday};
  if (i === 4) {day = thursday};
  if (i === 5) {day = friday};
  if (i === 6) {day = saturday};
  if (i === 7) {day = sunday};
  a = confirm(`День недели ${day} .Хотите увидеть следующий день недели? `);
  i++
} while(a)
