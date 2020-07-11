" use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert('Вы ввели не число')
  }
  else {
    total = total + Number(input);
    console.log(total);
  }

} while (input !== null);


alert(`Общая сумма чисел равна ${total}`);