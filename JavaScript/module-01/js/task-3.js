" use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const enterPassword =  prompt('Please entert a password');

if (enterPassword === null) {
    message = 'Отменено пользователем!';
}
else if (enterPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else if (enterPassword !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';    
}

console.log(message);
alert(message);