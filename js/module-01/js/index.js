'use script';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const login = prompt('Введите логин:');
if (login === null) {
  alert('Отменено пользователем!');
} else if (login !== adminLogin) {
  alert('Доступ запрещен, неверный логин!');
} else {
  const password = prompt('Введите пароль:');
  if (password === null) {
    alert('Отменено пользователем!');
  } else if (password !== adminPassword) {
    alert('Доступ запрещен, неверный пароль!');
  } else {
    alert('Добро пожаловать!');
  }
}