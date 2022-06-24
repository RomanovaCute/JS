// API - 

// fetch(адрес куда обращаемся)
fetch('https://api.github.com/users/RomanovaCute')
.then(response => response.json())
.then(user => console.log(user))
.catch(error => console.log(error)); //показывать ошибку, если она есть

//1. Получили информацию с сервера
//2. Сконвертировали ее в json
//3. Вывод и др. с этой информацией