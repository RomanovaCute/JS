let now = new Date();
console.log(now);

//24 -часы, 3600 - секунды, 1000 
let timestamp = new Date(24*3600*1000);
console.log(timestamp);

//Создание даты через строку
let date = new Date("2022-05-26");
console.log(date);

//
let num = new Date(2022,4,26);
console.log(num);

console.log(num.getDate()); //день
console.log(num.getMonth()); //месяц
console.log(num.getFullYear()); //год
console.log(`${num.getDate()}.${num.getMonth()+1}.${num.getFullYear()}`);

num.setFullYear(2023); //поменяли год на 2023
console.log(num);

var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
};
console.log[new Date().toLocaleString("ru",options)];

//Высляем сколько времени прошло между двумя датами
//1000 - получаем секунды
//3600 - получаем часы
let diff = Date.now() - date;
console.log(diff/1000/3600);

//Сколько секунд осталось до завтра:
let today = new Date(), //сегодняшняя дата
    tomorrow = new Date(); //завтрашняя дата

tomorrow.setDate(today.getDate() + 1); //завтрашнее число
tomorrow.setHours(0,0,0,0); //завтрашнее время

let difftime = (Math.round((tomorrow - today) / 1000));
console.log(difftime);
