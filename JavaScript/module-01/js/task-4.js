" use strict";

const credits = 23580;
const pricePerDroid = 3000;
const droidsQuantity =  +prompt('Сколько дроидов вы хотите купить?');
let totalPrice;
let balance;

if (droidsQuantity === null) {
    console.log('Отменено пользователем!');
}
else if (droidsQuantity) {
    totalPrice = droidsQuantity * pricePerDroid;
    console.log(totalPrice);
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!')
    }
    else {
        balance = credits - totalPrice;
        console.log(`Вы купили ${droidsQuantity} дроидов, на счету осталось ${balance} кредитов.`)
    }

}