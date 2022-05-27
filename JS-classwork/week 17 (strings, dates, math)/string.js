let users = `petya, masha, olya`;
// Любая строка - это массив из символов (букв),
// и каждый символ имеет свой индекс, и к каждому символу
// можно обратиться, а также получить длину строки
console.log(users.length);

let test = "Мы компания \"Google\"";
//такая запись \"...\" позволяет поставить ковычки, 
//чтобы они нормально отображались
console.log(test);

//найти строку внутри другой
let position = test.indexOf("Google");
console.log(position);
//это нужно для: замены, подстановки, вырезания, 
//т.е. сначала находим номер позиции, а затем делаем действие

let sliced = test.slice(position, -1); //-1 применяется для вырезания последнего символа с конца, если нужно больше, то -2, -3 и т.д.
console.log(sliced);

//Замена одного на другое - поменяли google на apple
let apple = test.replace("Google", "Apple");
console.log(apple);

//Замена username на имя пользователя
let message = "Привет, username!";
let name = "Катя";
let result = message.replace("username", "Катя");
console.log(result);

//для того, чтобы при введении слова маленькая буква меняласьн абольшую
//необходимоц делать так: /слово/i

//Преобразование регистров
let big = name.toUpperCase();
console.log(big);

let small = name.toLowerCase();
console.log(small);

//Сравнение строк без учета регистра
let username = "катя";
if(name.toLowerCase() == username.toUpperCase()){
    console.log(true);
}

console.log(name[0]);
console.log(name[name.length-1]);

//Разделитель по какмоу-либо символу => превращается в массив
let txt = "Москва,Санкт-Петербург,Новосибирск,Екатеринбург";
let cities = txt.split(",");
console.log(cities);
console.log(cities.join(";"));

//Избавление от лишних пробелов
let str = "    Москва";
let clean = str.trim(str);
console.log(clean);

//Со строками такое действие не сработает!!!
name[0] = "Б";

//Перенос строки с помощью \n
let test1 = "Мы компания \n Google";
console.log(test1);

let test2 = "катя";
let testname = test2[0].toLocaleUpperCase();
console.log(testname);

//Удаление элемента с конца строки
function currency(num){
    let enter = prompt("num: ");
    console.log(enter.slice(0, -1));
}

button.addEventListener('click',currency);
