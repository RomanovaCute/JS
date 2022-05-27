//Округление
//floor - в большую
//ceil - в меньшую
//round - по математически (если 0.5 то в большую, и т.д)

console.log(Math.floor(0.01));
console.log(Math.ceil(0.01));
console.log(Math.round(0.01));
console.log((0.0145345).toFixed(2));//округление до какого-то знака (здесь до 2го)

//Генерация рандомного числа + округление (целое число до ста)
console.log(Math.round(Math.random()*100));

//Массив из рандомных чисел
let array = [];
array.push(Math.round(Math.random()*100));
array.push(Math.round(Math.random()*100));
array.push(Math.round(Math.random()*100));
array.push(Math.round(Math.random()*100));
array.push(Math.round(Math.random()*100));
console.log(array);

let stroka = "Яблоко, Банан, Киви";
let res = stroka.substr(7, 8);
console.log(res);

let start = new Date(); // начинаем отсчёт времени

let test2 = "настя";
let testname = test2[0].toLocaleUpperCase() + test2.slice(1);
console.log(testname);


let num1 = new Date(2021,0,24,22,51);
console.log(num1);

// let todaydate = new Date();
// let tomorrowdate = new Date(todaydate.getFullYear(),todaydate.getMonth(),todaydate.getDay()+1);
// let diffdate = todaydate - todaydate;
// console.log(Math.round(diffdate));

// let nowww = new Date();
// let difff = Date.now() - nowww;
// console.log(difff/1000);

