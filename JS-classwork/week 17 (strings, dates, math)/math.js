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