// JSON - JavaScript Object Notation
// JSON - это строка, и только через строку можно общаться с сервером,
// как и объект состоит из ключ - значения

let user = {
    name: 'Катя',
    married: false,
    age: 21
}

let userJson = `{
    'name': 'Катя',
    'married': false,
    'age': 21
}`;

// у JSON нет функций, т.е. остаются только чистые данные, значения
// Сериализация - превращение объекта в строку - stringify
// Десериализация (парсинг) - обратный процесс - parse
// это статические методы!

let userJson = JSON.stringify(user);