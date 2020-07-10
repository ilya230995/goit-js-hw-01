" use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const enterPassword =  prompt('Please entert a password');

if (enterPassword === null) {
    message = 'Отменено пользователем!';
    console.log(message);
}
else if (enterPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    console.log(message);
}
else if (enterPassword !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
}

alert(message);