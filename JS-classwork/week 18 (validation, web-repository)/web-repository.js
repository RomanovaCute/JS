//Способы сохранения данных

/*localStorage*/
// хранит данные бессрочно
// очищается только вручную через JS, не очищается автоматически со временем
// хранит данные объемом до 5 Мб
// не поддерживается старыми браузерами
// можно передавать данные между вкладками
// ! нельзя передать на сервер
// !!! никогда не хранить важную информацию (пароли, и т.п.)

/*sessionStorage*/
// работает только в данном сессии, пока пользователь находится на странице
// использует контекст браузера только в рамках вкладок, т.е. между вкладками данные передавать нельзя
// объем данным меньше 5 Мб
// не поддерживаетс старыми браузерами
// ! нельзя передать на сервер

/*Cookie*/
// данные, которые передаются между заголовками, т.е. между сервером и веб-страницей
// устанавливается срок хранения вручную (время)
// хранит данные объемом 4 Кб
// могут быть защищенными
// для Европы: предупреждение об использовании cookie обязательно!

/*Когда и что использовать?*/
//   Надо передавать данные на сервер? => Да => cookie
//   Надо, чтобы сессия сгорала при закрытии браузера? => Да => sessionStorage
//   Для хранения большого объема данных и бессрочно => localStorage

//Из консоли
//задаем логин
localStorage.setItem('login','katya2001') 
undefined

//достаем логин из localStorage
localStorage.getItem('login')
'katya2001'

//очищение
localStorage.clear('login')

//При первой загрузке страницы имени в инпуте не будет, но если перезагрузить страницу,
//то имя в инпуте останетя, но сообщения все равно исчезнут, т.к. они не записываются
//в localStorage

document.addEventListener('DOMContentLoaded', function(event) {
    let name = localStorage.getItem('name');
    if (name != null){
        document.querySelector('#author').value = name;
    }
});

function sendMessage(author, comment){
    document.querySelector("#chat").innerHTML += 
    `<span class='author'>${author}:</span><span>${' ' + comment}</span><br>`;
}

function checkMessage(){
    let author = document.querySelector('#author').value;
    let comment = document.querySelector('#comment').value;
    
    //Проверка наличия в локальном хранилице имени пользователя
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name',author);
    }
    sendMessage(author, comment);
}


button.addEventListener('click', checkMessage);