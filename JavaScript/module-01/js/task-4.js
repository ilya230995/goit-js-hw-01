" use strict";

const credits = 23580;
const pricePerDroid = 3000;
const droidsQuantity =  prompt('Сколько дроидов вы хотите купить?');
let totalPrice;
let balance;

if (droidsQuantity === null) {
    alert('Отменено пользователем!');
}
else if (Number.isNaN(Number(droidsQuantity))) {
    alert('Вы ввели не число');
}
else if (droidsQuantity) {
    totalPrice = +droidsQuantity * pricePerDroid;
    console.log(totalPrice);
    if (totalPrice > credits) {
        alert('Недостаточно средств на счету!')
    }
    else {
        balance = credits - totalPrice;
        alert(`Вы купили ${droidsQuantity} дроидов, на счету осталось ${balance} кредитов.`)
    }
}

